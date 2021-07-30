const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'slpa76542',
    database: 'bookdictionary'
});

//signin api ->
exports.userSignin = (req, res) => {
    
    const {username, password} = req.body;

    db.query('Select * from users where username = ' + mysql.escape(username), async (err0, res0) => {
        if(!err0) {
            if(res0.length === 0) {
                let hashedPassword = await bcrypt.hash(password, 12);
                db.query('Insert into users (username, password) values(' 
                + mysql.escape(username) + ','
                + mysql.escape(hashedPassword)
                + ');', (err1, res1) => {
                    if(!err1) {
                        return res.status(200).json({ message: "User Signed-In succesfully" });
                    } else {
                        console.log(err1)
                        return res.status(500).json({ message: 'Something went wrong!' });
                    }
                })
            } else {
                return res.status(401).json({ message: 'User already Exists' });
            }
        } else {
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    })
}


//Login api ->
exports.userLogin = (req, res) => {

    const {username, password} = req.body;

    db.query('Select password from users where username = ' + mysql.escape(username), async (err0, res0) => {
        if(!err0) {
            if(res0.length === 1) {
                if(await bcrypt.compare(password, res0[0].password)) {
                    return res.status(200).json({ message: 'login successful' });
                } else {
                    return res.status(401).json({ message: 'Unauthorized User' });
                }
            } else {
                return res.status(401).json({ message: 'No such user exists' });
            }        
        } else {
            console.log(err0);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    })
}