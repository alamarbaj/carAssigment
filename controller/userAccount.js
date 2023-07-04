const userSchema = require("../model/userSchema")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const tokenSchema = require("../model/tokenSchema");
const secretkey = "secretkey";

exports.register = async (req, res) => {
    try {
        const body = req.body
        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(body.password, salt);

        const obj = {
            user_email: body.email,
            user_password: passwordHash,
            user_location: body.location,
            user_info: body.info,
            car_info: body.carinfo
        }
        const result = await userSchema.create(obj)
        res.json({
            status: true,
            data: result,
            message: "User is created Successfully"
        })
    } catch (error) {
        res.json({
            status: false,
            data: [],
            message: error.message
        })
    }
}

exports.login = async (req, res) => {
    try {
        const user = await userSchema.findOne({ user_email: req.body.email })
        !user && res.status(404).json('user not found')

        const { _id } = user._id

        const validPassword = await bcrypt.compare(req.body.password, user.user_password)
        !validPassword && res.status(400).json('wrong password')

        const createtoken = await jwt.sign({ _id }, secretkey)


        const expiryat = new Date()
        expiryat.setSeconds(
            expiryat.getSeconds() +120,
        )

        const obj = {
            token :  createtoken,
            userId : _id,
            expiryDate : expiryat
        }

        const token = await tokenSchema.create(obj)

        res.json({
            status: true,
            data: user,
            token: token,
            message: "User Added"
        })

    } catch (error) {
        res.status(500).json(error.message)
    }
}