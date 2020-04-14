-- ###Schema
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers_db
 (
     id int NOT NULL,
    burger_name varchar(255) NOT NULL,
    devoured BOOL DEFAULT false,
    PRIMARY KEY (id)

 );