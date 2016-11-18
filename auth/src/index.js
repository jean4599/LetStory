import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FacebookLogin from 'react-facebook-login';
import './index.css';
import * as firebase from 'firebase';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
	
 var config = {
    apiKey: "AIzaSyCOl8JvMJ3Ja1IPbRR4CSEpbv2Xk-zNb38",
    authDomain: "test-6c7b3.firebaseapp.com",
    databaseURL: "https://test-6c7b3.firebaseio.com",
    storageBucket: "test-6c7b3.appspot.com",
    messagingSenderId: "587553292543"
  };
  firebase.initializeApp(config);

var email = document.getElementById('email');
var password = document.getElementById('pswd');
var loginButton = document.getElementById('loginButton');
var createButton = document.getElementById('createButton');
var logoutButton = document.getElementById('logoutButton');
var fbButton = document.getElementById('fbButton');

function changeStateLogin(loggedIn){
	if(loggedIn == true){
		logoutButton.style.display = "inline-block";
		loginButton.style.display = "none";
		createButton.style.display = "none";
		fbButton.style.display = "none";
		console.log("you are logged in");
	}else{
		console.log("not logged in...");
		logoutButton.style.display = "none";
		loginButton.style.display = "inline-block";
		createButton.style.display = "inline-block";
		fbButton.style.display = "inline-block";
	}
}

createButton.addEventListener('click', e => {
  const givenEmail = email.value;
  const givenPassword = password.value;
  const auth = firebase.auth();
  const promise = auth.createUserWithEmailAndPassword(givenEmail, givenPassword);
  promise.catch((event) => console.log(event.message));


});
loginButton.addEventListener('click', e => {
  const givenEmail = email.value;
  const givenPassword = password.value;
  const auth = firebase.auth();

  const promise = auth.signInWithEmailAndPassword(givenEmail, givenPassword);
  promise.catch((event) => console.log(event.message));
});

logoutButton.addEventListener('click', e => {
	changeStateLogin(false);
	firebase.auth().signOut();
});

firebase.auth().onAuthStateChanged(firebaseUser => {
	if(firebaseUser){
		changeStateLogin(true);
	}
	else{
		changeStateLogin(false);
	}
});

