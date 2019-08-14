// # javascript-classes2_cw
//
// ### Exercise 1
// Create a Movie class. Make all the following attributes: movieName, rating, and yearReleased.
// Create three different methods to change each attribute.
// Outside of the class create two different Movie objects, assign values to each object, and print them to the console.

class Movie
{
    constructor(movieName, rating,  yearReleased)

    {
        this.movieName_p = movieName;
        this.rating_p = rating;
        this.yearReleased_p = yearReleased;


    }

// Create three different methods to change each attribute.

    changeName(newName)
    {
        this.movieName_p= (newName);
    }


    changeRating(newRate)
    {
        this.rating_p= (newRate);
    }



    changYear(newYear)
    {
        this.yearReleased_p= (newYear);
    }



}

// Outside of the class create two different Movie objects, assign values to each object, and print them to the console.

let newMovie = new Movie("DDLJ", 5,1995);
console.log(newMovie);
let newMovie1 = new Movie("HAPPYFEET", 4,2005);
console.log(newMovie1);


// Call three different methods to change each attribute.

var new_movie_name =prompt ("Enter a movie name");
newMovie.changeName(new_movie_name);

var new_Rate =prompt ("Enter a rating");
newMovie.changeRating(new_Rate);

var new_Year =prompt ("Enter year of release");
newMovie.changYear(new_Year);

//console.log(newMovie);




















//     ### Exercise 2
// Create a class Product that represents a product sold online. A product has a price, quantity and name.
//
//     The class should have:
//     1. A constructor to hold the values.
// 2. A method ```printProduct()``` that prints a product in the following form: ```Banana, price 1.1, amount 13```
