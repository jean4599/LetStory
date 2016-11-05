(function  () {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDba-UFQTkLf_3D14fTOMl8Ed35e3wLK5Y",
    authDomain: "letstory-52d57.firebaseapp.com",
    databaseURL: "https://letstory-52d57.firebaseio.com",
    storageBucket: "letstory-52d57.appspot.com",
    messagingSenderId: "1059708952950"
  };
  firebase.initializeApp(config);



  //get element
  const _preobject = document.getElementById("object");


  //create reference
  const dbRefObject = firebase.database().ref().child('object');

  //sync object changes
      //print in log
      dbRefObject.on('value', snap=> console.log(snap.val()));

  /////this is not working////
  // dbRefObject.on('value', snap=> {
  //   _preobject.innerText = JSON.stringify(snap.val(),null,3);
  // });
  ///////////////////




}());
