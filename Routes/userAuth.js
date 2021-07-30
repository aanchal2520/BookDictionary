const express = require('express');
const router = express.Router();
const { userLogin, userSignin } = require('../Controllers/userAuth');

router.post('/userLogin', userLogin);
router.post('/userSignin', userSignin);

module.exports = router;