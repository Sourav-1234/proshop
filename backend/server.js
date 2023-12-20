import path from 'path';
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
import orderRoutes from './routes/orderRoutes.js';

connectDB();


const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
// app.get('/',(req,res) =>{
//     res.send('API is running...')
// });


app.use(cookieParser());

app.get('/' ,(req,res) =>{
    res.send('API is running...');
})


app.use('/api/products',productRoutes);
app.use('/api/users',userRoutes);
app.use('/api/orders',orderRoutes);
app.use('/api/upload' ,uploadRoutes);


app.get('/api/config/paypal',(req,res) =>
    res.send({
        clientId:process.env.PAYPAL_CLIENT_ID })
        );






const __dirname =path.resolve();
app.use('/uploads',express.static(path.join(__dirname,'/uploads')));



app.use(notFound);
app.use(errorHandler);

app.listen(port ,()=> console.log(`Server running on port${port}`));

