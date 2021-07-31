const express = require('express');
const router = express.Router();
const { adminSignin, adminLogin } = require('../Controllers/adminAuth');

router.post('/adminSignin', adminSignin);
router.post('/adminLogin', adminLogin);

module.exports = router;