firebase.auth().signInWithEmailAndPassword("vvskchaitanya@gmail.com", "vvskchaitanya")
  .then(function(result) {
    console.log("User Successfully logged In ...",result);
    alert("Login Success");
  }).catch(function(error) {
    console.error("Failed to login");
    alert("Login Failed");
});

var defaultDatabase = firebase.database();
var actionRef = firebase.database().ref("action");
actionRef.set("o");

action=function(c){
    actionRef.set(c);
}