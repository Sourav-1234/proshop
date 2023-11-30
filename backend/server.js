import dotenv from 'dotenv';
import express from 'express';
import {notFound ,errorHandler} from './middleware/errorMiddleware.js';
///very important
dotenv.config();
import products from './data/product.js';
const port=process.env.PORT||5000;
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';


connectDB();


const app=express();

// app.get('/',(req,res) =>{
//     res.send('API is running...')
// });

app.get('/' ,(req,res) =>{
    res.send('API is running...');
})


app.use('api/products',productRoutes);
app.use(notFound);


app.listen(port ,()=> console.log(`Server running on port${port}`));

