const mysql = require('mysql2');
require('dotenv').config();

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'Yoloswag69',
      database: 'employeeDB'
    },
    console.log('Connected to the employee database.')
  );

db.connect()
module.exports= db 