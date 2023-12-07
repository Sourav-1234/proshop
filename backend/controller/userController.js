import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';


const getUserProfile =asyncHandler(async (req,res) =>{
    res.send('get user profile');
})

const authUser=asyncHandler(async (req,res) =>{
    const {email,password} =req.body;

    const user =await User.findOne({email: email});

    if(user &&(await user.matchPassword )){
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin
        });
    }else{
        res.status(401);
        throw new Error('Invalid email or password')
    }
    
    console.log(req.body);
    res.send('auth user');
})

const  user=asyncHandler(async (req,res) =>{
    res.send('logout user');
  });
  

const  logoutUser=asyncHandler(async (req,res) =>{
  res.send('logout user');
});


const getUsers =asyncHandler (async(req,res) =>{
    res.send('get users');
});



const updateUserProfile =asyncHandler (async(req,res) =>{
    res.send('update user profile');
});


const deleteUser=asyncHandler(async(req,res) =>{
    res.send('delete user');
})



const updateUser =asyncHandler(async (req,res) =>{
    res.send('update user');
});

const registerUser =asyncHandler(async (req,res) =>{
    res.send('login user');
})

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    updateUser
}