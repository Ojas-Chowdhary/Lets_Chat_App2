// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
    apiKey: "AIzaSyAkzVkpCl_nFBPZz0DueYqCg8WbflR5XuA",
    authDomain: "chatapp2-f82ad.firebaseapp.com",
    databaseURL: "https://chatapp2-f82ad-default-rtdb.firebaseio.com",
    projectId: "chatapp2-f82ad",
    storageBucket: "chatapp2-f82ad.appspot.com",
    messagingSenderId: "999264377926",
    appId: "1:999264377926:web:b40a9cee15bdbadf0abe47"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);



function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



