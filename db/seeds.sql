USE employeeDB;

INSERT INTO department
(name)
VALUES
('marketing'),
('programming'),
('human resources');

INSERT INTO role
(title, salary, department_id)
VALUES
('marketer', 10000 , 1),
('programmer' , 20000 , 2);
('manager' , 21000 , 3);

INSERT INTO employee
(first_name , last_name , role_id , manager_id)
VALUES
('Isaac', 'Gonzalez', 1 , NULL),
('Thomas', 'Mccalister', 2 , 1);


