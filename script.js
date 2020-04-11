//1. creating the arrays of lower, upper, nums, special, empty masterarray
var lowerArray = "aqwertyuiopsdfghjklzxcvbnm";
var upperArray = "QWERTYUIOPASDFGHJKLZXCVBNM";
var numsArray = "0123456789";
var specialCharacter = ["@#!$%^&*"];
var masterArray = [];

console.log("Lower Array " + lowerArray);
console.log("Upper Array " + upperArray);
console.log("Numbers Array " + numsArray);
console.log("Special Characters " + specialCharacter);
console.log("Master Array " + masterArray);

//function to prompt user for password options

//variable to store length of password from user input with while loop
var lengthSelected;
var userLength;

function userPrompts() {
  lengthSelected = true;
  while (lengthSelected) {
    userLength = prompt(
      "How long do you want your password? Must be between 8 and 128 characters."
    );
    if (userLength > 129 || userLength < 8 || isNaN(userLength)) {
      alert("Please enter valid input.");
    } else {
      lengthSelected = false;
    }
  }
  console.log("User input length: " + userLength);

  // WHEN I click the button to generate a password
  //  prompts for password criteria:
  masterArray = [];

  var userLower = confirm("Do you want lower case letters in your password?");
  var userUpper = confirm("Do you want upper case letters in your password?");
  var userNumbers = confirm("Do you want numbers in your password?");
  var userSpecialC = confirm(
    "Do you want special characters in your password?"
  );

  console.log("User input lowercase: " + userLower);
  console.log("User input uppercase: " + userUpper);
  console.log("User input numbers: " + userNumbers);
  console.log("User input special characters: " + userSpecialC);

  //prompt  length of the password
  // at least 8 characters and no more than 128 characters

  console.log("User input for password length: " + userLength);
  // }

  // function generateInput() {
  if (userLower === true) {
    masterArray.push(lowerArray);
  }
  //prompt uppercase, //boolean
  if (userUpper === true) {
    masterArray.push(upperArray);
  }
  //prompt numeric,   //boolean
  if (userNumbers === true) {
    masterArray.push(numsArray);
  }
  //prompt for special characters  //boolean
  if (userSpecialC === true) {
    masterArray.push(specialCharacter);
  }
  masterArray = masterArray.join("");

  generatePassword(masterArray, userLength);
}

// IF ALL 4 VALUES ARE FALSE

// while (noCriteria) {
//   if (
//     userLower === false &&
//     userUpper === false &&
//     userNumbers === false &&
//     userSpecialC === false
//   ) {
//     alert("Please choose at least one set of criteria.");
//   }
// }

// generating password

var newPassword = [];

function generatePassword() {
  var lengthMasterArray = masterArray.length;
  console.log(lengthMasterArray);
  var index;

  //generate the random
  for (i = 0; i < userLength; i++) {
    index = Math.floor(Math.random() * lengthMasterArray);
    console.log("index " + index);
    console.log("value " + masterArray[index]);

    newPassword[i] = masterArray[index];
    console.log("Random password " + newPassword);

    writePassword(newPassword.join(""));
  }
  return newPassword.join("");
}

// // Assignment Code
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
function writePassword(password) {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// // Add event listener to generate button
generateBtn.addEventListener("click", userPrompts);
