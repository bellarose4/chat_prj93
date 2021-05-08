
var firebaseConfig = {
      apiKey: "AIzaSyAwHWHuceEL51RQ4ZdKb14ZsizbwuJ8kOg",
      authDomain: "kwitter-80e66.firebaseapp.com",
      databaseURL:"https://kwitter-80e66-default-rtdb.firebaseio.com/",
      projectId: "kwitter-80e66",
      storageBucket: "kwitter-80e66.appspot.com",
      messagingSenderId: "53339981196",
      appId: "1:53339981196:web:8b9505917a42c31f74c2a9",
      measurementId: "G-2F1V633XLJ"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function c(){

    b=localStorage.getItem("user_name");
    document.getElementById("welcome").innerHTML="Welcome "+b+"!";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
