// FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCXsng3BlSXFRHxDlyH9HQVcJSEDXSsE48",
      authDomain: "kwitter-44505.firebaseapp.com",
      databaseURL: "https://kwitter-44505-default-rtdb.firebaseio.com",
      projectId: "kwitter-44505",
      storageBucket: "kwitter-44505.appspot.com",
      messagingSenderId: "1081332916084",
      appId: "1:1081332916084:web:1cab020edd1b514ca19621"
    };
    
    room_name=localStorage.getItem("room_name");
    user_name=localStorage.getItem("user_name");

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

//Start code
  console.log(firebase_message_id);
  console.log(message_data);
  Name=message_data['name'];
  msg=message_data['msg'];
  like=message_data['like'];
  nmae_with_tag='<h4>'+Name+'<img src="tick.png" class="user_tick"></h4>';
  msg_with_tag='<h4 class="message_h4">'+msg+'</h4>';
  like_button='<button id="'+firebase_message_id+'" class="btn btn-warning" value="'+like+'" onclick="increment_like(this.id);">';
  span_with_tag='<span class="glyphicon glyphicon-thumbs-up">Like ; '+like+'</span></button><hr>';
  row=nmae_with_tag+msg_with_tag+like_button+span_with_tag;
  document.getElementById("output").innerHTML+=row;
  

  //End code
      } });  }); }
getData();

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";    
}

function sending()
{
      msg=document.getElementById("msg").value;

      firebase.database().ref(room_name).push({
                  name:user_name,
                  message:msg,
                  like:0
            });
      document.getElementById("msg").value=" ";
}

function increment_like(msg_id)
{
console.log("clicked on like button with id "+msg_id);
button_id=msg_id;
 likes=document.getElementById(button_id).value;
 updated_likes=Number(likes)+1;
 console.log(updated_likes);
 firebase.database().ref(room_name).child(msg_id).update({
      like:updated_likes
 });
}