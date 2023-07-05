// Assignment Code
var generateBtn = document.getElementById("generate");
var textarea = document.getElementById("password");


function generatePassword(length) {
  let generatePassword = ''
  for (let i = 0; i < 5; i++) {
    generatePassword += Math.random().toString(36).slice(-8)
}
console.log(generatePassword)
return textarea.value = generatePassword
}

// Write password to the #password input
/*function writePassword() {
  var password = generatePassword(length);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log("Hey! You clicked the button!")
}*/

// Add event listener to generate button
generateBtn.addEventListener('click',generatePassword);