//ajax for the ombd
var genre = "romance";
var posterURL = "http://image.tmdb.org/t/p/w185/";
var apiKey = "api_key=b92306e1f36bdf25d4bbdf45b0e344e8";
var showTimeApi = "6uzdzbe7uny7nc23edk38r4d";

var discover = "/discover/movie?sort_by=popularity.desc";

var queryURL = "https://api.themoviedb.org/3/movie/76341?api_key=" + apiKey;

var genreReturn = "https://api.themoviedb.org/3/genre/movie/list?api_key=b92306e1f36bdf25d4bbdf45b0e344e8&language=en-US";



var genreId = 28; //action movie for example purposes

var genreArray;

//hashMap for genres using the name of the genre as the unique key
var genreMap = {};

//array that will hold all the movie objects
var movieArray = [];
var showtimes = [];

//movie object constructor
function Movie(title, year, poster, description, trailer, cast, showtimes){
	this.title = title; //string that will hold title of movie
	this.year = year; //year the movie was made
	this.poster = poster; //url for the poster
	this.description = description; //description of the moview
	this.trailer = trailer; //string of youtube trailer url
	this.cast = cast; //an array of the cast members
	this.showtimes = showtimes; //showtime object
}


//function get the 19 genres and makes them into a HashMap
function getGenres() {
	$.ajax({
	  url: genreReturn,
	  method: "GET"
	}).then(function(response) {

	  console.log(response);

	  genreArray = response.genres;
	  console.log(1);

	  console.log("array: " + genreArray);
	  //making the map
	  genreArray.forEach(function(genre){
	  	genreMap[genre.name] = genre.id;
	  	console.log(2);

	  });

	  console.log("map: " + JSON.stringify(genreMap));
	  console.log(genreMap.Action);	
	  console.log(3);
	  //function to populate dropDowns
	  //makeDropDown();

	});
}

//function that returns a list of movies based off genres, function gets Movie Title, Year, Poster, Description 
function getMovies(genreId){
	genreId = genreId;

	var movieSearch = "https://api.themoviedb.org/3/discover/movie?with_genres="+genreId+"&primary_release_date.lte=2018-3-20&primary_release_date.gte=2018-2-1&page=1&include_video=true&include_adult=false&sort_by=popularity.desc&region=us&language=en-US&"+apiKey;
	
	$.ajax({
	  url: movieSearch,
	  method: "GET"
	}).then(function(response) {
	  console.log(response);
	  //get the name of the movie
	  var movieNameArray = response.results;
	  console.log(movieNameArray);
	  for(var i = 0; i < movieNameArray.length; i++){
	  	console.log("Title: " + movieNameArray[i].title + " (" + movieNameArray[i].release_date+")");
	  	var title = movieNameArray[i].title;
	  	var year = movieNameArray[i].release_date
	  	console.log("Overview: " + movieNameArray[i].overview);
	  	var description  = movieNameArray[i].overview;
	  	console.log("Poster Path: " + posterURL + movieNameArray[i].poster_path);
	  	var poster = posterURL + movieNameArray[i].poster_path;
	  	console.log("------------------------------------------------");
	  	//create the movie object
	  	var movie = new Movie(title, year, poster, description);
	  	//push the movie objects into an array
	  	movieArray.push(movie);

	  }	
	});

}

//function that checks which movies are playing in theaters
function getShowtimes(){
	var zipCode = "33176";
	var showtimeURL = "http://data.tmsapi.com/v1.1/movies/showings?startDate=2018-03-18&zip="+zipCode+"&api_key="+showTimeApi;

	$.ajax({
	  url: showtimeURL,
	  method: "GET"
	}).then(function(response) {
	  console.log(response);
	  console.log("Response size: " +response.length);
	  for(var j = 0; j < response.length; j++){
		  	//get the title of the movie
		  	if(typeof response[j].title != "undefined"){
		  		console.log("Title: " + response[j].title);

		  	}
		  	if(typeof response[j].topCast != "undefined"){
		  		//get the case of the movie
		  		console.log("Cast: " + response[j].topCast[0]);
		  	}

			//get the theater which is contained in an array of showtime
			for(var i = 0; i < response[j].showtimes.length; i++){
				if(typeof response[j].showtimes[i].theatre.name != "undefined"){
					console.log("Theater: " + response[j].showtimes[i].theatre.name);
				}
				if(typeof response[j].showtimes[i].dateTime != "undefined"){
					console.log("Times: " + response[j].showtimes[i].dateTime);
				}
			}
	  }	
	});
}


//function to get the trailer of the movie via movieDB ID
function getTrailer(movieID){

}