-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS mloflowfoodappdb;

-- Use the database
USE mloflowfoodappdb;

-- Create the Users table
CREATE TABLE IF NOT EXISTS Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    surname VARCHAR(50) NOT NULL,
    gender VARCHAR(10),
    phone_no VARCHAR(20),
    address VARCHAR(100),
    country VARCHAR(50),
    county VARCHAR(50),
    place_of_residence VARCHAR(100),
    password VARCHAR(100) NOT NULL
);

-- Create the Customer table
CREATE TABLE IF NOT EXISTS Customer (
    customer_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    home_address VARCHAR(100),
    office_address VARCHAR(100),
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

-- Create the Vendor table
CREATE TABLE IF NOT EXISTS Vendor (
    vendor_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    category VARCHAR(50),
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

-- Create the Chef table
CREATE TABLE IF NOT EXISTS Chef (
    chef_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    speciality VARCHAR(50),
    qualifications VARCHAR(100),
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);
