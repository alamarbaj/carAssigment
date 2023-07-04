const mongoose = require('mongoose')

const usersModel  = new mongoose.Schema({   
    user_email : {type : String , require:true ,unique : true},
    user_password: { type: String, required: true },
    user_location: { type: String, default: "" },
    user_info: { type: String,  default: "" },
    car_info: { type: String, default: "" },
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date, default: new Date() },
},{ collection: "users" });
    module.exports = userSchema = mongoose.model("users",usersModel)