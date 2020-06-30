DROP DATABASE burgers_db; 

CREATE DATABASE burgers_db; 

USE burgers_db; 

DROP TABLE burgers; 

CREATE TABLE burgers (
	id INTEGER NOT NULL AUTO_INCREMENT, 
    burger_name VARCHAR(30) NOT NULL, 
    devoured BOOLEAN,
    PRIMARY KEY(id)
)


