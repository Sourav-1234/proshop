import dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';
import {notFound ,errorHandler} from './middleware/errorMiddleware.js';
///very important
dotenv.config();
import products from './data/product.js';
const port=process.env.PORT||5000;
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';

connectDB();


const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
// app.get('/',(req,res) =>{
//     res.send('API is running...')
// });


app.use(CookieParser());

app.get('/' ,(req,res) =>{
    res.send('API is running...');
})


app.use('/api/products',productRoutes);
app.use('api/users',userRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(port ,()=> console.log(`Server running on port${port}`));

