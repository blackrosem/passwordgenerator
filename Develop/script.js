// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var uppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", OPQRSTUVWXYZ"];
  var lowers = [abcdefghijklmnopqrstuvwxyz];
  var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specials = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", "(", ")", "{", "}", "[", "]", "~", "-", "_", "."];
  var passlength = prompt("Password length between 8 and 128");
  while ((passlength < 8)  || (passlength > 128) || (isNaN(passlength))){
    passlength = prompt("Invalid length selected.  Password length between 8 and 128");
  }
  var categories = 0;

  var lowercase = confirm("Lowercase characters required true/false");
  if(lowercase == true)
    categories++;

  var uppercase = confirm("Uppercase characters required true/false");
  if(uppercase == true)
    categories++;

  var numero = confirm("Numeric characters required true/false");
  if(numero == true)
    categories++;

  var special = confirm("Special characters required true/false");
  if(special == true)
    categories++;

  var allocated = passlength/categories;
  let passphrase = '';
  console.log(lowers[1]);
  
  if(lowercase == true){
    for(let k = 0; k < allocated; k++)
    {
      passphrase += lowers.charAt(Math.floor(Math.random() * lowers.length));
    }
    console.log(passphrase);
  }

  return passphrase;
}
