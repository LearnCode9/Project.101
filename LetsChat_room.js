
var firebaseConfig = {
  apiKey: "AIzaSyDhCMCP4XVtyZYNMfs3olzqhrFEVya8vtw",
  authDomain: "project-101-45ad9.firebaseapp.com",
  databaseURL: "https://project-101-45ad9-default-rtdb.firebaseio.com",
  projectId: "project-101-45ad9",
  storageBucket: "project-101-45ad9.appspot.com",
  messagingSenderId: "695772828776",
  appId: "1:695772828776:web:2140a47018d14c947797dd"
};

firebase.initializeApp(firebaseConfig);

  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("contact Name - " + contact_names);
   row = "<div class='contact_name' id="+Room_names+" onclick='redirectTocontactName(this.id)' >#"+ contact_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
 });
});

}
function addcontact()
    {
      room_name = document.getElementById("contact_name").value;
      document.getElementById("contact_name").innerHTML = "Contact: " + contact_name + "!";
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding contact name"
      });
	  localStorage.setItem("contact_name", room_name);
        
      window.location = "letsChat_room.html";
  }

  