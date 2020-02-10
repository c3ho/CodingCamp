In Javascript a function is like a set of instructions to carry out. They're written in the following format:

function functionName() {  
    Code goes in here  
}  

For example let us say we have a function called brushTeeth, what would the code kind of look like?
```
function brushTeeth() {  
    Code to grab toothbrush  
    Code to code to put toothpaste on toothbrush  
    Code to actually brush teeth  
    Code to rinse mouth  
}
```
Keep in mind computers are extremely stupid, they do whatever they are told to do and nothing more. They are unable to think for themselves, for example if you forget to provide the code to rinse mouth in the brushTeeth function, the computer will only do the first three steps.

Remember, the function is like a set of instructions. To actually carry out the instructions, we have to call the function:
```
function brushTeeth() {  
    Code to grab toothbrush  
    Code to code to put toothpaste on toothbrush  
    Code to actually brush teeth  
    Code to rinse mouth  
}

brushTeeth() <-- I am calling the function here
```
Notice how the function name and it being called are the exact same.

Let us start with a simple example to have the computer introduce ourselves.
```
function sayHi() {  
    let name = "put your name in here" <--- replace this line with your name, for example "Bob"  
    console.log("Hi, my name is " + name);  
}  
```
This is a lot of stuff to take in, let us break this up line by line

`function sayHi() {` 

this is how we declare a function

    let name = "put your name in here" <--- replace this line with your name, for example "Bob"

we're going to assign your name to the variable name so whenever we use name it will be the value you're providing it here

    console.log("Hi, my name is " + name);

`console.log` is how we get the computer to output whatever is within the parentheses. For example `console.log("Hi")` will output Hi
Use quotations when outputting text, don't use quotations when trying to output a variable. If I typed `console.log("name")`, it will output name,
whereas if I typed `console.log(name)`, it will output "Bob"

`}`

We need this curly brace to match with the first one we had at the function name part.

In programming, curly braces can be thought of as boundaries, we always need boundaries. In our above example
```
function sayHi() {  
    let name = "put your name in here" <--- replace this line with your name, for example "Bob"  
    console.log("Hi, my name is " + name);  
}  
```
the curly braces can be thought of as, all the code in here belongs to the instruction sayHi. The computer will complain if you forget either or both of the curly braces.
