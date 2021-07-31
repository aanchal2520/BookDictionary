const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const db = require('../databaseConnect');

//signin api ->
exports.adminSignin = (req, res) => {

    const {firstname, lastname, username, password} = req.body;

    db.query('Select * from admins where username = ' + mysql.escape(username), async (err0, res0) => {
        if(!err0) {
            if(res0.length === 0) {
                let hashedPassword = await bcrypt.hash(password, 12);
                db.query('Insert into admins (firstname, lastname, username, password) values('
                + mysql.escape(firstname) + ','
                + mysql.escape(lastname) + ','
                + mysql.escape(username) + ','
                + mysql.escape(hashedPassword) 
                + ');', (err1, res1) => {
                    if(!err1) {
                        return res.status(200).json({ message: 'User Successfully SIgned-Up!!' });
                    } else {
                        console.log(err1);
                        return res.status(500).json({ message: 'Internal Server Error!' });
                    }
                })
            } else {
                return res.status(401).json({ message: 'User already exists' });
            }
        } else {
            console.log(err0);
            return res.status(500).json({ message: 'Internal Server Error!' });
        }
    })
}

//adminLogin ->
exports.adminLogin = (req, res) => {

    const {username, password} = req.body;

    db.query('Select password from admins where username = ' + mysql.escape(username), async (err0, res0) => {
        if(!err0) {
            if(res0.length === 1) {
                if(await bcrypt.compare(password, res0[0].password)) {
                    return res.status(200).json({ message: 'Login Successful' })
                } else {
                    return res.status(401).json({ message: 'Unauthorized User' });
                }
            } else {
                return res.status(401).json({ message: 'No Such User Exist' });
            }
        } else {
            console.log(err0);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    })
}

