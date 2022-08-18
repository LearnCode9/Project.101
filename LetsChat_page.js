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

	user_name = localStorage.getItem("user_name");
	room_name = localStorage.getItem("room_name");

  