// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// my code :D

  //Asking how long password should be 
function generatePassword () {
  alert ('Follow these instructions to generate a random password');
var invalid = true;
while (invalid) {
var passwordLength = Number(prompt('How long should your password be?\nMust be longer than 8 characters, and shorter than 128 characters.' ))
if (passwordLength > 7 && passwordLength < 129) {
  invalid = false;
} else if (passwordLength == 0) {
  Windows.close ()
  } else {
    alert ('Invalid, please follow the instructions and try again');
  }
}
  //Asking what characters to add to password
 while (!invalid) {
  var lowerCase = confirm ('Would you like lower case letters in your password?')
  var upperCase = confirm ('Would you like upper case letters in your password?')
  var numbers = confirm ('Would you like numbers in your password?')
  var symbols = confirm ('Would you like special symbols in your password?')
  alert ('You chose: \n lower case letters;' + lowerCase + '\n upper case letters:' + upperCase + '\n numbers:' + numbers + '\n symbols:' + symbols)
  if (lowerCase == true || upperCase == true || numbers == true || symbols == true) {
    invalid = true;
  } else {
    alert('Try again and please choose at least one option')
  }
}
  // variables of usable characters
var numberLetter = '1234567890'
var symbolLetters = '!@#$%^&*-=+?/>,<'
var upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'

if (lowerCase == true){
  lowerCaseLetters
} else {
  lowerCaseLetters = ''
} if (upperCase == true){
  upperCaseLetters
} else {
  upperCaseLetters = ''
} if (numbers == true){
  numberLetter
} else {
  numberLetter = ''
} if (symbols == true){
  symbolLetters
} else {
  symbolLetters = ''
}

var grandString = symbolLetters.concat(lowerCaseLetters, upperCaseLetters, numberLetter);

var randomNumber = ""
for (var i = 0; i < passwordLength; i++) {
  randomNumber += grandString[Math.floor(Math.random() * grandString.length)]
}

return randomNumber;

}