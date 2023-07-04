const mongoose = require('mongoose');

const tokenModel = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    token: { type: String },
    isDelete: { type: Boolean, default: false },
    status: { type: Boolean, default: true },
    createdAt: { type: Number, default: Date.now() },
    expiryDate: { type: Number, default: Date.now() },
}, { collection: "token" });
module.exports = TokenSchema = mongoose.model("token", tokenModel);