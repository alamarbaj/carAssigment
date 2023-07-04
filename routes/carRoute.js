var express = require('express');
var router = express.Router();
const {addCar,findAllCar,getSingleCar,carUpdate,deleteCar,searchCar} = require('../controller/car')

/* GET users listing. */
router.post('/addCar',addCar)
router.get('/findAllCar',findAllCar)
router.get('/getSingleCar/:_id',getSingleCar)
router.post('/carUpdate',carUpdate)
router.delete('/deleteCar/:_id',deleteCar)
router.get('/searchCar',searchCar)


module.exports = router;
