INSERT INTO department
(name)
VALUES
('marketing'),
('programming'),
('human resources');

INSERT INTO role
(title, salary, department_id)
VALUES
('salesperson', 10000 , 1),
('sales lead' , 21000 , 1),
('junior programmer' , 20000 , 2),
('senior programmer' 30000, 2),
('lead engineer', 21000, 2),
('hr', 15000 , 3),
('hr lead', 19000, 3);

INSERT INTO employees
(first_name , last_name , role_id , manager_id)
VALUES
('Isaac', 'Gonzalez', 5, 1),
('Thomas', 'Mccalister', 3 , NULL),
('Aubrey', 'Peaches', 2, 1),
('Kristen', 'Perez', 4, NULL),
('Maximilliano', 'Luna' , 6 , NULL),
('Krystal', 'Weingartner' , 1 , NULL),
('Estefania', 'Gonzalez', 7 , 1);


