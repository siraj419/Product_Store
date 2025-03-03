import express from 'express';
import { getProducts, deleteProduct, createProduct, updateProduct } from '../controllers/productController.js';

const productRoutes = express.Router();

productRoutes.get('/', getProducts);
productRoutes.delete('/:id', deleteProduct);
productRoutes.put('/:id', updateProduct);
productRoutes.post('/', createProduct);

export default productRoutes;