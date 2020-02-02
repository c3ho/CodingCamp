This week we're learning about variables and data types
Data Types
In the world of programming we have four general types of Data

String - this type usually refers to a string. Easiest way to identify this type is the use of quotations, for example "word" is a type String

Integer - this type refers to a number. Easiest way to identify this type is the use of... well a number, for example 13 is a type Integer

Double - this type refers to a number. The difference between this type and Integer is a decimal, for example 14.4 is a type Double

Boolean - In programming, computers are a series of 0 and 1. 0 for representing false and 1 for true. Type boolean can only be one of two values, either true or false

Variables in programming acts as a placeholder. Kind of like a nickname to refer to something with a value. For example If there is a family of four:
- a father named Bob
- a mother named Maggie
- a older daughter named Charlene
- a younger brother named Joe
- a dog named Sniffy

In this context the use of father is used to refer to Bob, mother is used to refer to Maggie and so on.

In languages such as Java we have to be specific with the type of variable we are declaring to hold a value. For example to hold a value of Bob for father, or to assign the value of 4 for the family size:

String father = "Bob"
int familySize = 4
double averageFamilyAge = 20.5
boolean ownADog = true

In Javascript the language isn't so specific. To declare a variable we instead do the following:

let father = "Bob"
let familySize = 4
let averageFamilyAge = 20.5
let ownADog = true

So now whenever we use father in our code instead of saying "Bob" explicitly, we can just use father. You might think, why use father when I can type "Bob" instead? What if the father ends up changing his name to "Bobby"? If my program is huge and I had a lot of code that used father for something, I'd have to change all the "Bob" to "Bobby". By using variables I can simply change the line:

let father = "Bob"
  to
let father = "Bobby"

and anytime I used father in my code will automatically be changed. Let us continue in functions.md
