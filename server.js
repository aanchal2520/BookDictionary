const express = require('express');
const app = express();
const mysql = require('mysql');
const PORT = 3000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'slpa76542',
    database: 'bookdictionary'
});

app.use(express.json());

const userAuthRoutes = require('./Routes/userAuth');


app.get('/', (req, res) => {
    return res.status(200).json({ 'status' : 'OK'});
})

app.use('/userAuth', userAuthRoutes);

app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`);
})