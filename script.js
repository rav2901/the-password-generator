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
function getPasswordOptions() {
  // Prompt the user to choose the length:
  
  chooseNumber = prompt("How many characters would you like for your password? Please choose any number between 8 and 128.");
  // If, else to make sure the user chooses a valid length:
  
  if(chooseNumber < 8 || chooseNumber > 128 || isNaN(chooseNumber)){
    alert( "Invalid, please enter any number between 8 and 128.");
  } else {
    alert("Your password will be " + chooseNumber + " characters long");
  specialCharacters = confirm("Should your password contain special characters?");
  numericCharacters = confirm("Should your password contain numbers?");
  lowerCasedCharacters = confirm("Should your password contain lowercase?");
  upperCasedCharacters = confirm("Should your password contain UPPERCASE?");
  if(specialCharacters || numericCharacters || lowerCasedCharacters || upperCasedCharacters){
    alert("Great! Let's generate the password");
  }else{
    alert("You must choose at least one of the options: special characters, numbers, lowercase, uppercase");
  }
}

}
getPasswordOptions();
// Function for getting a random element from an array
function getRandom(arr) {
}

// Function to generate password with user input
function generatePassword() {

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
