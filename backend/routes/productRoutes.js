import express from 'express';
const router =express.Router();
//import products from '../data/products.js';
import Product from '../models/productModel.js';
import asyncHandler from '../middleware/asyncHandler.js';

import {getProducts,getProductById} from '../controller/productController.js'

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

router.route('/').get(getProducts);
router.route('/:id').get(getProductsById);

export default router;