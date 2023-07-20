// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
//VARIABLES FOR THE PASSWORD
  var lowercase =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var uppercase =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  var numeric =["1","2","3","4","5","6","7","8","9"]
  var special =["!","@","#","$","%","^","&","*","(",")"]

  // THEN I am presented with a series of prompts for password criteria
  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password
  // WHEN prompted for the length of the password
  var passwordLength = window.prompt("How long should the password be? must be between 8 and 128")
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  if (passwordLength < 8) {
    window.alert("password must be between 8 and 128 characters long!")
    return
  }
  else if (passwordLength > 128) {
    window.alert("password must be between 8 and 128 characters long!")
    return
  }

  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  var confirmPasswordLowercase = window.confirm("do you want to have lowercase letters?")
  var confirmPasswordUppercase = window.confirm("do you want to have uppercase letters?")
  var confirmPasswordNumeric = window.confirm("do you want to include numeric characters?")
  var confirmPasswordSpecial = window.confirm("do you want to include special characters?")

  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  if (confirmPasswordLowercase === false && confirmPasswordUppercase === false && confirmPasswordNumeric === false && confirmPasswordSpecial === false) {
    window.alert("please choose one option!")
    return
  }


  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page
  // ```

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




