# ExpressMongoAjaxJquery
Just to practice express jquery ajax call and mongodb

install mongodb 
add data/db and set to path when starting mongo 
rakeshprabhakaran@192-168-1-104 js % mongod --dbpath data/db

data in my userData collection :

{
    "name": "Sue",
    "age": 26,
    "status": "A",
    "groupd": ["news", "sports"]
}

to start project use npm start

created express project using npx express-generator

added a route in the routes folder to manager the data call 

can get data using 

http://localhost:30000/data
