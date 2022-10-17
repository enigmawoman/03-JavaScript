// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// this is the function that will run to produce the variablw password inside the function writepassword
function generatePassword() {
  
  // setting out the possible user options in a variable, and setting a baseline for each - so that we can use these options to refer to later on in the code
  var userOptions = {
    numberOfChars: 0,
    lowerCase: false,
    upperCase: false,
    specialChar: false,
    numbers: false
  }
// this variable will propmt the user to input the numbers of characters they would like in the generated password
  var passwordLength = window.prompt("how long would you like your password to be?");
  // if the input is not a number they will be warned and the generate function will end, and the user will need to request another password using the generate password button
  if (isNaN (passwordLength)) {
    window.alert("you must enter a valid number between 8-128");
    return;
  }
  // if the input is not between 8-128 they will be warned and the generate function will end, and the user will need to request another password using the generate password button
   else if (passwordLength<8 || passwordLength>128) { 
   window.alert("you must choose a password length between 8 - 128 characters");
    return;
   }
   //if the input criteria is met, this will log the number of characters requested
  userOptions.numberOfChars = passwordLength

  // the following prompts will ask the user what other charaters they would like to include in the password, selecting ok will trigger a true value and cancel will trigger a false value

  userOptions.lowerCase = window.confirm("Would you like to include lower case characters?");
  userOptions.upperCase = window.confirm("Would you like to include UPPER case characters?");
  userOptions.specialChar = window.confirm("Would you like to include special characters?");
  userOptions.numbers = window.confirm("Would you like to include numbers?");

  // the available charaters for each option are laid out in indiviual arrays
const charLower = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const charUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const charSpec = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"];
const charNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// this is the array that will be built from the 'if' statements below - it will contain all the possible charaters the user has requested and this array will be used to generate the random password from
var charList = [];

// if the user selects to use lower case this statement will execute as the input will be 'true'
if (userOptions.lowerCase){
  // this states that for each element within the array charLower, this will 'push' all the elements from that array into the var charList, for use in the final password generation
   charLower.forEach(element => charList.push(element));
  console.log(charList);
}

// if the user selects to use upper case this statement will execute as the input will be 'true'

if(userOptions.upperCase) {
     // this states that for each element within the array charLower, this will 'push' all the elements from that array into the var charList, for use in the final password generation
    charUpper.forEach(element => charList.push(element));
  console.log(charList);
}

// if the user selects to use specia charaters this statement will execute as the input will be 'true'

if(userOptions.specialChar){
      // this states that for each element within the array charLower, this will 'push' all the elements from that array into the var charList, for use in the final password generation
    charSpec.forEach(element => charList.push(element));
  console.log(charList);
}
// if the user selects to use numbers this statement will execute as the input will be 'true'

if(userOptions.numbers){
      // this states that for each element within the array charLower, this will 'push' all the elements from that array into the var charList, for use in the final password generation
    charNumber.forEach(element => charList.push(element));
  console.log(charList);
}

// this variable contains the for loop and random generator to produce the password
  var passwordMake = []
  // this loop will execute for each character up to the defined password length set by the user
  for (var i=0; i < userOptions.numberOfChars; i++) {
   //creates an index that represents a random number against our character array
   var randomIndex = Math.floor(Math.random() * charList.length);
   

   // use the randomIndex to reference back to the index position of characters in the charList
   passwordMake.push(charList[randomIndex]);
   
  
  }
//use the join method to turn the password from an array into a string
 return(passwordMake.join(''));

}
// password will now be displayed for the user in the window

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


