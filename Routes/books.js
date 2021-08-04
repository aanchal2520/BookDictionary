const express = require('express');
const router = express.Router();
const { getBooks, updateBook } = require('../Controllers/books');

router.post('/getBooks', getBooks);
router.post('/updateBook', updateBook);

module.exports = router;