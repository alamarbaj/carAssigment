const carSchema = require("../model/carSchema");

exports.addCar = async (req, res) => {
    try {
        const body = req.body;
        const obj = {
            type: body.type,
            name: body.name,
            model: body.model,
            car_info: body.car_info
        }
        const result = await carSchema.create(obj)
        res.json({
            status: true,
            data: result,
            message: "Car is created Successfully"
        })
    } catch (error) {
        res.json({
            status: false,
            data: [],
            message: error.message
        })
    }
}

exports.findAllCar = async (req, res) => {
    try {
        const result = await carSchema.find()
        res.json({
            status: true,
            data: result,
            message: "Fetch all Car"
        })
    } catch (error) {
        res.json({
            status: false,
            data: [],
            message: error.message
        })
    }
}

exports.getSingleCar = async (req, res) => {
    try {
        const _id = req.params._id;
        const result = await carSchema.findOne({ _id })
        res.json({
            status: true,
            data: result,
            message: "Fetch Single Car"
        })
    } catch (error) {
        res.json({
            status: false,
            data: [],
            message: error.message
        })
    }
}

exports.carUpdate = async (req, res) => {
    try {
        const _id = req.body._id;
        const body = req.body
        const obj = {
            type: body.type,
            name: body.name,
            model: body.model,
            car_info: body.car_info
        }
        const result = await carSchema.updateOne({ _id }, { $set: obj })
        res.json({
            status: true,
            data: result,
            message: "Car is Updated"
        })
    } catch (error) {
        res.json({
            status: false,
            data: [],
            message: error.message
        })
    }
}

exports.deleteCar = async (req, res) => {
    try {
        const _id = req.params._id
        const result = await carSchema.findByIdAndDelete({ _id })
        res.json({
            status: true,
            data: result,
            message: "Car is deleted"
        })
    } catch (error) {
        res.json({
            status: false,
            data: [],
            message: error.message
        })
    }
}

exports.searchCar = async (req, res) => {
    try {
        let queryData = req.query.q;
        console.log(queryData);
        const result = await carSchema.find({ name: { $in: queryData } })
        if (result.length > 0) {
            res.json({
                status: true,
                data: result,
                message: "Fetch Car results by filter"
            })
        } else {
            res.json({
                status: true,
                data: result,
                message: "No Result found "
            })
        }

    } catch (error) {
        res.json({
            status: false,
            data: [],
            message: error.message
        })
    }
}