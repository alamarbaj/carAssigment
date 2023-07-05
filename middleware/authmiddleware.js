const tokenSchema = require("../model/tokenSchema");


module.exports = async (req, res, next) => {
    console.log("Authorization middleware");
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).send("token access denied")
    }
    const findtoken = await tokenSchema.findOne({ token })
    console.log(findtoken);
    if (!findtoken) {
        return res.status(401).send("token not exist")
    }
    return next()
}
