-- MySQL dump 10.11
--
-- to install this database, from a terminal, type:
-- mysql -u USERNAME -p -h SERVERNAME world < world.sql
--
-- Host: localhost    Database: schemaDB
-- ------------------------------------------------------
-- Server version   5.0.45-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


DROP DATABASE IF EXISTS schemaDB;
CREATE DATABASE schemaDB;
USE schemaDB;


DROP TABLE IF EXISTS  Users;
CREATE TABLE Users (
	id int,
	firstname varchar(127),
	lastname varchar(127),
	password binary(32),
	email varchar(55),
	date_joined date,
	PRIMARY KEY(id)
);

INSERT INTO Users VALUES
(001,"Admin","User", SHA2("password123", 256),"admin@bugme.com", '2019-01-01');

DROP TABLE IF EXISTS  Issues;
CREATE TABLE Issues (
	id int,
	title varchar(127),
	description text,
	type varchar(55),
	priority varchar(55),
	status varchar(55),
	assigned_to int,
	created_by int,
	created date,
	updated date,
	PRIMARY KEY(id)
);

INSERT INTO Issues VALUES (001, "Non Issue", "This is a filler issue. Do not pay any mind", "Proposal", "Minor", "Closed", 001, 001, '1999-01-01', '1999-01-02');


/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

