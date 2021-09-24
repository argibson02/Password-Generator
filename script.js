// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ",", ".", "/", ":", "<", "=", ">", "?", "@", "[", "\"", "\'", "]", "^", "_", "`", "{", "|", "}", "~", ";", "\\"];
var yourPasswordString = "" 
var globalPasswordArray = [];

///WHY DONT THESE GLOBALS WORK????-------------------------------------



function generatePassword() {
 /////Global Character Arrays////
  var yourPassword = [];
  //var globalPasswordArray = [];
  var globalRunTime = 0;

  ////Forming globalPasswordArray Logic////
  console.log("--------------------------------------------------------");     //DELETE THIS LINE UPON COMPLETION//
  console.log("formPassArray START");     //DELETE THIS LINE UPON COMPLETION//

  
  function formPassArray() {
    //Character Arrays//   
    //var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    //var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    //var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    //var special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ",", ".", "/", ":", "<", "=", ">", "?", "@", "[", "\"", "\'", "]", "^", "_", "`", "{", "|", "}", "~", ";", "\\"];
    var localPasswordArray = [];
    
    //UPPERCASE//
    var haveUpper = confirm("Would you like your password to include uppercase letters? Select 'OK' for yes and 'Cancel' for no."); {
      if (haveUpper === true) {
        var localPasswordArray = localPasswordArray.concat(uppercase);
      }
    }
    
    //LOWERCASE//
    var haveLower = confirm("Would you like your password to include lowercase letters? Select 'OK' for yes and 'Cancel' for no."); {
      if (haveLower === true) {
        var localPasswordArray = localPasswordArray.concat(lowercase);
      }
    }
    
    //NUMBER//
    var haveNumber = confirm("Would you like your password to include numbers?  Select 'OK' for yes and 'Cancel' for no."); {
      if (haveNumber === true) {
        var localPasswordArray = localPasswordArray.concat(numbers);
      }
    }
    
    //SPECIAL CHARACTER//
    var haveSpecial = confirm("Would you like your password to include special characters? Select 'OK' for yes and 'Cancel' for no."); {
      if (haveSpecial === true) {
        var localPasswordArray = localPasswordArray.concat(special);
      }
    }
    
    //IF NONE SELECTED//
    if (haveUpper !== true && haveLower !== true  && haveNumber !== true  && haveSpecial !== true ) {
      alert("You must select at least one option!");
      return formPassArray();
    }
      globalPasswordArray = localPasswordArray;   //IS THIS IS THE PROPER WAY TO GET A VALUE COMPUTED BY A FUNCTION VALUE TO BE USED OUTSIDE OF THE FUNCTION? ---------------------------------
  }
  formPassArray();
  console.log(globalPasswordArray);     //DELETE THIS LINE UPON COMPLETION//
  

  ////Runtime Logic////
  console.log("--------------------------------------------------------");   //DELETE THIS LINE UPON COMPLETION//
  console.log("formRunTime START");    //DELETE THIS LINE UPON COMPLETION//
  

  function formRunTime() {
    var localRunTime = prompt("Please choose the length of your password. The length must be between 8 and 128 characters."); 
    var localRunTime = parseInt(localRunTime)
      ////Need to make error for inputting letter characters//////
    if (isNaN(localRunTime)) {  ///HOW TO USE TYPEOF AS ENFORCEMENT???? PROMPT TAKES IN THINGS AS A STRING. ------------------ currently using parseInt and comparing with Nan
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
    globalRunTime = localRunTime
  }
  formRunTime()
  console.log(globalRunTime)   //DELETE THIS LINE UPON COMPLETION//
  

  ////Randomize Logic////
  console.log("--------------------------------------------------------");  //DELETE THIS LINE UPON COMPLETION//
  console.log("globalRunTime START");   //DELETE THIS LINE UPON COMPLETION//

  
  for (let i = 0; i < globalRunTime; i++) {
    var randoms = globalPasswordArray[Math.floor(Math.random() * globalPasswordArray.length)];   ////IS IT BETTER TO PUT FOR LOOPS INSIDE OF FUNCTIONS?--------------------------
    yourPassword = yourPassword.concat(randoms);
  }
  console.log(yourPassword);  //DELETE THIS LINE UPON COMPLETION//
  console.log(yourPassword.join(''));   //DELETE THIS LINE UPON COMPLETION//
  yourPasswordString = yourPassword.join('');
  return yourPasswordString
}



/*
// Write password to the #password input
function writePassword() {
  generatePassword();
  var password = yourPasswordString; /// why is generate password not returning a what is is the function?
  console.log("------password log below---------------");//  //DELETE THIS LINE UPON COMPLETION//
  console.log(password);//  //DELETE THIS LINE UPON COMPLETION//
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
*/



// Write password to the #password input
function writePassword() {
  var password = generatePassword(); /// why is generate password not returning a what is is the function?
  console.log("------password log below---------------");//
  console.log(password);//
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

