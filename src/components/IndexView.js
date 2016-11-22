import React, { PropTypes } from 'react'

import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDba-UFQTkLf_3D14fTOMl8Ed35e3wLK5Y",
    authDomain: "letstory-52d57.firebaseapp.com",
    databaseURL: "https://letstory-52d57.firebaseio.com",
    storageBucket: "letstory-52d57.appspot.com",
    messagingSenderId: "1059708952950"
};
firebase.initializeApp(config);



//get child "text" from firebase
const testing = document.getElementById('testing');
const dbRef = firebase.database().ref().child('text');
dbRef.on('value', snap => console.log(snap.val()));
//dbRef.on('value', snap=> testing.innerText = snap.val());

const IndexView = React.createClass({

  render () {
    return (
      <div>
        This is the main thing


        <pre id="testing"></pre>


      </div>
    )
  }
})

export default IndexView;
