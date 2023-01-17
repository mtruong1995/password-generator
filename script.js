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
function getPasswordOptions() {
// number of letters
let length = parseInt(
  prompt("How many characters?")
)


if(isNaN(length) === true){
  alert("Password length must be provided as a number");
  return;
}

if(length < 10) {
  alert("Password must be atleast 10 characters")
  return;
}

if(length > 64) {
  alert("Password must be no more than 64 characters")
  return;
}

let incSpecialChar = confirm(
  "Click OK to conform special character inclusion"
)

let incNumChar = confirm(
  "Click OK to confirm numberic character inclusion"
)

let incLowChar = confirm(
  "Click OK to confirm lower cased character inclusion"
)

let incUppChar = confirm(
  "Click OK to confirm upper cased character inclusion"
)

if(incLowChar === false &&
incUppChar === false &&
incNumChar === false &&
incSpecialChar === false) {
  alert ("Must select atleast one character type")
  return;
}

let passwordOptions = {
  length: length,
  incSpecialChar: incSpecialChar,
  incNumChar: incNumChar,
  incLowChar: incLowChar,
  incUppChar: incUppChar,
}



return passwordOptions;

}


// var specialCharacter = specialCharacters[Math.floor(Math.random()*specialCharacters.length)];


// var numCharacter = numericCharacters[Math.floor(Math.random()*numericCharacters.length)];


// var lowerCase = lowerCasedCharacters[Math.floor(Math.random()*lowerCasedCharacters.length)];


// var upperCase = upperCasedCharacters[Math.floor(Math.random()*upperCasedCharacters.length)];



// Function for getting a random element from an array
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length)
  let randomElement = arr[randomIndex];

  return randomElement;
}

// Function to generate password with user input
function generatePassword() {
  let options = getPasswordOptions()
  console.log(options);
let result = []

let possibleChar = []

let guaranteedChar = []

if(options.incSpecialChar) {
  possibleChar = possibleChar.concat(specialCharacters);
  guaranteedChar.push(getRandom(specialCharacters))

}

if(options.incLowChar) {
  possibleChar = possibleChar.concat(lowerCasedCharacters);
  guaranteedChar.push(getRandom(lowerCasedCharacters))

}

if(options.incUppChar) {
  possibleChar = possibleChar.concat(upperCasedCharacters);
  guaranteedChar.push(getRandom(upperCasedCharacters))

}

if(options.incNumChar) {
  possibleChar = possibleChar.concat(numericCharacters);
  guaranteedChar.push(getRandom(numericCharacters))

}

  for(let index = 0; index < options.length; index++){
    var generated = getRandom(possibleChar);
    console.log(generated);
    result.push(generated);
  }


console.log(result);

return result.join("")

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