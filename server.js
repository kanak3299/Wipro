const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'gym'
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL database.');
});

app.post('/api/register', (req, res) => {
    const { name, email, address, phoneNumber } = req.body;

    // Validate input
    if (!name || !email || !address || !phoneNumber) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    const query = 'INSERT INTO users (name, email, address, phoneNumber) VALUES (?, ?, ?, ?)';
    db.query(query, [name, email, address, phoneNumber], (err,results) => {
        if (err)  {
            console.error('Error executing query:', err); // Log the error
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        console.log('Insert successful, results:', results); // Log the results
        res.status(201).json({ message: 'User registered successfully!' });
    });
});
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
// Fetch all users
app.get('/api/users', (_req, res) => {
    const query = 'SELECT * FROM users';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error retrieving data:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        console.log('Retrieved data:', results);
        
        res.status(200).json(results);
    });
});

// Update user
app.put('/api/users/:id', (req, res) => {
    const { name, email, address, phoneNumber } = req.body;
    const query = 'UPDATE users SET name = ?, email = ?, address = ?, phoneNumber = ? WHERE id = ?';
    db.query(query, [name, email, address, phoneNumber, req.params.id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'User updated successfully!' });
    });
});

// Delete user
app.delete('/api/users/:id', (req, res) => {
    db.query('DELETE FROM users WHERE id = ?', [req.params.id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'User deleted successfully!' });
    });
});
