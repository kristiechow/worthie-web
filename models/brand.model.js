const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BrandSchema = new Schema({
    name: {type: String, required: true, max: 100},
    ethics: {type: Number, required: true},
    sustainability: {type: Number, required: true},
    quality: {type: Number, required: true},
    url: {type: String, required: true, max: 100},
});


// Export the model
module.exports = mongoose.model('Brand', BrandSchema);
