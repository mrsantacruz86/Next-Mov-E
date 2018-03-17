  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCyNP4-ntc37bN0OtkDNldtNnUoSNSx-S0",
    authDomain: "next-mov-e.firebaseapp.com",
    databaseURL: "https://next-mov-e.firebaseio.com",
    projectId: "next-mov-e",
    storageBucket: "",
    messagingSenderId: "903599019806"
  };
  firebase.initializeApp(config);

	// Authentication
	// ________________________________________________________________________________________
  // Create user with email and password
  // firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  //   // Handle Errors here.
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   // ...
  //   console.log(errorCode + "\n" + errorMessage);
	// });
	

	// Sign-In user with email and password
  // firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  //   // Handle Errors here.
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   // ...
  //   console.log(errorCode + "\n" + errorMessage);
  // });


  // Methods to implement in case the user is authenticated or not
