const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    categories: [],
    city: String,
    name: String,
    description: String,
    price: String,
    contactInfo: String,
    owner: String,
    imageLink: String
}, { timestamps: true });

module.exports = mongoose.model('Item', itemSchema);
