DROP DATABASE IF EXISTS dbschema;
CREATE DATABASE dbschema;
USE dbschema;


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
(000,"Admin","User", HASHBYTES('SHA2_256',"password123"),"admin@bugme.com", 2019-01-01);

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

INSERT INTO Issues VALUES (000, "Non Issue", "This is a filler issue. Do not pay any mind", "Proposal", "Closed", "Admin", "Admin", 1999-01-01, 1999-01-02);