const firebaseConfig = {
    apiKey: "AIzaSyCXsng3BlSXFRHxDlyH9HQVcJSEDXSsE48",
    authDomain: "kwitter-44505.firebaseapp.com",
    databaseURL: "https://kwitter-44505-default-rtdb.firebaseio.com",
    projectId: "kwitter-44505",
    storageBucket: "kwitter-44505.appspot.com",
    messagingSenderId: "1081332916084",
    appId: "1:1081332916084:web:1cab020edd1b514ca19621"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser()
{
    nickname=document.getElementById("nickname").value;
    firebase.database().ref("/").child(nickname).update({
        purpose:"adding user"
    });
}