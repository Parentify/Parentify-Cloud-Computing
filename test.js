const express = require('express');
// const bodyParser = require('body-parser');
const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware for parsing JSON
// app.use(bodyParser.json());

// Alternative JSON parsing middleware
app.use(express.json());

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

app.post('/food/addFood', (req, res) => {
    console.log('Received Request Body:', req.body);

    const { name } = req.body;

    if (!name) {
        console.log('Name is required');
        return res.status(400).json({ error: 'Name is required' });
    }

    const sql = 'INSERT INTO foods (name) VALUES (?)';
    connection.query(sql, [name], (err, result) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        console.log('Data inserted successfully');
        return res.status(201).json({ message: 'Data inserted successfully' });
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
