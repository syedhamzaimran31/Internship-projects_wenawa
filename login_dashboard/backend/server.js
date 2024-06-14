const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const sequelize = require('./sequelize');
const User = require('./models/User');
const { where } = require('sequelize');

const app = express();
app.use(cors());
app.use(express.json());

sequelize.sync()
    .then(() => {
        console.log('Database & tables created!');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'signup'
});

app.post("/signup", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        console.log("Signup request data:", req.body);
        if (!username || !email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }
        const existingUser = await User.findOne({ where: { email } });

        if (existingUser) {
            alert(`User exist with ${existingUser}`);
            return res.status(400).json({ error: "Email already exists" });
        }

        const user = await User.create({ username, email, password });
        return res.status(200).json({ user });
    } catch (error) {
        if (error instanceof Sequelize.UniqueConstraintError) {
            return res.status(400).json({ error: "Email already exists" });
        }
        console.error(error);
        return res.status(500).json({ error: "Something went wrong" });

    }
});

app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("Login request received:", req.body);
        const user = await findOne({ where: { email, password } });
        if (user) {
            return res.json("Success");
        } else {
            return res.json("Failed");
        }
    } catch (error) {
        console.error("login error", error);
        return res.status(500).json({ error: "Something went wrong" });
    }
});
app.listen(8081, () => {
    console.log("listening on")
})