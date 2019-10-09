var animals = ['dog', 'cat', 'horse', 'mouse', 'pig', 'cow', 'ferret', 'lizard', 'frog'];
animals.push(prompt("Please enter the name of an animal"));
var returnArray = animals[animals.length - 1]

alert(`The last animal is ${returnArray}.`);
