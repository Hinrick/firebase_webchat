## firebase_webchat
This is the source code for the Firebase_WebChat. This app is biding with firebase service and includes four functions: SignIn/SingUp, ediable profile, realtime contact list and chat room.
(This code is still structing)

# Feature
-Sign In/ Sign Up/ Log Out   
 
-Ediale Profile
  Press the "Edit" button below the profile, the page will be directed to editable page. Press "Done" after finishing.
-Realtime Contact List
  The contact page will retrieve data and list it to your page real time.
-Chat Room
 Chat as a boss!
 
# How to test?
-This app is still under structure, so there are only parts of functions could be tested.

-First step:
 Start a firebase project and get the API code.

-Second Step;
 Replace the config in main.js to yours.
 
 eg,
   var config = {
    apiKey: "Put your key here!",
    authDomain: "Put your authDomain here!,
    databaseURL: "Put your databaseURL here!",
    projectId: "Put your projectID here!",
    storageBucket: "Put your storageBucket here!",
    messagingSenderId: "Put your messagingSenderId here!"
  };
  firebase.initializeApp(config);
  
  -Third step(SignIn/SignUp)
   LogIn with Email, Password! (Direct to chat page)
   SignIn with Email and Password! (Direct to profile edite page, to confirm the data of user)
  
  -Forth step(Editable Profile)
  
  -Fifth step(Web Chat)
   (Under structure)
  
  
   
    
