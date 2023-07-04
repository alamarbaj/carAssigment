const mongoose = require('mongoose');

const carModel = new mongoose.Schema({
    type: { type: String, default: "" },
    name: { type: String,  default: "" },
    model: { type: String, default: "" },
    car_info: { type: String,  default: "" },
    isDelete: { type: Boolean, default: false },
    status: { type: Boolean, default: true },
    createdAt: { type: Number, default: Date.now() },
    expiryDate: { type: Number, default: Date.now() },
}, { collection: "car" });
module.exports = carSchema = mongoose.model("car", carModel);