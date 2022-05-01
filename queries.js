// const db = require('./config/connection.js');
// const inquirer = require('inquirer')
// const { throwError } = require('rxjs');
// const { promptUser } = require('./app.js');

// function viewDeparments = function() {
//     //db query get all dept data
//     //open employeeDB
//     return new Promise(function (resolve, reject) {
//         db.query(
//             "SELECT * FROM `deparement`;"
//             , (error, res) => {
//                 resolve(res);
//             })
//     })
// }

// const viewRoles = function () {
//     //open employeeDB
//     //promise wrapper
//     return new Promise(function (resolve, reject) {
//         db.query(
//             'SELECT * FROM `role`;'
//             , (error, res) => {
//                 resolve(res);
//             })
//     })
// }

// const viewEmployees = function () {
//     //open employeeDB + promise wrapper
//     return new Promise(function (resolve, reject) {
//         db.query(
//             'SELECT * FROM `employee`;'
//             , (error, res) => {
//                 resolve(res);
//             })
//     })

// }

// //add dept query
// const addDepartment = function () {
//     return inquirer
//     .prompt([
//         {
//             type: 'input',
//             name: 'depChoice',
//             message: 'Would you kindly provide the dept name?',
//         },

//     ])
//         .then((answer) => {
//             const deptName = answer.depChoice;
//             let sql = `INSERT INTO department (name) 
//         VALUES (?)`;
//             db.query(sql, deptName, (err, res) => {
//                 if (err) throw err;
//                 console.log('New department added.');
//                 promptUser();
//             });

//         });

// };


// //addRole query
// const addRole = function () {
//     let deptSql = 'SELECT * FROM department';

//     return inquirer.prompt([
//         {
//             type: 'input',
//             name: 'roleChoice',
//             message: 'Would you kindly provide the roles name?',
//         },
//         {
//             type: 'input',
//             name: 'roleSalary',
//             message: 'Would you kindly provide the roles salary?',
//         },
//         {
//             type: 'list',
//             name: 'roleDept',
//             message: 'Would you kindly select a department for the role?',
//             choices: [{deptSql}]
//         },

//     ])
//         .then((answer) => {
//             const roleName = answer.roleChoice;
//             let sql = `INSERT INTO department (name) 
//         VALUES (?)`;
//             db.query(sql, roleName, (error, res) => {
//                 if (error) throw error;
//             });

//         });

// };

// //addEmployee query
// const addEmployee = function () {
//     let roleSql = 'SELECT * FROM role';

//     return inquirer.prompt([
//         {
//             type: 'input',
//             name: 'empNameF',
//             message: 'Would you kindly provide the employees first name?',
//         },
//         {
//             type: 'input',
//             name: 'empNameL',
//             message: 'Would you kindly provide the employees last name?',
//         },
//         {
//             type: 'list',
//             name: 'empRole',
//             message: 'Would you kindly select a role for the employee?',
//             choices: [{roleSql}]
//         },

//     ])
//         .then((answer) => {
//             const deptName = answer.depChoice;
//             let sql = `INSERT INTO department (name) 
//         VALUES (?)`;
//             db.query(sql, deptName, (error, res) => {
//                 if (error) throw error;
//             });

//         });

// };

// module.exports = { viewDeparments, viewRoles, viewEmployees, addDepartment, addRole }