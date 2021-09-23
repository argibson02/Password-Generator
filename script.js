// Assignment Code
var generateBtn = document.querySelector("#generate");
//generateBtn.onclick = "formPassArray()"" 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//Character Arrays
var yourPassword = [];
//var globalPasswordArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var globalPasswordArray = [];
var globalRunTime = 0;
//Forming passwordArray Logic/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////
console.log("--------------------------------------------------------");
console.log("formPassArray START");
////

function formPassArray() {
  //Character Arrays   
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ",", ".", "/", ":", "<", "=", ">", "?", "@", "[", "\"", "\'", "]", "^", "_", "`", "{", "|", "}", "~", ";", "\\"];
  var localPasswordArray = [];
  
  //UPPERCASE
  var haveUpper = confirm("Would you like your password to include uppercase letters?"); {
    if (haveUpper === true) {
      var localPasswordArray = localPasswordArray.concat(uppercase);
    }
  }
  //console.log(localPasswordArray);
  
  //LOWERCASE
  var haveLower = confirm("Would you like your password to include lowercase letters?"); {
    if (haveLower === true) {
      var localPasswordArray = localPasswordArray.concat(lowercase);
    }
  }
  //console.log(localPasswordArray);
  
  //NUMBER
  var haveNumber = confirm("Would you like your password to include numbers?"); {
    if (haveNumber === true) {
      var localPasswordArray = localPasswordArray.concat(numbers);
    }
  }
  //console.log(localPasswordArray);
  
  //SPECIAL CHARACTER
  var haveSpecial = confirm("Would you like your password to include special characters?"); {
    if (haveSpecial === true) {
      var localPasswordArray = localPasswordArray.concat(special);
    }
  }
  //console.log(localPasswordArray);
  
  //IF NONE SELECTED
  if (haveUpper !== true && haveLower !== true  && haveNumber !== true  && haveSpecial !== true ) {
    alert("You must select at least one option!");
    return formPassArray();
  }
    globalPasswordArray = localPasswordArray;
}

formPassArray();
console.log(globalPasswordArray);


//Runtime Logic/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///
console.log("--------------------------------------------------------");
console.log("formRunTime START");
///



function formRunTime() {
var localRunTime = prompt("Please choose the length of your password. The length must be between 8 and 128 characters."); 

  /*  ////Need to make error for inputting letter characters//////
  if (localRunTime typeof number) {
  alert("You must enter in a number.");
  return formRunTime();
  }
  else 
  */
 
  if (localRunTime > 128) {
    alert("The password length must be between 8 and 128 characters.");
    return formRunTime();
  }
  else if (localRunTime < 8) {
    alert("The password length must be between 8 and 128 characters.");
    return formRunTime();
  }
  //console.log("below is the local")
  //console.log(localRunTime)
  globalRunTime = localRunTime
}
formRunTime()
console.log("below is the global")
console.log(globalRunTime)



//Runtime Logic/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///
console.log("--------------------------------------------------------");
console.log("globalRunTime START");
///


for (let i = 0; i < globalRunTime; i++) {
  var randoms = globalPasswordArray[Math.floor(Math.random() * globalPasswordArray.length)];
  yourPassword = yourPassword.concat(randoms);
}
console.log(yourPassword);
yourPassword.join('');
console.log(yourPassword.join(''));

////need a way to give the joined string to the user....
