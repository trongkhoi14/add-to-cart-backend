const mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a product name."],
    },
    description: {
        type: String,
        trim: true
    },
    image: {
        type: String
    },
    price: {
        type: Number,
        required: [true, "Please provide a base price"]
    },
    color: {
        type: String
    },
    isDeleted: {
        type: Boolean
    }
})

module.exports = mongoose.model('Product', productSchema)