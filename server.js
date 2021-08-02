const express = require('express');
const app = express();
const mysql = require('mysql');
const PORT = 3000;

app.use(express.json());

const userAuthRoutes = require('./Routes/userAuth');
const adminAuthRoutes = require('./Routes/adminAuth');
const booksRoutes = require('./Routes/books');


app.get('/', (req, res) => {
    return res.status(200).json({ 'status' : 'OK'});
})

app.use('/userAuth', userAuthRoutes);
app.use('/adminAuth', adminAuthRoutes);
app.use('/books', booksRoutes);

app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`);
})