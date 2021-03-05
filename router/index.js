const express = require('express');
const router = express.Router();

const User = require('../controller/userController');

router.post('/register', User.register);
router.post('/login',User.login)
router.get('/getuser',User.getuser)
module.exports =router;