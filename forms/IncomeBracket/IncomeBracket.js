/* ** Comment out the code in the previous forms or it will interfere with this form. 
Scenario: Using Bootstrap4 Controls and Events - NO alerts, prompts, confirms, console.logs - create 
a program that tells the user which tax bracket an income is in. The program must let the user run it until 
they don't want to run it again. 

The tax brackets are:      

 income less than $30000, tax bracket is 8%
 income less than $99999, tax bracket is 15%
 income equal to or above $99999, tax bracket is 25%

Requirements: 

Name all controls appropriately like we did in class. 
Use the format below for output and use a template literal:
eg. Say the user input:  100000. The output would be:
             "With your income of $100000, you are in a tax bracket of 25%"
Use at least one if/else statement.

let i = 0
for (i; i < 10; i++) {
alert("Welcome to the tax bracket calculator.");
let inputIncome = Number(prompt("Please enter your yearly income (without a $ sign)."));
  if (inputIncome < 30000) {
    alert(`With your income of $${inputIncome}, you are in a tax bracket of 8%.`);

    let exitCommand = prompt("Thank you for using our calculator. Please enter 'exit' if you wish to leave.");
        if (exitCommand == "exit") {
        break; }

  } else if (inputIncome > 99999) {
    alert(`With your income of $${inputIncome}, you are in a tax bracket of 25%.`);
     
    let exitCommand2 = prompt("Thank you for using our calculator. Please enter 'exit' if you wish to leave.");
        if (exitCommand2 == "exit") {
        break; }
    
    } else {
      alert(`With your income of $${inputIncome}, you are in a tax bracket of 15%.`);
      
      let exitCommand3 = prompt("Thank you for using our calculator. Please enter 'exit' if you wish to leave.");
        if (exitCommand3 == "exit") {
        break; }
    }};
    
alert("Thank you for using the tax bracket calculator.");



num 1 = "";
num 2 = "";

btnAdd.onclick = function addBy(){
    num1 = Number(inptFirstNumber);
    num2 = Number(inptSecondNumber);
    lblAnswer.value = (num1 + num2);
}

btnMultiply.onclick = function multipleBy(){
    num1 = Number(inptFirstNumber);
    num2 = Number(inptSecondNumber);
    lblAnswer.value = (num1 * num2);
}

btnReset.onclick = function reset(){
    num1 = "";
    num2 = "";
    lblAnswer.value = "";
}
*/
