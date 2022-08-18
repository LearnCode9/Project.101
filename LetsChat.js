var firebaseConfig = {
    apiKey: "AIzaSyDhCMCP4XVtyZYNMfs3olzqhrFEVya8vtw",
    authDomain: "project-101-45ad9.firebaseapp.com",
    databaseURL: "https://project-101-45ad9-default-rtdb.firebaseio.com",
    projectId: "project-101-45ad9",
    storageBucket: "project-101-45ad9.appspot.com",
    messagingSenderId: "695772828776",
    appId: "1:695772828776:web:2140a47018d14c947797dd"
  };

  function addUser() 
  { 
  user_name = document.getElementById("user_name").value; 
  localStorage.setItem("user_name", user_name); 
  window.location = "letsChat_room.html"; 
}
  