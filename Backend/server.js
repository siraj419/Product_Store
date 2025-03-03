import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.js';

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use('/api/products', productRoutes);

app.listen(port, ()=>{
    console.log("Server started at http://localhost:" + port);
    connectDB();
});