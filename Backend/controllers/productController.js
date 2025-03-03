import mongoose from 'mongoose';
import Product from '../models/Product.js';


const getProducts = async (req, res) => {
    try{
        const products = await Product.find({});
        res.status(200).json({success: true, data: products});
    }catch(error){
        res.status(500).json({success: false, message: "Server Error"});
    }
}

const deleteProduct = async (req, res) => {
    const productId = req.params.id;
    try{
        await Product.findByIdAndDelete(productId);
        res.status(200).json({success:true, message: "Product deleted successfully"});
    }
    catch(error){
        res.status(404).json({success:false, message: "Product not found"});
    }
};

const updateProduct = async (req, res) => {
    const productId = req.params.id;
    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid(productId)){
        res.status(404).json({success: false, message: "Invalid Product Id"});
        return;
    }

    try{
        const updatedProduct = await Product.findByIdAndUpdate(productId, product, {new: true});
        res.status(200).json({success: true, data: updatedProduct});
    }
    catch(error){
        res.status(500).json({success:false, message: "Server Error"});
    }
};

const createProduct = async (req, res) => {
    const product = req.body;
    console.log(product);
 
    if(!product.Name || !product.Price || !product.Image){
         res.status(400).json({success: false, message: "Please provide all the details"});
         return;
    }
 
    const newProduct = new Product(product);
    try {
        const createdProduct = await newProduct.save();
        res.status(201).json(createdProduct);
    }
     catch(error){
         res.status(500).json({error: error.message});
     }
 
};

export { getProducts, deleteProduct, updateProduct, createProduct };