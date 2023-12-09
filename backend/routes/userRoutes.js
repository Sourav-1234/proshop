import express from 'express';
const router =express.Router();
//import products from '../data/products.js';
// import Product from '../models/productModel.js';
// import asyncHandler from '../middleware/asyncHandler.js';

import {authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUserByID,
    deleteUser,
    updateUser }  from '../controller/userController.js'


import {protect,admin} from '../middleware/authMiddleware'
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

router.route('/').post(registerUser).get(getUsers);
router.post('/logout',logoutUser);
router.post('/auth',authUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile);
router.route('/:id').delete(deleteUser).get(getUserByID).put(updateUser);



export default router;