
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBQ7EbojjhcfDMbg1LV2g-5qhm7oKGHD6k",
  authDomain: "lets-chat-app-6321c.firebaseapp.com",
  databaseURL: "https://lets-chat-app-6321c-default-rtdb.firebaseio.com",
  projectId: "lets-chat-app-6321c",
  storageBucket: "lets-chat-app-6321c.appspot.com",
  messagingSenderId: "139323356325",
  appId: "1:139323356325:web:b4b69b2aace8ca8065094c"
};

    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

     user_name = localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML = "Welcome  "+ user_name + "!";



    function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({

            purpose : "adding room name"

      });
      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html"
}


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;

      //End code
      });});}
      getData();




function  redirectToRoomName(name) {

      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

    


