\\\\\\\\\\\\\\\\\\\\ Database

- this is used to store data.
- there are two types databases; SQL and NoSQL
  -SQL
  this is an excel like mannered type
  -NoSQL
  this is in form of a json format

- databases has four major tasks [CRUD];
  Create
  REad
  Update
  Destroy

- the best d0cumentation for sql is w3schools
- https://sqliteonline.com/ is the website we will use to run our examples

```SQL

CREATE
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ CREATING TABLE

- lets say we want to create a table for products and their prices,
    we use the sql CREATE TaBLE syntax (using w3schools, click on SQL CREATE TABLE);

    CREATE TABLE table_name (
        column1 datatype,
        column2 datatype,
        column3 datatype,
        ....
    );

what this actually explains is we start with the create table syntax (which happens to be CREATE TABLE),
give our table a name and open a set of parenthesis.
what goes inside the parenthesis are the columns headings for creating our table,and their datatypes(say a boolean, string, integer etc.) seperated by comas.

working with the above, lets create our own table;

CREATE TABLE Products (
  Id INT NOT NULL,
  Name STRING,
  Price MONEY,
  PRIMARY KEY (Id)
)

explaining this second table just above,
-- the name for the table is 'products',
-- next is the  name of the first column in the table 'id' with the datatype of 'int' (meaning integer - this deals with whole numbers) and the 'NOT NULL' besides it means that you can't insert or update a record without adding a value to that field (any field with 'NOT NULL' MUST have a value).
-- 'name' is the name of the second column with its datatype set to a 'string'.
---'price' is the name of the last column and has a special datatype of 'money'.
---- the 'primary key' is a keyword that identifies each record on a table and A table can have only one primary key, which may consist of one single or of multiple fields

 once your table is set, click on run.

 \\\\ ADDING DATA / INFORMATION TO TABLE (in w3schools, click on sql, then SQL INSERT INTO)

there are two ways to add data to a table;

-- 1. Specify both the column names and the values to be inserted:

INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);

-- 2. If you are adding values for all the columns of the table, you do not need to specify the column names in the SQL query. However, make sure the order of the values is in the same order as the columns in the table.
Here, the INSERT INTO syntax would be as follows:

INSERT INTO table_name
VALUES (value1 (for column 1), 'value2' (for column 2), value3 (for column 3))

we can also use this to insert an entire row
**observe that value 2 has hyfins. this is because its datatype is a STRING.


READ
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ HOW TO READ DATA FROM YOUR TABLE

-- 'SELECT * FROM Products'
using our example above, this means select everything(the * sign stands for everything) from the product table.

-- 'SELECT column1, column2 FROM Products'
if you want to see only a specific column. ie 'SELECT name, price FROM Products' to see only the name and price column.

-- 'SELECT column1, column2
    FROM Products
    WHERE id=1
say you wanted to see a particular row in a table, we have to search for it by using the 'WHERE' Keyword.
from the above, this searches for the row whose id is 1.

- SELECT * FROM Products WHERE Id=1
this searches the products table for the row whose id is 1.

-Operators in the WHERE clause.
check the documentation for other operators and their use.


UPDATE
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ UPDATING A TABLE

-- using the 'UPDATE' syntax;

    UPDATE Products
    SET price = 43
    WHERE id = 1

explaining the above, we go to the 'price' column and change the price in id 1 to 43

-- ALTER TABLE Products
   ADD Stock INT (short for integer)

say we want to take stock of our products and add that to the table, we use the ALTER keyword to add a new column.


DELETE
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ DELETING A RECORD FROM THE TABLE

-- DELETE FROM products
WHERE id = 2

this will delete the entire row of id 2

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

LINKING TABLES TOGETHER
we do this with the help of a keyword called the FOREIGN KEY.
the FOREIGN KEY is a key used to link tables together. this is also a field (or collection of fields) in one table that refers to the FOREIGN KEY in another table.

taking this example;

CREATE TABLE orders (

  id int not NULL,
  order_number INT,
  customer_id INT,
  product_id INT,
  PRIMARY KEY(id)
  FOREIGN KEY(customer_id) REFERENCES Customers(id)
  FOREIGN KEY(product_id) REFERENCES Products(id)

)

-- what this above table explains is simple.
this creates a new table (orders) that links one of its field using the FOREIGN KEY to the customers table (FOREIGN KEY(customer_id) REFERENCES Customers(id)) and does same using with the product table( FOREIGN KEY(product_id) REFERENCES Products(id)).

    further explanation;
while creating the orders table, we use the foreign keyword to link up the customer_id column in the orders table with the id column in the customers table.
same goes for the second foreign key. we use the foreign key word to link the product_id colum in the orders table with the id column in the products table.

-- next we create a customer table with culumns; id, first_name, last_name, address.

--next we use the INNER JOIN keyword.
what this does is it selects the records that have matching values (this is possible with the use of foreign key) in both tables. the syntax is;

SELECT columnName(s)
FROM table1
INNER JOIN table2 ON table1.columnName = table2.columnName

working with what we have, lets link the orders table with the customers table;

SELECT orders.order_number, Customers.first_name, Customers.last_name, Customers.address
FROM orders
INNER JOIN Customers ON orders.customer_id = Customers.id

--- what this explains is we use the SELECT keyword to set the table in the order we want it;

from the above,(SELECT orders.order_number, Customers.first_name, Customers.last_name, Customers.address)
- first column will be the orders's order_number, next is customers'first_name (from the customers table), following is the Customers.last_name(from the customers table), and the customers address(from the customers table).

FROM orders
- this means we are linking up the orders table since it was in the creation of the orders table we initiated the link,

INNER JOIN Customers
- we linking up the orders table with the customer table.

ON orders.customer_id = Customers.id
- this is the column that links both table

-- now lets link the order table with the products table;

SELECT orders.order_number, Products.NAME, Products.price, Products.Stocks
FROM orders
INNER JOIN Products ON orders.product_id = Products.id

/////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



~~~~~~~~~~~~~~~~~~~~~~~~~~NOSQL



////////// start the mongodb local database,

-- open terminal and type 'mongod'.
-- this starts the mongodb port

-- open a new tab in the terminal and type 'mongo'.
-- this opens the mongodb shell.

//////////////////////////////

in the mongodb shell, type'help' and you get list of keywords to use in the mongodb shell ie;

show dbs
-- this will show you the list  of databases you are using

use 'new database name'
-- this will create and switch to the new database. if after creating the new database and go check it using 'show dbs' you wont see it listed because for it to be listed, it has to have some content in it.

db
-- this is to check which database you are currently on

show collections
-- this shows all the collections in a database


~~~~~~~~~~~~ CRUD



CREATE
-- to create a single collection inside a specified database (same for tables used in sql and this are just collections of documents) we use;
db.collection_name.insertOne({...})

-- using the products examples in the SQL lesson, we use the insertOne keyword to insert one entry
db.products.insertOne({_id: 1, name: 'pen', price: 1.20})
-- the underscore(_) is to indicate that the i.d is the primary key
-- we will get a success message if the creation of successful and we use the 'show collections' for more confirmation
/////////////////////////

-- to create many collections we use;
db.inventory.insertMany([...])
--example
db.collection_name.insertMany([
{ item: "journal", qty: 25, tags: ["blank", "red"], size: { h: 14, w: 21, uom: "cm" } },
{ item: "mat", qty: 85, tags: ["gray"], size: { h: 27.9, w: 35.5, uom: "cm" } },
{ item: "mousepad", qty: 25, tags: ["gel", "blue"], size: { h: 19, w: 22.85, uom: "cm" } }
])

```

READ and Queries
-- to show all the entries in the products collections, we use;
db.products.find()

-- if we wanted to make a query for a specific piece of data, we use the query operators.
db.products.find(query,projection)

///////// the QUERY method
-- ie say we wanted to to find all the documents where the name field is equal to pencil;
db.products.find({name: 'pencil'})
--this will bring out the entire entry based on your query

-- ie 2; say we wanted to find all the products where their pice is greater than one (1) dollar;
db.products.find({price: {$gt: 1}})
-- this will bring out all the entries where their prices are greater than 1.
-- $gt is the query operator than means 'greater than'

///////// the PROJECTION method
db.products.find({query},{projection})
--this is quering an entry to project (show only) a specific key pair(s)(same as columns in SQL).
-- in this method, one(1) means true, zero(0) means false.

db.products.find({\_id: 2},{name: 1})
-- what this is saying is we want to query the second i.d (i.d: 2) in the entry to get us the id and name value of its entry

db.products.find({\_id: 2},{name: 1, \_id: 0})
-- what this is saying is we want to query the second i.d (i.d: 2) in the entry to get us ONLY the name value of its entry

db.products.find({\_id: 2},{name: 0})
-- what this is saying is we want to query the second i.d (i.d: 2) in the entry to show us the entire entry EXCEPT the name key pair.

```
UPDATE
db.collection.updateOne()
db.collection.updateMany()
db.collection.replaceOne()

db.collection.updateOne({_id: 2}, {$set: {stock : 32}})
-- using the '$set' query operator, this adds the 'stock' key and the stock value of 32 to the second entry.


```

DELETE
db.products.deleteOne(\_id: 2)
-- this deletes the second entry
db.collection.deleteMany()

db.products.insertOne(
{
\_id: 2,
name: 'pen',
price: 1.2,
stock: 32,
reviews:[
{
authorName: 'sally',
rating: 5,
comment:'best shit ever!'
},
{
authorName: 'sally',
rating: 5,
comment:'best shit ever!'
}
]
}

)

/////////////////////////////////////////////////////////////////

RELATIONSHIPS IN MONGODB
-- this is simply the act of establishing relationships

db.products.insertOne(
{
\_id: 2,
name: 'pencil',
price: 0.80,
stock: 12,
reviews:[
{
authorName: 'sally',
rating: 5,
comment:'best shit ever!'
},
{
authorName: 'sally',
rating: 5,
comment:'best shit ever!'
}
]
}
)
-- from the above example, we established relationship between a product entry and its reviews by embedding the reviews INSIDE the entry.

https://ubuntu.com/download/desktop
https://www.howtogeek.com/howto/linux/create-a-bootable-ubuntu-usb-flash-drive-the-easy-way/

```

```
