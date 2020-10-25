let number = prompt(
  "Hi, friend! \nEnter a number N, greater than 1, \nand the function returns the sum of all integers from 1 to N inclusive."
);
if (number) {
  alert("The sum is " + cycle(number) + ".");
} else {
  alert("You didn`t not enter number N");
}
function cycle(number) {
  let x = 0;
  for (let i = 1; i <= number; i++) {
    x += i;
  }
  return x;
}
