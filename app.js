const inquirer = require('inquirer');
const db = require('./config/connection.js');
const cTable = require('console.table');
const {response} = require('express');

// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    promptUser();
});

//prompt user with menus after the app connects
const promptUser = () => {
    inquirer.prompt([
    {
        type: 'list',
        name: 'menuChoice',
        message: 'Please select an action',
        choices: [
            'View all departments' , 
            'View all roles', 
            'View all employees',
            'Add a department', 
            'Add a role', 
            'Add an employee', 
            'Update employee role'
        ]
    }
])
    // begin switch/case
    .then(function (res) {
        switch (res.menu) {
          case 'View All Departments':
            viewDepartments();
            break;
          case 'View All Roles':
            viewRoles();
            break;
          case 'View All Employees':
            viewEmployees();
            break;
          case 'Add a Department':
            addDepartment();
            break;
          case 'Add a Role':
            addRole();
            break;
          case 'Add an Employee':
            addEmployee();
            break;
          case 'Update an Employee Role':
            updateEmployeeRole();
            break;
        }
    })
};

//View all departments
const viewDepartments = () => {
  const sqlDep = `SELECT * FROM department`;
  db.query( sqlDep, (err, rows) => {
    if (err) throw (err);
    console.table(rows);
    promptUser();
  })
};

// View all roles
const viewRoles = () => {
const sqlRole = `SELECT role.*, department.name
                AS department_id
                FROM role
                LEFT JOIN department
                ON role.department_id = department.id`;
  db.query(sqlRole, (err,rows) => {
    if (err) throw err;
    console.table(rows);
    promptUser();
  })
};

// View all employees
const viewEmployees = () => {
  const sqlEmp = `SELECT
                  E.id,
                  E.first_name,
                  E.last_name,
                  role.title,
                  department.name AS department,
                  role salary,
                  CONCAT(M.first_name,' ',M.last_name) AS manager
                  FROM employees E
                  JOIN role ON E.role_id - role.id
                  JOIN department ON role.department_id - department.id
                  LEFT JOIN employees M ON E.manager_id - M.id;
                  `;
  db.query(sql, (err,rows) => {
    if (err) throw err;
    console.table(rows);
    promptUser();
  })
};

//Add Department
const addDepartment = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'department',
      message: 'Would you kindly input a NEW department name:',
      validate: (department) => {
        if (department) {
          return true;
        } else {
          console.log('Error: invalid input. Try Again!');
          return false;
        }
      },
    },
  ])
  .then((res) => {
    let sqlAddDept = `INSERT INTO department (name) VALUES (?)`;
    db.query(sqlAddDept, res.department, (err, results) => {
      if (err) throw err;
      console.log(`${res.department} has been successfully created!`);
      viewDepartments();
    });
  });
};



//
//     .then( promptChoice => {

//         let menuChoice = promptChoice.menuChoice
//         //take prompt , run functions associated with them
//         //departments
//         if (menuChoice === 'View all departments') {
//         viewDepartments().then(
//             data=>{console.log(data)
//         })
//         let departments = await viewDepartments()
//         console.log(departments);
//        }
//        //roles
//        else if (menuChoice === 'View all roles') {
//            viewRoles().then(
//                data=>{console.log(data)
//             })
//             let roles = await viewRoles()
//             console.log(roles);
//        }
//        //employees
//        else if (menuChoice === 'View all employees') {
//             viewEmployees().then(
//                 data=>{console.log(data)
//              })
//             let roles = await viewEmployees()
//             console.log(employees);
//             }
//         //add department()
//         else if (menuChoice === 'Add a department') {
//             addDepartment().then(
//                 data=>{console.log(data)
//              })
//             let //addDept function
//         }
//         //add roll
//        else if (menuChoice === 'Add a role') {
//             addRole().then(
//                 data=>{console.log(data)
//             })
//             let addRoll = await addRole()
//             console.log(addRoll);
//         }
//         //add employee
//        else if (menuChoice === 'Add an employee') {
//             addEmployee().then(
//                 data=>{console.log(data)
//             })
//             let addEmp = await addEmployee()
//             console.log(addEmp);
//         }
//         //update employee role 
//         else if (menuChoice === 'Update an employee role') {
//             updateRole().then(
//                 data=>{console.log(data)
//                 })
//             let upRole = await updateRole()
//             console.log(upRole);
//         }
//         else {
//             console.log('Error: Something broke, oops');
//             return;
//         }
//     })
// }

promptUser();
module.exports={ promptUser}


    //inquirer prompt to ask user what to do




// Make inquirer prompt that has all these options. view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
// if statement to run specific function for the task you picked 
//inside function db query console.table()



