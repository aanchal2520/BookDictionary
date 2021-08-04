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
exports.updateBook = (req, res) => {

    const{ book_id, book_name, author_name, description, image_url, copies_available } = req.body;

    db.query('Update books set book_name = ' + mysql.escape(book_name) + 
                ', author_name = ' + mysql.escape(author_name) + 
                ', description = ' + mysql.escape(description) + 
                ', image_url = ' + mysql.escape(image_url) + 
                ', copies_available = ' + mysql.escape(copies_available) +
                ' where book_id = ' + mysql.escape(book_id), (err1, res1) => {
                    if(!err1) {
                        return res.status(200).json({ message: 'Book successfully updated' });
                    } else {
                        console.log(err1);
                        return res.status(500).json({ message: 'Internal Server Error' });
                    }
            })
}

//delete book api -> 
// exports.deleteBook = (req, res) => {

//     const { book_id } = req.body;

//     db.query('Delete from books where book_id = ' + mysql.escape(book_id), (err0, res0) => {
//         if(!err0) {
//             return res.status(200).json({ message: 'Book successfully deleted' });
//         } else {
//             console.log(err0);
//             return res.status(500).json({ message: 'Internal Server Error' });
//         }
//     })
// }


