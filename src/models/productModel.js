const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A product should have a name']
    },
    price: {
        type: Number,
        required: [true, 'A product should have a price']
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;