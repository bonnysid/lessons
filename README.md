# [BACK](https://github.com/bonnysid/lessons/tree/main)
# SQL

## DB 
```sql
    CREATE DATABASE <name of db>; - create database
    DROP DATABASE <name of db>; - remove database
```
    

## Types of data
```sql
    int - digital
    varchar - string (MAX 255 symbols)
    text - string (MAX 65 000 symbols)
    date - date (2020y - 04m - 22d)
    json - obj
    datetime - date of time (2020y - 04m - 22d - 15h - 53m - 20s)
```



## Tables

``` sql
CREATE TABLE <name of table> (
        <name of column> TYPE <int, varchar, text ect.> PARAMS, 
    );
    DROP TABLE <name of table>; - remove smth table

    *Example: 
    CREATE TABLE users<
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(30),
        email VARCHAR(40),
        bio TEXT,
        PRIMARY KEY(id)
    >;
    *Params: {
    ?    NOT NULL (can't be empty)
    ?    AUTO_INCREMENT (auto ++)
    ?    DEFAULT CURRENT_TIMESTAMP (time of add new column)
    ?    PRIMARY KEY(id) - unequal 
    ?    FOREIGN KEY<shopId> REFERENCES shop(id) <link on smth in other tabels>
    }
    
    ALTER TABLE <name of table> ADD <new column> 
    *exm : ALTER TABLE people ADD pass VARCHAR<32>;

    ALTER TABLE <name of table> DROP COLUMN <name of column> 
    *exm : ALTER TABLE people DROP COLUMN pass;

    ALTER TABLE <name of table> CHANGE <name of column> <new column with params>
    *exm : ALTER TABLE people CHANGE birth birth DATE NOT NULL

    INSERT INTO <name of table> <names of fields> VALUES <data>
    *exm : INSERT INTO people <name, pass, email> VALUES 
        *<"Vasya", 123, sdafg@gmail.com>,
        *<"Alex", 4215, sdaf2g@gmail.com>;

    UPDATE <name of table> SET <name of columns> WHERE <smth params = smth>
    *exm : UPDATE `people` SET `name` = 'Max' WHERE id < 3 AND name = 'ivan';

    DELETE FROM <name of table> WHERE <some params>;
    *exm : DELETE FROM test WHERE id = 2;

    TRUNCATE <name of table>; = clear all fields
    *exm : TRUNCATE test

    SELECT <params> <smth column> from <name of table> WHERE <smth>
    *exm : SELECT * form people WHERE id > 3 AND if < 10
    *exm : SELECT id, email from people WHERE id < 3
    *exm : SELECT * FROM people WHERE bio IS NULL ORDER BY id LIMIT 2, 3

    SELECT <some columns from some tables> FROM <some tabels>
    INNER JOIN <some tabel> ON <some condition>
    *exm : SELECT orders.itemID, people.name, people.email FROM people
    *      INNER JOIN orders ON people.id = orders.personID

    SELECT <some of column> AS <new name> FROM <name of table>
    *exm : SELECT `имя` AS 'Name' FROM people
    *exm : SELECT CONCAT('Имя:', name, '. День рождения:', birth) AS 'Информация' FROM people;
    *exm : SELECT p.id, p.name, s.title, s.price FROM people AS p, shop AS s

    SELECT MIN(some of column) FROM <name of table> = show MIN
    SELECT MAX(some of column) FROM <name of table> = show MAX
    SELECT AVG(some of column) FROM <name of table> = show AVG
    SELECT SUM(some of column) FROM <name of table> = show SUM
    SELECT UCASE(some of column) FROM <name of table> = to UPPER CASE
    SELECT LOWER(some of column) FROM <name of table> = to LOWER CASE
    SELECT COUNT(some of column) FROM <name of table> = show last id

    SELECT price, COUNT(price) FROM shop GROUP BY price HAVING COUNT(price) > 1 = show new tabel with your params

    INNER JOIN
    RIGHT JOIN

    ? Params : 
    ? - DISTINCT (all anequals)
    ? Smth :
    ? - WHERE <smth> : BETWEEN 2 AND 6; (diaposon)
    ?                  IN<5, 4, 3>;  (values)
    ?                  LIKE 'Ива%'   (filter)
    ? - ORDER BY - sort lower to higher; 
    ? - ORDER BY <smth> DESC - sort higher to lower; 
    ? - LIMIT <2, 3> 2 skip; show 3 elements;

    CREATE INDEX <name of index> ON <name of table> <name of column>
    *exm - CREATE INDEX NIndex ON people<name>;

    WHERE <this column = smth>
    Fields a table it is name of columns
```
