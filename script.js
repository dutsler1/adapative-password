


var generateBtn = document.querySelector("#generate");
//this is generating the basics of the password
function generatePassword() {
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var numeric = "0123456789";
  var special = "!@#$%^&*()";
  var lowercase = alphabet.split("")
  var uppercase = alphabet.toUpperCase().split("")
  var verify = {
    confirmPasswordLowercase: false,
    confirmPasswordNumeric: false,
    confirmPasswordSpecial: false,
    confirmPasswordUppercase: false,
  };
//this is a window prompt that tells the user what the criteria is and if it is wrong what they need
  var passwordLength = window.prompt("How long should the password be? must be between 8 and 128");
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password must be between 8 and 128 characters long!");
    return "";
  }
// this is asking the user what criteria they want 
  var confirmPasswordLowercase = window.confirm("Do you want to have lowercase letters?");
  var confirmPasswordUppercase = window.confirm("Do you want to have uppercase letters?");
  var confirmPasswordNumeric = window.confirm("Do you want to include numeric characters?");
  var confirmPasswordSpecial = window.confirm("Do you want to include special characters?");
  verify = {
    confirmPasswordLowercase,
    confirmPasswordNumeric,
    confirmPasswordSpecial,
    confirmPasswordUppercase,
  };

  var character = "";
  if (confirmPasswordLowercase) {
    character += lowercase;
  }
  if (confirmPasswordUppercase) {
    character += uppercase;
  }
  if (confirmPasswordNumeric) {
    character += numeric;
  }
  if (confirmPasswordSpecial) {
    character += special;
  }
// this is saying if there is nothing inside the box that they need at least something
  if (character === "") {
    window.alert("Please choose at least one character type!");
    return "";
  }

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * character.length);
    password += character.charAt(randomIndex);
  }

  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if (password) {
    passwordText.value = password;
    window.alert("Congratulations! The password has been generated successfully.");
  } else {
    passwordText.value = "";
  }
}

generateBtn.addEventListener("click", writePassword);
