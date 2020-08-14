//? DB 
/*
    CREATE DATABASE (name of db); - create database
    DROP DATABASE (name of db); - remove database
*/
//? Types of data
/*
    int - digital
    varchar - string (MAX 255 symbols)
    text - string (MAX 65 000 symbols)
    date - date (2020y - 04m - 22d)
    json - obj
    datetime - date of time (2020y - 04m - 22d - 15h - 53m - 20s)
*/

//? Tables
/*
    CREATE TABLE (name of table) (
        (name of column) TYPE (int, varchar, text ect.) PARAMS, 
    );
    DROP TABLE (name of table); - remove smth table

    *Example: 
    CREATE TABLE users(
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(30),
        email VARCHAR(40),
        bio TEXT,
        PRIMARY KEY(id)
    );
    *Params: {
       NOT NULL (can't be empty)
        AUTO_INCREMENT (auto ++)
        PRIMARY KEY(id) - unequal 
    }
    
    ALTER TABLE (name of table) ADD (new column) exm : ALTER TABLE people ADD pass VARCHAR(32);
    ALTRE TABLE (name of table) DROP COLUMN (name of column) exm : ALTER TABLE people DROP COLUMN pass;

    SELECT (smth column) from (name of table)
    UPGRADE (smth column) from (name of table)
    WHERE (this column = smth)
    Fields a table it is name of columns
*/