// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword() {
  
  var userOptions = {
    numberOfChars: 0,
    lowerCase: false,
    upperCase: false,
    specialChar: false,
    numbers: false
  }

  var passwordLength = window.prompt("how long would you like your password to be?");
  if (isNaN (passwordLength)) {
    window.alert("you must enter a valid number");
    return;
  }
   else if (passwordLength<8 || passwordLength>128) { 
   window.alert("you must choose a password length between 8 - 128 characters");
    return;
   }
  userOptions.numberOfChars = passwordLength

  userOptions.lowerCase = window.confirm("Would you like to include lower case characters?");
  userOptions.upperCase = window.confirm("Would you like to include UPPER case characters?");
  userOptions.specialChar = window.confirm("Would you like to include special characters?");
  userOptions.numbers = window.confirm("Would you like to include numbers?");

const charLower = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const charUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const charSpec = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"];
const charNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var charList = [];

//console.log(charList);

if (userOptions.lowerCase){
   // var charList = charList.concat(charLower);
   charLower.forEach(element => charList.push(element));
  //charList.push(charLower);
  console.log(charList);
}


if(userOptions.upperCase) {
    //charlist = charList.concat(charUpper);
    charUpper.forEach(element => charList.push(element));
    //charList.push(charUpper);
  console.log(charList);
}


if(userOptions.specialChar){
    //charlist = charList.concat(charSpec);
    charSpec.forEach(element => charList.push(element));
   // charList.push(charSpec);
  console.log(charList);
}

if(userOptions.numbers){
    //charlist = charList.concat(charNumber);
    charNumber.forEach(element => charList.push(element));
   // charList.push(charNumber);
  console.log(charList);
}


  var passwordMake = []
  for (var i=0; i < userOptions.numberOfChars; i++) {
   //create an index that represents a random number against our character array
   var randomIndex = Math.floor(Math.random() * charList.length);
   //console.log(charList[randomIndex]);
   // use the random index to ref back to the index position of charchters in the char list
   
   passwordMake.push(charList[randomIndex]);
   
  }
//use the join method to turn the password from an array into a string
 return(passwordMake.join(''));

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/* set the array for all the characters - then call out the part of the array for each user option, true or false 
then set a for loop for calling characters from the array to match the length set in the numberOfChars

for (start no; run while until; increase in increments)
for (i=0; i>numberOfChars.length; i++)*/