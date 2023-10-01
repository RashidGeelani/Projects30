

//generate button
const passwordBox = document.getElementById("password");
const length = 12;
const  upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdrfghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%&*|?><~?";
const allChars = upperCase + lowerCase + numbers + symbols;
function createPassword(){
  let password = "";
   password += upperCase[Math.floor(Math.random() * upperCase.length)];
   password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
   password += numbers[Math.floor(Math.random() * numbers.length)];
   password += symbols[Math.floor(Math.random() * symbols.length)];

   while(length > password.length){
      password += allChars[Math.floor(Math.random() * allChars.length)];
   }
   passwordBox.value = password;
}


//copy button


function copyPassword(){
  passwordBox.select();
  navigator.clipboard.writeText(passwordBox.value);
  // passwordBox.setSelectionRange(0, 12);
  // window.navigator.clipboard.writeText(passwordBox.value);
}