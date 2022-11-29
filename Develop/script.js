// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var uppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specials = ["@", "%", "+"]

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passlength = prompt("Password length between 8 and 128");
  while ((passlength < 8)  || (passlength > 128) || (isNaN(passlength))){
    passlength = prompt("Invalid length selected.  Password length between 8 and 128");
  }

  var lowercase = confirm("Lowercase characters required true/false");
  console.log(lowercase);

  var uppercase = confirm("Uppercase characters required true/false");
  console.log(uppercase);

  var numero = confirm("Numeric characters required true/false");
  console.log(numero);

  var special = confirm("Special characters required true/false");
  console.log(special);
  
  var specsmet = false;
  let passphrase = '';
  while (specsmet == false){
    console.log("arrived");
    specsmet = true;
    var pass = (length = passlength);
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&()*';
    for(let k = 0; k < length; k++)
    {
      passphrase += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    console.log(passphrase);

    var result;
    if(lowercase == 'true') {
      result = evaluate('a', 'z', passphrase);
      if(result == false)
        specsmet = false;
    }
    if(uppercase == 'true') {
      result = evaluate('A', 'Z', passphrase);
      if(result == false)
        specsmet = false;
    }
    if(numero == 'true') {
      result = evaluate(0, 9, passphrase);
      if(result == false)
        specsmet = false;
    }
    if(special == 'true') {
      result = evaluate('!', '*', passphrase);
      if(result == false)
        specsmet = false;
    }
  }
  return passphrase;
}

function evaluate(x, y, z) {
  var stringarray = z.split("");
  var meetsreqs = false;
  console.log(meetsreqs);
  for(var k = 0; k < stringarray.length; k++){
    if((stringarray[k] >= x) && (stringarray[k] <= y)){
      meetsreqs = true;
      break;
    }
  }
  console.log(meetsreqs);
  return meetsreqs;
}