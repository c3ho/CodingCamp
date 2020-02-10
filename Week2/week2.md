Last week we went over functions and variables, we will build upon that a little more this class with the introduction of parameters

Functions are written as:
```
function functionName() {
    code here
}
```
What goes inside the two parentheses? We call them parameters.

Best way to think of computer programs is, you give it an input, it gives you an output. Parameters are a way of providing input to a set of instructions.
Recall last week's code:
```
function sayHi() {
    let name = "put your name in here" <--- replace this line with your name, for example "Bob"
    console.log("Hi, my name is " + name);
}
```
this code isn't that great actually, because if I wanted to change name, I'd have to actually change the code directly. As a programmer we are looking for ways to be more efficient. Imagine if I were a teacher of a class of 30 students and I had to write a program to output every student's name? I'd have to change the following code 29 times:

    let name = "put your name in here" <--- replace this line with your name, for example "Bob"

instead, let us make this code a bit more reusable by doing the following
```
function sayHi(studentName) {
    let name = studentName;
    console.log("Hi, my name is " + name);
}

sayHi("change student name here"); <-- Input whatever the student name is here
```
The above allows me to change the name of the student now without actually having to change the code inside the function sayHi now. If I wanted it to say "Hi my name is Bobby", I type
`sayHi("Bobby")`

or Bob
`sayHi("Bob")`


Let us dive into the changes to the code and take a look at what parameters actually do:

instead of assigning a name directly, we are now saying, use whatever is provided to the function in the last line

`sayHi("Joe");`

In this case I am passing the value "Joe" to the function sayHi

the parameter name studentName in the function sayHi will now have the value of Joe.
We will also declare a variable to hold onto the value of studentName. Notice how the parameter studentName is spelt the same way as the studentName let name = studentName?

if we try the following code:
```
function sayHi(studentName) {
    let name = studentname; <-- Notice the smaller case n in studentname
    console.log("Hi, my name is " + name);
}
```
this will not work, computers are case sensitive, `studentName` and `studentname` are different.
