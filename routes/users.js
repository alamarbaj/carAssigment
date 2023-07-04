var express = require('express');
var router = express.Router();
const {register,login} = require('../controller/userAccount')

/* GET users listing. */
router.post('/register',register)
router.get('/login',login)

module.exports = router;
