function calculator(operation, num1, num2) {
  if (operation == "+") {
    console.log(num1 + num2);
  }
  else if (operation == "-") {
    console.log(num1 - num2);
  }
  else if (operation == "/") {
    console.log(num1 / num2);
  }
  else if (operation == "*") {
    console.log(num1 * num2);
  }
}

calculator("*", 4, 5);
