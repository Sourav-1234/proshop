import dotenv from 'dotenv';
import express from 'express';
///very important
dotenv.config();
import products from './data/product.js';
const port=process.env.PORT||5000;
import connectDB from './config/db.js';

connectDB();


const app=express();

// app.get('/',(req,res) =>{
//     res.send('API is running...')
// });


app.get('/api/products', (req,res) =>{
 res.json(products);
 })
app.get('/api/products/:id',(req,res)  =>{
    const product= products.find((p) => p._id === req.params.id);
    res.json(product);
})

app.listen(port ,()=> console.log(`Server running on port${port}`));

