This week we will expand a bit more on last week's lesson of using parameters and make a program that imitates a calculator.
The final program for this lesson is displayed in `calculator.js` file within the Week3 folder.

Before making the program let us think about how a calculator works.
1. It takes one number  
2. It takes an operator(+ , / , - , * )  
3. It takes another number  
4. It provides an output after performing the operation on both numbers

So this means we need three parameters right? one for the first number, one for the second number and one for the operator,

Let us write the first line of the function: 

`function calculator(firstNumber, secondNumber, operator) {`

Now before we continue we are going to talk about conditions. `if` statements allow us to execute only if the condition is fulfilled, an if statement is written the following way
```
if (condition) {
 // execute code here
}
```
For example, I have the following function
```
function testIf(number) {
  if (number > 4) {
    console.log("The number you provided is greater than 4");
  }
}
testIf(5)
```
The above function will check if the number you're passing into the parameter of the `testIf()` function is greater than 4. If it is, it will display the message `The number you provided is greater than 4`. 

The other half of `if` statements are `else` statements we can optionally include. If `if` statments are code we execute only if the condition is fulfilled, `else` statements are code we execute only if the condition is not fulfilled
```
function testIf(number) {
  if (number > 4) {
    console.log("The number you provided is greater than 4");
  } else {
    console.log("The number you provided is less than 4");
  }
}
testIf(3);
```
Notice how there is no condition in the else statment? Recall we don't need one because if the `if` condition is not triggered, we'll automatically execute whatever is inside `else` instead.

We can also write several `if` statments together like the following
```
function testIf(number) {
  if (number > 4) {
    console.log("The number you provided is greater than 4");
  }
  if (number > 8) {
    console.log("The number you provided is greater than 8");
  }
}
testIf(9)
```  
Running the above example will actually display two messages
`The number you provided is greater than 4` AND `The number you provided is greater than 8`. The program will evaluate each `if` statement from top to bottom, it will first check `is 9 > 4?`. Yes it is, so it will print the first message, then it will check `is 9 > 8?`. Yes, it also is, so it will print the next message as well.

We can also use if statements inside one another like the following
```
function nestedIf(number) {
  if (number > 4) {
    if (number > 10) {
      console.log("The number you provided is greater than 10");
    } else {
      console.log("The number you provided is less than 10 but greater than 4");
    }
  } else {
    console.log("The number you provided is less than 4");
  }
}
nestedIf(11)
```
The above is called a nested if statement, another if statement within an if statement.  

Wow, that's a lot of code above. So what do you think the above example will do?  

First we will check if the number provided to the function is greater than 4. If it is, we will then check the condition inside to see if it is also greater than 10, if it is, we will output the message `The number you provided is greater than 10`. Unlike the `testIf` example though, we will only print one message instead of both `The number you provided is greater than 10` and `The number you provided is less than 10 but greater than 4`

However, if it is less than 10, we will output the message `The number you provided is less than 10 but greater than 4`. Keep in mind when you try to understand this code, we are going inside the code within the first if statement if the number is greater than 4, so we check the next if statement which is `number > 10`? If it isn't, we're executing the else statement.

Best way to look at this would be to break it off so that it looks like the following:
```
if (number > 10) {
      console.log("The number you provided is greater than 10");
    } else {
      console.log("The number you provided is less than 10 but greater than 4");
    }
}
```

```
if (number > 4) {
  // execute the other if statement
} else {
  console.log("The number you provided is less than 4)
}
```

So how do we print the message `The number you provided is less than 4`? When we provide a number that is less than 4, as it will check if `number > 4` its not so we're going to skip whatever code is in there and go to the  last `else` statement.  

This is when it becomes extremely important to understand the use of curly brackets { } and indenting. These help make it much easier to read the code and understand what is going on, as well as where each `if` statement belongs

Notice how in the last example I wrote code like the following?
```
function exampleIf() {
  if (condition1) {
    if (condition2) {
     // execute if code
    } else {
     // execute else code for condition2
    }
  } else {
    // execute else code for condition1
  }
}
```
If we are writing `if` statements inside another `if`, we usually add two more spaces or a tab for the subsequent `if` statement
so
```
if (condition1) {
  if (condition2) {
  }
}
```

ONLY do this if we're doing an if statement within another if, don't do this if we're using separate if statements!
Example 1
```
if (condition1) {
  if (condition2) {
  }
}
```
is not the same as
Example 2
```
if (condition1) {
}
if (condition2) {
}
```

In `Example 1` we only check condition2 IF condition1 is true. In `Example 2` we will check condition1 and then check condition2
