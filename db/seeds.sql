INSERT INTO department
(id , name)
VALUES
(1, 'marketing'),
(2, 'programming'),
(3, 'human resources');

INSERT INTO role
(id, title, salary, department_id)
VALUES
(1, 'salesperson', 10000 , 1),
(2, 'sales lead' , 21000 , 1),
(3, 'junior programmer' , 20000 , 2),
(4, 'senior programmer' 30000, 2),
(5, 'lead engineer', 21000, 2),
(6, 'hr', 15000 , 3),
(7, 'hr lead', 19000, 3);

INSERT INTO employees
(id, first_name , last_name , role_id , manager_id)
VALUES
(1, 'Isaac', 'Gonzalez', 5, 1),
(2, 'Thomas', 'Mccalister', 3 , NULL),
(3, 'Aubrey', 'Peaches', 2, 1),
(4, 'Kristen', 'Perez', 4, NULL),
(5, 'Maximilliano', 'Luna' , 6 , NULL),
(6, 'Krystal', 'Weingartner' , 1 , NULL),
(7, 'Estefania', 'Gonzalez', 7 , 1);



