// global variables used 
var email;
var password;
var user;

function redirectPage(){
	window.open('../../results.html');
}

function login(evt) {
	evt.preventDefault();
	email = $('#username').val();
	password = $('#password').val();
	sessionStorage.clear();
	// Firebase Sign-In user with email and password
	// Session persistent autentication method
	firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
		.then(function () {
			// Existing and future Auth states are now persisted in the current
			// session only. Closing the window would clear any existing state even
			// if a user forgets to sign out.
			// ...
			// New sign-in will be persisted with session persistence.
			return firebase.auth().signInWithEmailAndPassword(email, password);
		})
		.then(function(status) {
			// console.log("status is: ", status);
			redirectPage();

		})
		.catch(function (error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			console.log(errorCode + "\n" + errorMessage);
		});
}

var loginBtn = document.getElementById("loginBtn")
loginBtn.onclick = login; 

$(document).ready(function () {
	//onClick event for the Login Button
});
