//1. creating the arrays of lower, upper, nums, special, empty masterarray
var lowerArray = ["a", "b", "c"];
var upperArray = ["A", "B", "C"];
var numsArray = ["1", "2", "3"];
var specialCharacter = ["@", "%", "*"];
var masterArray = [];

console.log(lowerArray);
console.log(upperArray);
console.log(numsArray);
console.log(specialCharacter);
console.log(masterArray);

// WHEN I click the button to generate a password
//  prompts for password criteria:
var lowerArray = prompt("Do you want lower case letters in your password?");

var upperArray = prompt("Do you want upper case letters in your password?");
var numsArray = prompt("Do you want numbers in your password?");
var specialCharacter = prompt(
  "Do you want special characters in your password?"
);

//prompt  length of the password
// at least 8 characters and no more than 128 characters
var userLength = prompt(
  "How long do you want your password? Must be between 8 and 128 characters."
);
// prompt lowercase, //boolean
var userLower = confirm("Do you want lower case?");
if (userLower === true) {
  masterArray.push(userLower);
  // for (var i = 0; i > lowerArray.length; i++) {
  // masterarray.push(lowerArray[i]);
  // }
}
//prompt uppercase, //boolean
var userUpper = confirm("Do you want upper case?");
if (userUpper === true) {
  masterArray.push(userUpper);
  // for (var i = 0; i < upperArray.length; i++) {
  //   masterArray.push(upperArray[i]);
  // }
}
//prompt numeric,   //boolean
var userNumbers = confirm("Do you want any numbers?");
if (userNumbers === true) {
  masterArray.push(userNumbers);
}
//prompt for special characters  //boolean
var userSpecialC = confirm("Do you want special characters?");
if (userSpecialC === true) {
  masterArray.push(userSpecialC);
}
// WHEN I answer each prompt
//2. check each boolean variable and if there is a match push the data to
//the masterarray

//(later after I finish and get stuff working the i can work on this exception rule) THEN my input should be validated and at least one character type should be selected
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
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword)
