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

		var $checkbox = $('<div class="form-check">');
		var $label = $('<label class="form-check-label">');
		var $cbx = $('<input type="checkbox" class="form-check-input">');
		$cbx.attr('id', 'cb-' + element);
		$cbx.attr('value', element);
		$cbx.appendTo($checkbox);
		$label.attr('for', 'cb-' + element);
		$label.append(element);
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
			userGenres[i] = (this.attr('value'));
		}
		console.log(userGenres);
	});
	
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




