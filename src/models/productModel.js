const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A product should have a name'],
        trim: true
    },
    price: {
        type: Number,
        required: [true, 'A product should have a price']
    },
    ratingAverage: {
        type: Number,
        default: 4.5
    },
    ratingQuantity: {
        type: Number,
        default: 0
    },
    imageCover: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;