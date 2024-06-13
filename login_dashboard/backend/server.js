const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'signup'
});

app.post("/signup", (req, res) => {
    const sql = "INSERT INTO login (`username`,`email`, `password`) VALUES(?)"
    const values = [
        req.body.username,
        req.body.email,
        req.body.password,
    ]
    console.log(values);

    db.query(sql, [values], (err, data) => {
        if (err) {
            console.error(err)
            return res.json("Error: " + err)
        }
        return res.json(data)
    })
})
app.post("/login", (req, res) => {
    const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";
    console.log("Login request received:", req.body);
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            console.error(err);
            return res.json("Error: " + err)
        }
        if (data.length > 0) {
            return res.json("Success")
        } else {
            return res.json("Failed")

        }
    })
})
app.listen(8081, () => {
    console.log("listening on")
})