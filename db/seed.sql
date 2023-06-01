use company_db;

INSERT INTO department (name)
VALUES ('Marketing'), ('Sales'), ('Production'), ('Engineering');

INSERT INTO role (title, salary, department_id)
VALUES  ('Marketing Rep', 80000, 1),
        ('Marketing Lead', 100000, 1),
        ('Sales Rep', 70000, 2),
        ('Sales Lead', 90000, 2),
        ('Producer', 60000, 3),
        ('Production Lead', 80000, 3),
        ('Engineer', 110000, 4),
        ('Engineering Lead', 130000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('Jerry', 'Heller', 2, NULL),
        ('Bill', 'Lumbergh', 4, NULL),
        ('Erlich', 'Bachman', 6, NULL),
        ('Billy', 'Shears', 8, NULL);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('Eric', 'Wright', 1, 1),
        ('Michael', 'Bolton', 3, 2),
        ('Richard', 'Hendricks', 5, 3),
        ('Paul', 'McCartney', 7, 4);