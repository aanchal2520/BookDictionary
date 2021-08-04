const express = require('express');
const router = express.Router();
const { getBooks, updateBook, createBook, deleteBook } = require('../Controllers/books');

router.post('/getBooks', getBooks);
router.post('/updateBook', updateBook);
router.post('/createBook', createBook);
//router.post('/deleteBook', deleteBook);

module.exports = router;