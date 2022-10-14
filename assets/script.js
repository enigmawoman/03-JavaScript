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

var charList = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_" ]

if (userOptions.lowerCase){
  var charLower = charList.slice(26,52);
  console.log(charLower);
}

if(userOptions.upperCase) {
  var charUpper = charList.slice(0,26);
  console.log(charUpper);
}

if(userOptions.specialChar){
  var charSpec = charList.slice(62,85);
  console.log(charSpec);
}

if(userOptions.numbers){
  var charNumber = charList.slice(52,62);
  console.log(charNumber);
}


var charList = [charLower + charUpper + charSpec + charNumber];

console.log(charList);

var password = ''
  for (var i=0; i < userOptions.numberOfChars; userOptions.numberOfChars++) {
   password+= charList Math.random()* userOptions.numberOfChars;
}

return(password);

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/* set the array for all the characters - then call out the part of the array for each user option, true or false 
then set a for loop for calling characters from the array to match the length set in the numberOfChars

for (start no; run while until; increase in increments)
for (i=0; i>numberOfChars.length; i++)*/