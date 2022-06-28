// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){

//validation if the user type at least 1 character
function ValCharacter(character){
  while(character.length <1){
    character = prompt("Try to type someting this time !");
  }
  return character;
}
// validation if our value is a number
function Validation(number){
  while(isNaN(number)){
    number = prompt("Write a numerical value only.");
    number = ValCharacter(number);
  }
  return number;
}
//Create a funtion to validate and get the leght of characters for my password
function promptNumCharacters(){
    var NumCharacters = prompt("Enter the leght of character that you wish !");
    var valnum = Validation(NumCharacters);
    while (valnum < 8 || valnum > 128){
      alert("Your number should be greater than 8 and less than 128");
      valnum = prompt("Try agrain.!");
      valnum = Validation(valnum);
    }
    return valnum;
}

var numOfChar = promptNumCharacters();
var RamPassword = "";

//Creation Array to use in our quetions
var ListQuestions = ["lowercase","uppercase","numeric","special character"];

const alphabet = "abcdefghijklmnopqrstuvwxyz";

const alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const ramdonNumber = Math.floor(Math.random()* 100)+1;

const SpecialChar = " |=>!$%&/(@#^*-+<;:.,]}{)]~'? ";

const allRandom = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ|=>!$%&/(@#^*-+<;:.,]}{)]~'?"

// console.log(RamPassword);
function chooseCharacter(count){
    if(count == "0"){
        const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];
        RamPassword+=randomCharacter;
        console.log(RamPassword);
    }else if(count == "1"){
        const randomCharacterUpper = alphabetUpper[Math.floor(Math.random() * alphabetUpper.length)];
        RamPassword+=randomCharacterUpper;
        console.log(RamPassword);
    }else if(count == "2"){
        const ramdonNumber = Math.floor(Math.random()* 10)+1;
        RamPassword+=ramdonNumber;
        console.log(RamPassword);
    }else if(count == "3"){
        const randomCharacterSpe = SpecialChar[Math.floor(Math.random()* SpecialChar.length)];
        RamPassword+=randomCharacterSpe;
        console.log(RamPassword);
   }
   console.log(count);
   
  return RamPassword;
}

function CharacterType(){
  for(var i=0; i < ListQuestions.length; i++){
    var position = ListQuestions[i];
    var question = prompt("Do you want yo include " +position +" YES/NO ?" );
    var response = question.toUpperCase();
    console.log(response);
  while(response != "YES" && response != "NO"){
    response = prompt("Write yes/no response only");
    response = response.toUpperCase();
    console.log(response);
  }
  if (response === "YES"){
    alert("ADD");
    chooseCharacter(i);
  }
  else{
    alert("The password would be generated automatically!")
    while(RamPassword.length <= numOfChar){
      const randomALL= allRandom[Math.floor(Math.random()* allRandom.length)];
      RamPassword+=randomALL;
    }
  }
  }
  return RamPassword;
}

var valor = CharacterType();
console.log(valor);


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
