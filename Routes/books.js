const express = require('express');
const router = express.Router();
const { getBooks } = require('../Controllers/books');

router.post('/getBooks', getBooks);

module.exports = router;