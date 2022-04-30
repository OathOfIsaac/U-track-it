const db = require('./config/connection.js');

// const viewDepartment = function(){
//     //open employeeDB
//     db.query(
//         'SELECT * FROM `employee` , 
//     )
// }

function viewDeparments = function(){
    //db query get all dept data
    //open employeeDB
    return new Promise(function (resolve, reject){
        db.query(
            "SELECT * FROM `deparement`;" 
            , (error, res) => {
                resolve(res);            
            })
    })
}

module.exports={viewDeparments}