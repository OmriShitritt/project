const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "name is require!"],
        trim: true,
        unique: true,
        maxlenght: 50,
    },
    price: {
        type: Number,
        require: true,
        minlenght: 1,
    },
    images:{
        type: [String],
        default: ["https://i.pinimg.com/originals/96/af/7b/96af7babdccc560c51f6837524472408.jpg"]
    },
    category: {
        type: String,
        enum: ["dogs", "cats", "birds", "ferrets"],
        require: true,
   },
   color: String,
   age: {
    type: String,
    enum: ["baby", "young", "old"],
    require: true,
   },
   size: {
    type: String,
    enum: ["small", "medium", "large"],
    default:'medium',
   },

    
});

const Product = mongoose.model('products', productSchema);

module.exports = Product;