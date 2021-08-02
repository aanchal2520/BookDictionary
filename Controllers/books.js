const mysql = require('mysql');
const db = require('../databaseConnect');

//get books api ->
exports.getBooks = (req, res) => {

    const { keywords } = req.body;

    db.query("Select * from books where book_name like '%" + keywords + "%';", (err0, res0) => {
        if(!err0) {
            return res.status(200).json(res0);
        } else {
            console.log(err0);
            return res.status(500).json({ message: 'Internal Server error' });
        }
    });
}

//update book api -> 
// exports.updateBook = (req, res) => {

//     const{ book_name, author_name, description, image_url, copies_available } = req.body;

//     db.query('Update books set book_name = ' + mysql.escape(book_name) + 
//     ', author_name = ' + mysql.escape(author_name) + 
//     ', description = ' + mysql.escape(description) + 
//     ', image_url = ' + mysql.escape(image_url) + 
//     ', copies_available = ' + mysql.escape(copies_available) +
//     ' where b'
    
//     )
// }

