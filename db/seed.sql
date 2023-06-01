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
VALUES  ('Tupac', 'Shakur', 1, 2),
        ('Biggie', 'Smalls', 2, NULL),
        ('Michael', 'Bolton', 1, 4),
        ('Bill', 'Lumbergh', 2, NULL),
        ('Richard', 'Hendricks', 1, 6),
        ('Erlich', 'Bachman', 2, NULL),
        ('Paul', 'McCartney', 1, 8),
        ('Billy', 'Shears', 2, NULL);