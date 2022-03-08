CREATE DATABASE IF NOT EXISTS Employee_registration;

USE Employee_registration;

CREATE TABLE Sector (
    sector_id MEDIUMINT PRIMARY KEY AUTO_INCREMENT,
    sector VARCHAR(150) NOT NULL
);

CREATE TABLE Employee (
    employee_id MEDIUMINT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(150) NOT NULL,
    last_name VARCHAR(150) NOT NULL,
    registration_date DATE NOT NULL,
    sector_id MEDIUMINT NOT NULL,
    FOREIGN KEY (sector_id)
        REFERENCES Sector(sector_id)
);

CREATE TABLE Contact (
    contact_id MEDIUMINT PRIMARY KEY AUTO_INCREMENT,
    phone INTEGER NOT NULL,
    email VARCHAR(150) NOT NULL,
    employee_id MEDIUMINT NOT NULL,
    FOREIGN KEY (employee_id)
        REFERENCES Employee(employee_id)
);
