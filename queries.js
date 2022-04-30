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
    db.query(
            "SELECT * FROM deparement" , 
            function(err, results){
                if (err) throw err
                console.table(results)
                
            })
}

module.exports={viewDeparments}