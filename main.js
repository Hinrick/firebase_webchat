// Initialize Firebase
var config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};

firebase.initializeApp(config);

// var switchusr = document.getElementById('userbtn');
//
// switchusr.onclick = function() {
//     var switchindex = document.getElementById('userindex');
//     console.log(switchindex);
//   };

/*** Handles the button press.*/

const  txtEmail = document.getElementById('email');
const  txtPass = document.getElementById('password');
const  profileUserName = document.getElementById('profileusername');
const  profileFirstName = document.getElementById('profilefirstname');
const  profileLastName = document.getElementById('profilelastname');
const  profileEmail = document.getElementById('profilermail');
const  btnSignin = document.getElementById('quickstart-sign-in');
const  btnSignUp = document.getElementById('quickstart-sign-up');
const  btnProfile = document.getElementById('btn-profile');

//make friends
$(document).ready(function(){
    //connect database
      var msgRef = firebase.database().ref('message/contact/');

      $('#btn-makefriend').on('click',function(){
        //save input
        var Fakefriendname = $('#fakefriendname').val();
        var Fakefreindnumber = $('#fakefriendnumber').val();
        msgRef.push({
          FriendName:Fakefriendname,
          FreindNumber:Fakefreindnumber,
        });
        console.log('Congrats!You make had made a friend~')
      });
    });


// function onChanges(){
//   firebase.auth().onAuthStateChanged(firebaseUser=>{
//     if (firebaseUser) {
//       console.log(email,password);
//     } else {
//       console.log("Hello World");
//     }
//   });
//}
//SignIn
btnSignin.addEventListener('click',e=>{
  e.preventDefault();
  //get email, Password
  const email = txtEmail.value;
  const password = txtPass.value;
  const auth = firebase.auth();
  //SignIn
  const promise = auth.signInWithEmailAndPassword(email, password);
  promise.catch(e=>console.log(e.message));

  var user = firebase.auth().currentUser;

  if(user){
    location.href="chat.html";
  }else{
    console.log("You have wrong userID ot password!");
  }

})

//Sign Up
btnSignUp.addEventListener('click',e=>{
  e.preventDefault();
  //get email, Password
  const email = txtEmail.value;
  const password = txtPass.value;
  const auth = firebase.auth();
  //SignUp
  const promise = auth.createUserWithEmailAndPassword(email, password);
  promise.catch(e=>console.log(e.message));

  var user = firebase.auth().currentUser;

  if(user){
    location.href = "reprofile.html";
  }else{
    console.log("You have wrong userID ot password!")
  }

})

//snapshotToArray
function snapshotToArray(snapshot) {
    var returnArr = [];

    snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;

        returnArr.push(item);
    });

    return returnArr;
};


//
// $('.userbtn').on('click',function(){
//   var switchindex = $(this).children("tag");
//   switchindex=$("<tag>").html(switchindex).text();
//   console.log(switchindex);
//
//
//
// $(document).ready(function(){
//   //connect database
//     var msgRef = firebase.database().ref('/message/').child(switchindex);
//     $('#btn').on('click',function(){
//       //save input
//       var msg = $('#input').val();
//       msgRef.push({
//         message:msg
//       });
//
//
//     });
//

//   switchindex = "";
// })


  //
  // var Printmsg = firebase.database().ref('1/message')
  // Printmsg.once('value').then(function(snapshot){
  //   var msg = snapshot.child("messsage").val();
  //   console.log(msg);
  // });

    //go on windows




//Print on the chatweb
