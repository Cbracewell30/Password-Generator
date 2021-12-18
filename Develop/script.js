// Assignment Code
var generateBtn = document.querySelector("#generate");
var characterLowercase = "abcdefghijklmnopqrstuvwxyz";
var characterUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacters = "!@#$%^&*()+=*?<>,.";
var numericCharacters = "123456789";



// welcoming window alert with criteria
window.alert("Welcome to Chris' password generator!");









// character lengthftn function
function lengthftn() {
  var characterLengthPrompt = parseInt(window.prompt('How many charcters would you like your password to be? Must be between 8-128 characters'))
  if (Number.isNaN(characterLengthPrompt)) {
    window.alert("Please enter a valid choice");
    return "Please enter a valid choice"
  }
  if (characterLengthPrompt < 8) {
    alert('Please enter a valid choice. Password lengthftn has to bee at lease 8 characters');
    return 'Please enter a valid choice. Password lengthftn has to bee at lease 8 characters'
  }
  if (characterLengthPrompt > 128) {
    alert('Please enter a valid choice. Password lengthftn has to bee at lease 128 characters');
    return 'Please enter a valid choice. Password lengthftn has to bee at lease 128 characters'
  }
  var upperCaseConfirm = window.confirm('Characters: Would you like to include UPPERCASE lettering?');
  var userResponse = ""
  if (upperCaseConfirm) {
   userResponse += characterUpperCase
  }
  // lower case window confirm
  var lowerCaseComfirm = window.confirm('Characters: Would you like include lowercase lettering?');

  if (lowerCaseComfirm) {
  userResponse += characterLowercase
  }
  // special character confirm
  var specialCharacterConfirm = window.confirm('Characters: Would you like to include special characters?');
  if (specialCharacterConfirm) {
    userResponse += specialCharacters
  }
  //numeric prompt function
  var numericCharactersConfirm = window.confirm('Would you like to include numerc vales?');
  if (numericCharactersConfirm) {
    userResponse += numericCharacters
  };

  



// Write password to the #password input
function writePassword() {


  var password = lengthftn();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// // //for(var i = 0; i <= characterLength; i++) {
// //  // var random = math.floor(math.random() *c)
// // //}
