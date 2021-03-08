// Assignment Code
var generateBtn = document.querySelector("#generate");
//Array of characters
var upperCase=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];
var lowerCase=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numeric=["1","2","3","4","5","6","7","8","9","0"];
var specialCharacters=["!","@","#","$","%","^","&","*","(",")","_","-","=","+","[","{","}","]","|"];
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//declare variables
var passwordLength;
var confirmLowerCase;
var confirmUpperCase;
var confirmNUmeric;
var confirmSpecialCharacters;
var option;
var emptyPassword = [];
//generate password
function generatePassword() {
  //ask the user for his/her input 
  passwordLength=prompt("Number of characters in the password?");
  console.log("Password Length" + passwordLength);

  if(!passwordLength) {
    alert("expected value");
  
  }
  else if(passwordLength < 8 || passwordLength >128 ){
    passwordLength=prompt("choose between 8 and 128");
    console.log("Password length" + passwordLength);
  
  }
  else{
    confirmLowerCase=confirm("Are there lower case letters?");
    console.log("lower case" + confirmLowerCase);
    confirmUpperCase=confirm("Are there upper case letters?");
    console.log("upper case" + confirmUpperCase);
    confirmNUmeric=confirm("Are there Numbers?");
    console.log("Number" + confirmNUmeric);
    confirmSpecialCharacters=confirm("Are they special characters?");
    console.log("special characters" + confirmSpecialCharacters);
  };
  if(!confirmLowerCase && !confirmUpperCase && !confirmSpecialCharacters){
    option=alert("choose a criteria");
  }
  else if(confirmLowerCase && confirmUpperCase && confirmNUmeric && confirmSpecialCharacters){
    option = lowerCase.concat(upperCase,numeric,specialCharacters);
    console.log(option);
  }
  else if(confirmLowerCase && confirmUpperCase && confirmSpecialCharacters){
    option = lowerCase.concat(upperCase,numeric);
    console.log(option);
  }
  else if(confirmLowerCase && confirmUpperCase && confirmSpecialCharacters){
    option = lowerCase.concat(upperCase,specialCharacters);
    console.log(option);
  }
  else if(confirmUpperCase && confirmNUmeric && confirmSpecialCharacters){
    option = upperCase.concat(numeric,specialCharacters);
    console.log(option)
  }
  else if (confirmLowerCase && confirmUpperCase){
    option = lowerCase.concat(upperCase);
    console.log(option);
  }
  else if(confirmLowerCase && confirmNUmeric){
    option=lowerCase.concat(numeric);
    console.log(option);
  }
  else if(confirmLowerCase && confirmSpecialCharacters){
    option=lowerCase.concat(specialCharacters);
    console.log(option);
  }
  else if(confirmUpperCase && confirmNUmeric){
    option=upperCase.concat(numeric);
    console.log(option);
  }
  else if(confirmUpperCase && confirmSpecialCharacters){
    option=upperCase.concat(option);
    console.log(option);
  }
  else if(confirmNUmeric && confirmSpecialCharacters){
    option=numeric.concat(option);
    console.log(option);
  }
  else if(confirmUpperCase){
    option=upperCase.concat(upperCase);
    console.log(option);
  }
  else if(confirmLowerCase){
    option = lowerCase;
    console.log(option);
  }
  else if(confirmNUmeric){
    option = numeric;
    console.log(option);
  }
  else if(confirmSpecialCharacters){
    option = specialCharacters;
    console.log(option);
  };
  // for loop for random selection 
  for (var i = 0; i < passwordLength; i++){
    var usersoptions = option[Math.floor(Math.random() * option.length)];
    emptyPassword.push(usersoptions);
    console.log(usersoptions);
  }
  var password = emptyPassword.join("");
  console.log("Your password is: " + password);
  return password;
  
}
