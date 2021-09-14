
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAMNcj0WArddta-Q_OijoBweyrHg6fg-Rc",
      authDomain: "kwitter-4eca1.firebaseapp.com",
      databaseURL: "https://kwitter-4eca1-default-rtdb.firebaseio.com",
      projectId: "kwitter-4eca1",
      storageBucket: "kwitter-4eca1.appspot.com",
      messagingSenderId: "618592971351",
      appId: "1:618592971351:web:c5fec4c25ccbd218691112",
      measurementId: "G-8KY1G9V8QL"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function add_room()
{

}