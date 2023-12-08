import {Jwt}  from "jsonwebtoken";
import asyncHandler from './asyncHandler';
import User from '../models/userModel.js';

export const protect= asyncHandler(async (req,res,next)=>{
    let token;

    token= req.cookies.jwt;

    if(token){
        try{
            const decoded=jwt.verify(token,process.env.JWT_SECRET);
            await User.findByID(decoded.userId).select('-password');
      
        }catch(error){
             console.log(error);
             res.status(401);
             throw new Error('Not authorized, token failed');
        }
    }
    else{
        res.status(401);
        throw new Error('Not authorized, no token');
    }

});


const admin= (req,res,next) =>{
  if(req.user && req.user.isAdmin){
    next();
  }
  else{
    res.status(401);
    throw new Error('Not authorized, as admin');
  }
};

export {protect,admin};