// Assignment Code
var generateBtn = document.querySelector("#generate");

 /////INITIALIZING GLOBAL CHARACTER VARIABLES (MOSTLY ARRAYS)////
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ",", ".", "/", ":", "<", "=", ">", "?", "@", "[", "\"", "\'", "]", "^", "_", "`", "{", "|", "}", "~", ";", "\\"];
var yourPasswordString = "";
var globalPasswordArray = [];
var globalRunTime = 0; 


function generatePassword() {
  //INITIALIZING yourPassword VARIABLE USED IN SELECTING RANDOM CHARACTERS
  var yourPassword = [];

  //FORMING GLOBAL ARRAY THAT WILL BE USED FOR CHARACTER SELECTION
  function formPassArray() {
    
    //INITIALIZING LOCAL ARRAY
    var localPasswordArray = [];
    
    //UPPERCASE//
    var haveUpper = confirm("Would you like your password to include UPPERCASE LETTERS? Select 'OK' for yes and 'Cancel' for no."); {
      if (haveUpper === true) {
        var localPasswordArray = localPasswordArray.concat(uppercase);
      }
    }
    
    //LOWERCASE//
    var haveLower = confirm("Would you like your password to include LOWERCASE LETTERS? Select 'OK' for yes and 'Cancel' for no."); {
      if (haveLower === true) {
        var localPasswordArray = localPasswordArray.concat(lowercase);
      }
    }
    
    //NUMBER//
    var haveNumber = confirm("Would you like your password to include NUMBERS?  Select 'OK' for yes and 'Cancel' for no."); {
      if (haveNumber === true) {
        var localPasswordArray = localPasswordArray.concat(numbers);
      }
    }
    
    //SPECIAL CHARACTER//
    var haveSpecial = confirm("Would you like your password to include SPECIAL CHARACTERS? Select 'OK' for yes and 'Cancel' for no."); {
      if (haveSpecial === true) {
        var localPasswordArray = localPasswordArray.concat(special);
      }
    }
    
    //IF NONE SELECTED//
    if (haveUpper !== true && haveLower !== true  && haveNumber !== true  && haveSpecial !== true ) {
      alert("You must select at least one option!");
      return formPassArray();
    }
      globalPasswordArray = localPasswordArray;
  }
  formPassArray();

  
  ////RUN COUNT LOGIC////
  function formRunTime() {
    var localRunTime = prompt("Please choose the length of your password. The length must be between 8 and 128 characters."); 
    var localRunTime = parseInt(localRunTime);
    if (isNaN(localRunTime)) {
      alert("You must enter in a number.");
      return formRunTime();
    }
    else if (localRunTime > 128) {
      alert("The password length must be between 8 and 128 characters. Too high.");
      return formRunTime();
    }
    else if (localRunTime < 8) {
      alert("The password length must be between 8 and 128 characters. Too low.");
      return formRunTime();
    }
    globalRunTime = localRunTime;
  }
  formRunTime();
  

  ////RANDOM CHARACTER SELECTION LOGIC////
  for (let i = 0; i < globalRunTime; i++) {
    var randoms = globalPasswordArray[Math.floor(Math.random() * globalPasswordArray.length)];
    yourPassword = yourPassword.concat(randoms);
  }
  yourPasswordString = yourPassword.join('');
  return yourPasswordString;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

/*      ALTERNATE WAY TO GRAB THE PASSWORD WITHOUT USING RETURN ON yourPasswordString
// Write password to the #password input
function writePassword() {
  generatePassword();
  var password = yourPasswordString;
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
*/

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);