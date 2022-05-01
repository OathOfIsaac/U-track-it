const inquirer = require('inquirer');
const db = require('./config/connection.js');
const {viewDepartments, viewRoles, viewEmployees, addDepartment} = require('./queries.js');

const promptUser = () => {
    inquirer.prompt([
    {
        type: 'list',
        name: 'menuChoice',
        message: 'Please select an action',
        choices: ['View all departments , View all roles, View all employees','Add a department', 'Add a role', 'Add an employee', 'Update employee role']
    },
])
    .then( promptChoice => {

        let menuChoice = promptChoice.menuChoice
        //take prompt , run functions associated with them
        //departments
        if (menuChoice === 'View all departments') {
        viewDepartments().then(
            data=>{console.log(data)
        })
        let departments = await viewDepartments()
        console.log(departments);
       }
       //roles
       else if (menuChoice === 'View all roles') {
           viewRoles().then(
               data=>{console.log(data)
            })
            let roles = await viewRoles()
            console.log(roles);
       }
       //employees
       else if (menuChoice === 'View all employees') {
            viewEmployees().then(
                data=>{console.log(data)
             })
            let roles = await viewEmployees()
            console.log(employees);
            }
        //add department
        else if (menuChoice === 'Add a department') {
            addDepartment().then(
                data=>{console.log(data)
             })
            let //addDept function
        }
        //add roll
       else if (menuChoice === 'Add a role') {
            addRole().then(
                data=>{console.log(data)
            })
            let addRoll = await addRole()
            console.log(addRoll);
        }
        //add employee
       else if (menuChoice === 'Add an employee') {
            addEmployee().then(
                data=>{console.log(data)
            })
            let addEmp = await addEmployee()
            console.log(addEmp);
        }
        //update employee role 
        else if (menuChoice === 'Update an employee role') {
            updateRole().then(
                data=>{console.log(data)
                })
            let upRole = await updateRole()
            console.log(upRole);
        }
        else {
            console.log('Error: Something broke, oops');
            return;
        }
    })
}

const addDepartment = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Would you kindly provide the department`s name:',
            },
        ])
        .then((depResponse) => {
            departmentRes = depResponse.name;
            let departSql = `INSERT INTO department (depart_name)
                            VALUES (?)`;
            db.query(departSql, departmentRes, (err, res) => {
                if (err) throw err;
                console.log('New department added.');
                startUp();
            });
        });
};

const addRole = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Would you kindly provide the role`s name:',
            },
        ])
        .then((depResponse) => {
            roleRes = roleResponse.name;
            let departSql = `INSERT INTO role (role_name)
                            VALUES (?)`;
            db.query(departSql, departmentRes, (err, res) => {
                if (err) throw err;
                console.log('New department added.');
                startUp();
            });
        });
};

promptUser();


    //inquirer prompt to ask user what to do




// Make inquirer prompt that has all these options. view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
// if statement to run specific function for the task you picked 
//inside function db query console.table()



