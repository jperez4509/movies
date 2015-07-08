// var movies = [
//     "movie1",
//     "movie2",
//     "movie3",
//     "movie4",
//     "movie5",
//     "movie6",
//     "movie7",
//     "movie8",
//     "movie9",
//     "movie10",
// ];

// for(var i = 0; i < movies.length; i++){
//     var newMovies = movies[i][0].toUpperCase() + movies[i].slice(1);
//     console.log(newMovies);
// }


// var sentence = prompt("Please enter a sentence.");


// function capitalize(str) {
//     if(!str || typeof str !== "string"){
//         return str;
//     }

//     return str[0].toUpperCase() + str.slice(1);
// }


var movies = [
    ["titanic", 19, 1989],
    ["mean girls", 90, 200],
    ["stuff", 50, 1980]
];

function objCreator(name, min, year) {

    var newObject = {
        title: name,
        time: min,
        year: year
    };

    return newObject;
}


var movieObj = [];

for(var i = 0; i < movies.length; i++){
    var movie = movies[i];
    movieObj.push(objCreator.apply({}, movie));

}


for (var i = 0; i < movieObj.length; i++){
    var movie =  movieObj[i];
    console.log(movie.title, movie.time, movie.year);
}

var request = prompt("What movie would you like to search for?");

for (var i = 0; i < movieObj.length; i++){
    if(request == movieObg[i].title){
        alert("movie found!");
    } else {
        alert("movie not found!");
    }
}



