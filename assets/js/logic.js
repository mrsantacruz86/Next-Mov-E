//This is the list of genres that will be used to create 
//the list and retrieve the user's selection.
var listOfGenres = ["Action", "Adventure", "Animation", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "History", "Horror", "Music", "Mystery", "Romance", "Science Fiction", "Thriller", "War", "Western"]

function populateChecklist(list){
	//This elements are dynamically created and nested inside each other
	var $checkboxList = $('<div>');
	// <div class="form-check">
	// <input class="form-check-input" type="checkbox" value="Western" id="Western">
	// <label class="form-check-label" for="Western">Western</label>
	// </div>



	list.forEach(element => {
		
		var $checkbox = $('<div>');
		var $label = $('<label>');
		var $chxBox = $('<input type="checkbox">');
		$checkbox.addClass('checkbox');
		$chxBox.attr('id', list[element]);
		$label.append(list[element]);
		$chxBox.prependTo($label);
		$label.appendTo($checkbox);
		$checkbox.appendTo($checkboxList);
	});
	/* This code appends the list of checkboxes that 
	was created to the #checkList element in the DOM */
	$checkboxList.appendTo($('#checkList'));
}

populateChecklist(listOfGenres);



var userGenres = [];

getGenres();

var genres = "";

$("#submit-button").on("click",function(event){
	event.preventDefault();
	console.log("click");
	//Overwriting the array every time the submit Btn is clicked to avoid repetition
	userGenres = [];
	$('#checkList > input').each(function(){
		if(this.checked){
			userGenres[i] = (this.attr('id'));
		}
		console.log(userGenres);
	});

	// if($("#Action").is(":checked")){
	// 	userGenres.push(genreMap["Action"]);
	// }
	// if($("#Adventure").is(":checked")){
	// 	userGenres.push(genreMap["Adventure"]);
	// }
	// if($("#Animation").is(":checked")){
	// 	userGenres.push(genreMap["Animation"]);
	// }
	// if($("#Comedy").is(":checked")){
	// 	userGenres.push(genreMap["Comedy"]);
	// }
	// if($("#Crime").is(":checked")){
	// 	userGenres.push(genreMap["Crime"]);
	// }
	// if($("#Documentery").is(":checked")){
	// 	userGenres.push(genreMap["Documentary"]);
	// }
	// if($("#Drama").is(":checked")){
	// 	userGenres.push(genreMap["Drama"]);
	// }
	// if($("#Family").is(":checked")){
	// 	userGenres.push(genreMap["Family"]);
	// }
	// if($("#Fantasy").is(":checked")){
	// 	userGenres.push(genreMap["Fantasy"]);
	// }
	// if($("#History").is(":checked")){
	// 	userGenres.push(genreMap["History"]);
	// }
	// if($("#Horror").is(":checked")){
	// 	userGenres.push(genreMap["Horror"]);
	// }
	// if($("#Music").is(":checked")){
	// 	userGenres.push(genreMap["Music"]);
	// }
	// if($("#Mystery").is(":checked")){
	// 	userGenres.push(genreMap["Mystery"]);
	// }
	// if($("#Romance").is(":checked")){
	// 	userGenres.push(genreMap["Romance"]);
	// }
	// if($("#Science-Fiction").is(":checked")){
	// 	userGenres.push(genreMap["Science-Fiction"]);
	// }
	// if($("#Thriller").is(":checked")){
	// 	userGenres.push(genreMap["Thriller"]);
	// }
	// if($("#War").is(":checked")){
	// 	userGenres.push(genreMap["War"]);
	// }
	// if($("#Western").is(":checked")){
	// 	userGenres.push(genreMap["Western"]);
	// }



	for (var i =0; i < userGenres.length; i++) {
		//make strng for genre
		genre = userGenres[i];

	}
	

	getMovies(genre);
});

function renderPoster(array){
	var movieContainer = $("#displayResults");
	for(var i=0; i < array.length; i++) {
		var thumbnail = $("<div>");
		var image = $("<img>");
		image.attr("src", array[i].poster);
		image.attr("class", "thumbnail")
		thumbnail.append(image);
		movieContainer.append(thumbnail);	
	}
};




