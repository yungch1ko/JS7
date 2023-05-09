function checkNumbers(num1, num2) {
  if (num1 === 20 || num2 === 20 || num1 + num2 <= 20) {
    return true;
  } else {
    return false;
  }
 
  console.log(checkNumbers(10, 20)); // Output: true
  console.log(checkNumbers(5, 7)); // Output: false
  console.log(checkNumbers(20, 0)); // Output: true

}

