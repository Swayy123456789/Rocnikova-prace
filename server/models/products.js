const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: {type: String, required: true},
    brand: {type: String, required: true},
    price: {type: Number, required: true},
    type: {type: String, required: true},
    material: {type: String, required: true},
    strapMaterial: {type: String, required: true},
    imagePath: {type: String, required: true}
});

module.exports = mongoose.model("Products", schema);