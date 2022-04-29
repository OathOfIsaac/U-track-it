const mysql = require('mysql2');
const inquirer = require('inquirer')



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
    console.log('Connected to the election database.')
  );

function main() {
    //inquirer prompt to ask user what to do

}

function viewDeparments() {
    
}