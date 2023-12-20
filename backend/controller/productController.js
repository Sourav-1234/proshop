import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

const getProducts =asyncHandler(async(req,res) =>{
    const products = await Product.find({});
    res.json(products);
});


const updateProduct =asyncHandler(async (req,res) =>{
    const {name,price,description,image,brand,category,countInStock }=req.body;

    
    
    const product=await Product.findById({req.params.id});

    if(product){
        product.name=name,
        product.price=price,
        product.description=description,
        product.image=image,
        product.brand=brand,
        product.category=category,
        product.countInStock=countInStock;


        const updatedProduct =await product.save();
        res.json(updatedProduct);
    }else{
        res.status(404);
        throw new Error('Resource not found');

    }

})




const getProductById = asyncHandler(async( req,res) =>{
    const product =await Product.findById(req.params.id);

    if(product){
        return res.json(product);
    }else{
        res.status(404);
        throw new Error('Resource not found');
    }
});

const createProduct =asyncHandler(async(req,res) =>{
    const product=new Product({
        name:'Sample a name',
        price:0,
        user:req.user._id,
        image:'/images/sample.jpg',
        category:'Sample category',
        countInStock:0,
        numReviews:0,
        description:'Sample description',



    })
    const createProduct= await product.save();
    res.status(201).json(createProduct);
});



const deleteProduct =asyncHandler(async (req,res) =>{
   const product=await Product.findById({req.params.id});

    if(product){
       await Product.deleteOne({ _id:product._id });
       res.status(200).json({message:'Product deleted!'});

       
    }else{
        res.status(404);
        throw new Error('Resource not found');

    }

})






export {getProducts, getProductById,createProduct,updatedProduct,deleteProduct};