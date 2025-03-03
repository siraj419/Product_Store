import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    Image: {
        type: String,
        required: true
    },

}, {
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);

export default Product;
