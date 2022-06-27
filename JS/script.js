// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  //Create a funtion to validate and get the leght of characters for my password
  function promptNumCharacters(){
    var NumCharacters = prompt("Enter the leght of character that you wish !");
    while (NumCharacters < 8 || NumCharacters > 128){
      alert("Your number should be greater than 8 and less than 128");
      NumCharacters = prompt("Try agrain.!");
    }
    return NumCharacters;
  }



  var ArrayQuestions = ["lowercase","uppercase","numeric","special character"];

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
