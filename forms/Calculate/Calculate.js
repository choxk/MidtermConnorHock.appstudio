let num1 = Number(prompt("Enter your first number."));
let num2 = Number(prompt("Enter your second number."));
let num3 = Number(prompt("Enter your second number."));

function calcAvgSquare(num1, num2, num3) {
      let myAnswer = ((((num1 + num2 + num3)/3) * Math.pow(num1, 2)));
      return myAnswer;
}

let finalAnswer = calcAvgSquare(num1, num2, num3);
alert(`The answer using ${num1}, ${num2} and ${num3} is ${finalAnswer}.`);