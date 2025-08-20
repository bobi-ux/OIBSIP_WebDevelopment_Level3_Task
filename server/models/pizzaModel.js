const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    image: {
        type: String, // URL or file path
        required: true
    },
    category: {
        type: String,
        enum: ['Veg', 'Non-Veg', 'Vegan'],
        required: true
    },
    sizes: {
        type: [String],
        default: []
    },
    toppings: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Pizza = mongoose.model('Pizza', pizzaSchema);
module.exports = Pizza;
 
