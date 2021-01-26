--    * Create the `burgers_db`.
--    * Switch to or use the `burgers_db`.
--    * Create a `burgers` table with these fields:
--      * **id**: an auto incrementing int that serves as the primary key.
--      * **burger_name**: a string.
--      * **devoured**: a boolean.

-- drop if exists
DROP DATABASE IF EXISTS burgers_db;

-- make database
CREATE DATABASE burgers_db;
USE burgers_db;

-- make table
CREATE TABLE burgers (
	id int NOT NULL AUTO_INCREMENT,
	burger_names varchar(25) NOT NULL,
	devoured BOOLEAN, 
	PRIMARY KEY (id)
);
