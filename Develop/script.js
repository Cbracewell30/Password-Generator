// Assignment Code
var generateBtn = document.querySelector("#generate");
var characterLowercase = "abcdefghijklmnopqrstuvwxyz";
var characterUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacters = "!@#$%^&*()+=*?<>,."
var numericCharacters = "123456789"
var characterLength = 0123456789;

// welcoming window alert with criteria
window.alert('Welcome to the password generator! Passwords must include at least one set or characters and must be between 8-128 characters.');


// lower case window prompt
function lowerftn () {
  var lowerCasePrompt = window.prompt('Characters: Would you like include lowercase lettering? Answer: Yes or No');
  if (lowerCasePrompt === "Yes" || lowerCasePrompt === "No" ){
    specialftn();
  }
  else {
    window.alert("Please enter a valid choice");
    return lowerftn();
  }
};

// special character prompt
function specialftn (){
  var specialCharacterPrompt = window.prompt('Characters: Would you like to include special characters? Answer: Yes or No');
  if (specialCharacterPrompt === "Yes" || specialCharacterPrompt === "No") {
    lenghtftn ();
  }
  else {
    window.alert("Please enter a valid choice");
    return specialftn ();
  }
};

// character length function
function lenghtftn(){
  var characterLengthPrompt = window.prompt('How many charcters would you like your password to be? Answer: 8-129 characters');
  if (characterLengthPrompt <= 128 || characterLengthPrompt >= 8){
  }
  else {
    window.alert("Please enter a valid choice");
    return lenghtftn();
  }
};

//numeric prompt function
function numericftn (){
  var numericCharactersPrompt = window.prompt("Would you like to include numerc vales? Answer: Yes or No");
if(numericCharactersPrompt == "Yes" || numericCharacters === "No") {

}
else {
  window.alert("Please enter a valid choice");
    return numericftn();
}
};


// Write password to the #password input
function writePassword() {
  var upperCasePrompt = window.prompt('Characters: Would you like to include UPPERCASE lettering? Answer: Yes or No');
 // var password = generatePassword();
  //var passwordText = document.querySelector("#password");

 // passwordText.value = password;
if (upperCasePrompt === "Yes" || upperCasePrompt === "No") {
  lowerftn();
}
else {
    window.alert("Please enter a valid choice");
    return writePassword();
}
 };

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

 
// //for(var i = 0; i <= characterLength; i++) {
//  // var random = math.floor(math.random() *c)
// //}
