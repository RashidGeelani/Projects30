let eyeIcon = document.getElementById("eyeIcon");
let password =document.getElementById("password")

// eyeIcon.onclick
 toggle = function(){
  if(password.type == "password"){
    password.type = "text";
  }else{
    password.type = "password";
  }
}