var movies = [
    "movie1",
    "movie2",
    "movie3",
    "movie4",
    "movie5",
    "movie6",
    "movie7",
    "movie8",
    "movie9",
    "movie10",
];

for(var i = 0; i < movies.length; i++){
    var newMovies = movies[i][0].toUpperCase() + movies[i].slice(1);
    console.log(newMovies);
}