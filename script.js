// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options

// declare a global variable and set it to zero to make sure the length of the password is a number:
var chooseNumber = 0;
// new array to store the user's character choices
var includedCharacters = [];
function getPasswordOptions() {
  // Prompt the user to choose the length of the password:
  
  chooseNumber = prompt("How many characters would you like for your password? Please choose any number between 8 and 128.");
  // If, else to make sure the user chooses a valid length and prompt them to choose character options:
  if(chooseNumber < 8 || chooseNumber > 128 || isNaN(chooseNumber)){
    alert( "Invalid, please enter any number between 8 and 128.");
  } else {
    alert("Your password will be " + chooseNumber + " characters long");
   // using boolean values to confirm what options are selected
  var isSpecial = confirm("Should your password contain special characters?");
    
  var isNumbers = confirm("Should your password contain numbers?");
    
  var isLowercase = confirm("Should your password contain lowercase?");
  
  var isUppercase = confirm("Should your password contain UPPERCASE?")
  // making sure at least one character option is selected
    
    if(isSpecial){
    }else if (isNumbers){
    }else if (isLowercase){
    }else if (isUppercase){
    }else { 
      alert("Please choose at least one of the character options") 

    }
    // add the choices into the new array
    if(isSpecial){
      includedCharacters = includedCharacters.concat(specialCharacters);
    }
    if(isNumbers){
      includedCharacters = includedCharacters.concat(numericCharacters);
    }
    if(isLowercase){
      includedCharacters = includedCharacters.concat(lowerCasedCharacters);
    }
    if(isUppercase){
      includedCharacters = includedCharacters.concat(upperCasedCharacters);
    }
  }
    return includedCharacters;
  
};
getPasswordOptions();

// Function for getting a random element from an array
function getRandom() {
  // declare a variable to sore the user password, use a for loop to make sure the length of the password is the one chosen by the user and to get random characters from: special characters, numeric characters, uppercase, lowercase.
  var userPassword = "";
  for(var i= 0; i < chooseNumber; i++){
    userPassword += includedCharacters[Math.floor(Math.random() * includedCharacters.length)]
  }
  return userPassword;
}

// Function to generate password with user input
function generatePassword() {
var password = getRandom()
return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
