const express = require('express');
const router = express.Router();

const User = require('../controller/userController');
const Product = require('../controller/productController')

router.post('/register', User.register);
router.post('/login',User.login)
router.get('/getuser', User.getuser)
router.post('/addproduct',Product.addProduct)
module.exports =router;