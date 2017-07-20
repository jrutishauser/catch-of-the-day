import Rebase from 're-base';
var firebase = require('firebase');


const app = firebase.initializeApp({
  apiKey: "AIzaSyBMSBavGJWMrOjc1JPsEEAxtQGRYJ-nneg",
  authDomain: "catch-of-the-day-jon.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-jon.firebaseio.com"
});
var base = Rebase.createClass(app.database());
export default base;
