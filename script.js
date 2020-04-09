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

// function getPasswordOptions();

//variable to store length of password from user input with while loop
var lengthSelected = true;
var userLength;

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
var userLower = confirm("Do you want lower case letters in your password?");
var userUpper = confirm("Do you want upper case letters in your password?");
var userNumbers = confirm("Do you want numbers in your password?");
var userSpecialC = confirm("Do you want special characters in your password?");

console.log("User input lowercase: " + userLower);
console.log("User input uppercase: " + userUpper);
console.log("User input numbers: " + userNumbers);
console.log("User input special characters: " + userSpecialC);

//prompt  length of the password
// at least 8 characters and no more than 128 characters

console.log("User input for password length: " + userLength);

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

// IF ALL 4 VALUES ARE FALSE

// if (
//   userLower === false &&
//   userUpper === false &&
//   userNumbers === false &&
//   userSpecialC === false
// ) {
// }

// generating password

function generatePassword() {
  var lengthMasterArray = masterArray.length;
  console.log(lengthMasterArray);
  var index;
  var newPassword = [];

  //generate the random
  for (i = 0; i < userLength; i++) {
    index = Math.floor(Math.random() * lengthMasterArray);
    console.log("index " + index);
    console.log("value " + masterArray[index]);

    newPassword[i] = masterArray[index];
    console.log("Random password " + newPassword);
  }
  return newPassword.join("");
}

// THEN a password is generated that matches the selected criteria

//3. WHEN the password is generated (creat userpassword)
//run a forloop based on userinputlength (parseInt())
// userpassword+=masterArray[Math.random(0+masterArray.length-1)]
//call randomly data based on the length
// THEN the password is either displayed in an alert or written to the page

// Assignment Code
// var generateBtn = document.querySelector("#generate");
// Write password to the #password input
// function writePassword() {
//clear out master array to create unique masterarray for each new click
// masterarray = [];
//prompt  length of the password
//(later validate) 8 characters and no more than 128 characters
// var userlength = prompt("How long?");
// prompt lowercase, //boolean
// var userlower = confirm("use lower case?");
//prompt uppercase, //boolean
// var userupper = confirm("use upper case?");
// if (userlower == true) {
// masterarray.push(lowerarray);
// for(var i=0;i<lowerarray.length;i++){
//   masterarray.push(lowerarray[i]);
// }
// }
// if (userupper) {
//   masterarray.push(upperarray);
// for(var i=0;i<upperarray.length;i++){
//   masterarray.push(upperarray[i]);
// }
// }
// console.log(masterarray);
//3. WHEN the password is generated (creat userpassword)
//run a forloop based on userinputlength (parseInt())
// userpassword+=masterArray[Math.random(0+masterArray.length-1)]
//   var userpassword = "";
//   console.log(masterarray.length);
//   for (var x = 0; x < parseInt(userlength); x++) {
//     //this is validation to make sure user in getting specifics for each special
//     if (x < masterarray.length) {
//       console.log(masterarray[x]);
//     }
//     userpassword += "a";
//   }
//   console.log(userpassword);
//   // var password = generatePassword();
//   // var passwordText = document.querySelector("#password");
//   // passwordText.value = password;
// }
// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// // Assignment Code
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
