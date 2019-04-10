### Schema

CREATE DATABASE IF NOT EXISTS burgers_db;

CREATE DATABASE burgers_db;

SWITCH TO OR USE burgers_db;

CREATE TABLE IF NOT EXISTS burgers_table;

CREATE TABLE burgers_table
(
    id int NOT NULL AUTO_INCREMENT,
    name VARCHAR(25) NOT NULL,
    devoured BOOLEAN DEFAULT false,
     PRIMARY KEY (id),
)