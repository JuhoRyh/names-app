# dev-academy-2021 exercise - Name Application

[App on Heroku](https://aqueous-gorge-01427.herokuapp.com/)

Application which shows the most popular names of Solita employees. 


## API

API endpoints:

/api/names/popular
 - Returns the list which is sorted in popularity

/api/names/alphabetical
- Returns the list in alphabetical order

/api/names/total
- Returns the total of the names

/api/names/:name
- Returns the name and amount if it can be found in the json file

## Technologies

This application utilises Node, Express and React

## Instructions of the Assignment

Your task is to implement a name application. The application should have an user interface. The user interface can be either a web application or an api. (It can even contain both if you have enough time and enthusiasm.)

The user interface should provide at least the first one of the following requirements, but again, you’re allowed to implement them all.

   1. List names and amounts, order by amount, most popular first
   2. List names in alphabetical order
   3. Return the total amount of all the names
   4. Return the amount of the name given as a parameter

The data for the application is stored in a json file (names.json). The material contains the top-10 of both male and female names in Solita. You can use the json file directly as your data source or you can store the data in a database if you wish.

## What to improve

Due to the time limit there is a lot to improve on. The API could be made a lot better with good error handling which it as of now doesn't have. Also the UI for the app is very simple but it does do its work.
