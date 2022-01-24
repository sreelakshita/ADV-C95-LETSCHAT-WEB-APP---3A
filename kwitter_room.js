
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAGCIvjj4GPXFrywuJc1VG5bpZrRlRPIeU",
    authDomain: "classtest-homework-90fcc.firebaseapp.com",
    projectId: "classtest-homework-90fcc",
    storageBucket: "classtest-homework-90fcc.appspot.com",
    messagingSenderId: "989540549666",
    appId: "1:989540549666:web:3ee59f9f4aae7d2bcd767b"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("Username");
  document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

  function addroom() {
         room_name = document.getElementById("room_name").value;

         firebase.database().ref("/").child(room_name).update({
              purpose: "Adding Room Name"
        });

        localStorage.setItem("Roomname",room_name);
    
        window.location = "kwitter_room.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
        console.log("room_name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
        document.getElementById("output").innerHTML += row;
  //End code
  });});}
getData();
function redirectToroomname(name){
  console.log(name);
  localStorage.setItem("Roomname",name);
  window.location = "kwitter_room.html";
}
function logout() {
  localStorage.removeItem("Username");
  localStorage.removeItem("Roomname");
  window.location = "index.html";
}
