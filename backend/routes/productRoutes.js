import express from 'express';
const router =express.Router();
//import products from '../data/products.js';
// import Product from '../models/productModel.js';
// import asyncHandler from '../middleware/asyncHandler.js';



import {getProducts,getProductsById,createProduct,
updateProduct,deleteProduct
,createdProductReview,getTopProducts} from '../controller/productController.js';
import {protect,admin} from '../middleware/authMiddleware.js';

// router.get('/' ,asyncHandler(async(req,res) =>{
//     const products =await Product.find({});
//     res.json(products);
// })
// );



// router.get('/:id', asyncHandler(async (req,res) =>{
//     const product =await Product.findById(req.params.id);
    
//     if(product){
//        return  res.json(product);
//     }else{
//         res.status(404);
//         throw new Error('Product not found');
//     }
    
   
// }));

router.route('/').get(getProducts).post(protect,admin,createProduct);
router.get('/top',getTopProducts);
router.route('/:id').get(getProductsById).put(protect,admin,updateProduct).delete(protect,admin,deleteProduct);
router.route('/:id/reviews').post(protect,createdProductReview);



export default router;