//**Write a JavaScript function that prints "Hello, World!" to the console
//console.log("hello,world!"); or
//const helloworld = () => {
// console.log("Hello World!");
//  };
//helloworld()

//**Write a function that takes two numbers as arguments and returns their sum
//const sumtwonumbers =(num1,num2)=>num1+num2
//console.log(sumtwonumbers(2,122));
//**Write a function that takes a number as input and returns "Even" if it's even and "Odd" if it's odd
//const evenorodd = (num) => (num % 2 === 0 ? "Even;" : "odd");
//console.log(evenorodd(22))

//**Write a function that checks if a given string is a pallindrome (reads the same backward as forward)
//const checkpallindrome = str=>str.split("").reverse().join("");
//console.log(checkpallindrome("Madam"));
     
 //**Write a function that returns the length of an array   
 //const checklengthofArray = (arr) => {
//const result = arr.length;
 //return result;
 //};
 
 //**Write a function that generates a random number between a given minimum and maximum value
 //const randomgenerator = (min, max)=> 
 //Math.floor(Math.random() * (max - min + 1))+min;
 //console.log(randomgenerator(2,8));

 //**Write a function that rounds a number to a specified number of decimal places
 //const num=3.14159;
 //console.log( num);
 
 //**Write a function that calculates the square root of a given number
 //const sqrt = (num)=>Math.sqrt(num)
 //console.log(sqrt(16))
 
 //Write a function that calculates the sum of the digits of a positive integer
 //const sumofdigit = (num) =>
 //num
 //.tostring()
 //.split("")
 //.reduce((acc, curr) => acc + number(curr), 0);
 //console.log(sumofdigits(2377));

 //**Write a function that counts the number of vowels (a, e, i, o, u) in a string
 //const vowelscounter = (str) => {
   // let count = 0;
   // let vowelstring = "aeiou";
   // for (let char of str) {
   //     if (vowelstring.includes(char)) {
   //         count++;
    //    }
   // }
 //return count;
//};
//console.log(vowelscounter("Gelo"));

//11.**Write a function that returns the length of a given string.
//const checklengthofstring = (str) => str.split("").length;
//console.log(checklengthofstring("Firealem"));

//12.Write a function that converts a string to uppercase

//const touppercase =(str)=>str.touppercase()
//console.log(touppercase("becky"))

//13.**Write a function that checks if a given string contains a specific substring
//const searchsubstring = (str, substr)=>str.includes(substr)
//console.log(searchsubstring("Firealem", "alem"))

//14.Write a function that replaces all occurrences of a substring with another substring within a given string.
//const replacesubstring = (str, substring, replacement) =>
// str.split(substring).join(replacement);
//console.log(replacesubstring("hi there, how are you, hi", "hi", "hello!"))
//or

//let ourstr = "hi there, how are you, hi"
//let searchstring="hi"
//let replaceM= "Hello!"
//const regax = new RegExp(searchstring, "g")
//const result = ourstr.replace(regex,replaceM)
//console.log(result)

//15.** Write a function that removes all whitespace from a given string.
//const cleanstring =(str)=> str.trim()
//console.log(cleanstring("  hi  there  "));

//16.  Create a function that takes an array of numbers and filters out negative numbers

//const array = (2, -2, 456, 4, 78, -200);
//const filteroutnegativenumbers = (arr) => arr.filter((num) => num > 0);
//console.log(filteroutnegativenumbers(array))

//17.** Write a function that takes an object as an argument and returns an array of all the keys present in the object
//const objex = {
  //name:"firealem",
  //age:100,
 // hobbies: "no hobbies",
//};
//const keygenerator = obj=>Object.keys(obj)
//console.log(keygenerator(objex))

//18.**write a function that adds default value of "unknown" to the object if the name key is not present or if the value of the name key is empty, undefined or null

//const objex = {
//name:undefined,
//age:100,
//hobbies: "no hobbies",
//}
//const cleanupobj = obj=> ({ ...obj, name: obj.name ? obj.name : "unknown"})

//console.log(cleanupobj(objex))

//19. ** Create a function that takes a number as an argument, increments the number by +1 and returns the result.

//const incrementby1 = num=>num+1
//console.log(incrementby1(8));

//20.  Create a function that takes a number as an argument, multiplies the number by +3 and returns the result.
//const multiplyby3 = num=>num*3;
//console.log(multiplyby3(10))

//21.** Create a function that takes an array containing only numbers and return the first element.

//const returnfirstelement = arr=>arr[0]
// console.log(returnfirstelement([2, 7, 5, 55]))

//22.** You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

//const totalbasketballresult = (twopointers, threepointers) => twopointers * 2 + threepointers * 3;
//console.log(totalbasketballresult(10, 10))

//23.  Write a function that takes two numbers, return true if the sum of both numbers is less than 30. Otherwise return false.

//const checkifsumislessthan30 = (num1, num2)=>num1+num2<30
//console.log(checkifsumislessthan30(9, 20))

//24.**  Create a function that returns true when num1 is equal to num2; otherwise return false.

//const checkiftwonumsareequal = (num1,num2)=>num1===num2
//console.log(checkiftwonumsareequal(3, 5))

//25. ** Create a function that will handle simple math expressions. The input is an expression in the form of a string. Examples calculator("23+4") ➞ 27 calculator("45-15") ➞ 30 calculator("13+2-5*2") ➞ 5 calculator("49/7*2-3") ➞ 11",
//const evaluater = (exp) => eval(exp);
//console.log(evaluater("45-15"))

//26.** Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.

//const checklengthequality = (str1, str2)=>str1.split('').length===str2.split('').length
//console.log(checklengthequality("Fire", "B"))
//console.log(checklengthequality("Fire", "Bele"))

//27. ** Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.

//const isdivisibleby5 = num=>num%5===0
//console.log(isdivisibleby5(25))

//28.** A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people 18 and older and when he's not on break. Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks."

//const canthebartenderserve = (age, isitbreaktime) => age > 21 && !isitbreaktime;
//console.log(canthebartenderserve(19, false))

//29. ** Given a string, return true if its length is even or false if the length is odd.

//const checkevencharsinstring = str => str.split("").length % 2 === 0;
//console.log(checkevencharsinstring("Fire"))

//30.** Create a function that accepts an array and returns the last item in the array.

//const lastitemfromarray = arr=>arr[arr.length-1]
//console.log(lastitemfromarray([1, 45, 5, 78, 78]));

//31.**Create a function that takes a word and returns the new word without including the first character
//const removefirstchar = (wor)=>wor.substring(1)
//console.log(removefirstchar("Firealem"))

//32.**Given two arguments, return an array which contains these two arguments. Examples makePair(1, 2) ➞ [1, 2] makePair(51, 21) ➞ [51, 21] makePair(512124, 215) ➞ [512124, 215]", code: ""

//const makepair = (a, b) => [a,b];
//console.log(makepair(1,2))

//33.  Create a function that takes an array of numbers or letters and returns a string. Examples arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456" arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef" arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"
//const arrayToString = (arr)=>arr.join("")
//console.log(arrayToString(["a", "b", "c", "d", "e", "f"]));
 
//34.** Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function, use an arrow function. Examples helloName("Gerald") ➞ "Hello Gerald!" helloName("Tiffany") ➞ "Hello Tiffany!" helloName("Ed") ➞ "Hello Ed!"

//const helloName = (Name) => 'Hello ${name}'
//console.log(helloName("Tiffany"));

//35. ** A typical car can hold four passengers and one driver, allowing five people to travel around. Given n number of people, return how many cars are needed to seat everyone comfortably.

//const getnoofcars = (noofpeople)=>Math.ceil(noofpeople/5) 

//console.log(getnoofcars(23))

//36. ** Write a function that prints all the odd numbers less than 100

//const generateoddnumbers = () => {
  //let result = [];
  //for (let i = 1; i < 100; i++) {
  //if (i % 2 !== 0) {
  //result.push(i);
  //}
  //}
  //return result
  //};
//console.log(generateoddnumbers())

//37.** Write a function that takes in two parameters and calculates the sum of numbers between the two paramenters

//const sumbetweennumbers = (start, end) => {
 // let sum = 0;
 // for (let i = start; i < end; i++) {
 //   sum= sum + i
 // }
 //   return sum;
  //};
//console.log(sumbetweennumbers(3, 7))

//38. ** Write a function that takes an array of objects with keys name, age and email and remove any object that does not have an email

//const sanitizedata = (arr) => arr.filter((item) => item.email)
//console.log(sanitizedata([
  //{ name: "firealem", age:10, email: "firealem@gmail.com" },
  //{ name: "erko", age:100, email: undefined },
  //{ name: "abel", age:100, email: "abel@gmail.com" },
//])
//);

//39.  Write a function that takes an array of objects with keys name, age and email and return a message that says"hi name, we have sent sent a conformation email to your email adddress" for each object
//const data = [
  //{ name: "firealem", age: 10, email: "firealem@gmail.com" },
  //{ name: "erko", age: 100, email: undefined },
  //{ name: "abel", age: 100, email: "abel@gmail.com" },
//];
//const generategreetingemail = (arr) =>
//arr.map(
//(item) => 'Hi ${item.name} we sent a confirmation email to your email adress'
  //);
//console.log(generategreetingemail(data));
/return newperson;
//});
//console.log(number46(data))

//const number47 = (arr) => arr.sort((a, b) => number(a.age) - number(b.age))
//console.log(number47(data))
//40. ** Write a function that takes an array of objects with keys name, age and email and remove any person whose age is less than 18
//const data = [
//{ name: "firealem", age:10, email: "firealem@gmail.com" },
  //{ name: "erko", age:100, email: undefined },
  //{ name: "abel", age:100, email: "abel@gmail.com" },
//];
//const filterunderagepeople = (arr)=>arr.filter(person=>person.age>18)
//console.log(filterunderagepeople(data))

//41. ** Write a function that takes an array of objects with keys name, age and email and return the sum of all the ages

//const data = [
  //{ name: "firealem", age:10, email: "firealem@gmail.com" },
  //{ name: "erko", age:100, email: undefined },
  //{ name: "abel", age:100, email: "abel@gmail.com" },
//];
//const getsumofages = (arr) => arr.reduce((acc, curr) => acc + curr.age, 0);
//console.log(getsumofages(data))

//42.**  Write a function that takes an array of objects with keys name, age and email and return the average age of all the people
//const data = [
//{ name: "firealem", age:10, email: "firealem@gmail.com" },
 // { name: "erko", age:100, email: undefined },
  //{ name: "abel", age:100, email: "abel@gmail.com" },
//];
//const calcavrageage = (arr) =>{
  //const sum = arr.reduce((a, c) => a + Number(c.age), 0) / arr.length;
  //return sum/arr.length
//}
//console.log(calcavrageage(data))

//43.  Write a function that takes an array of objects with keys name, age and email and return the name of the oldest person
//const data = [
//{ name: "firealem", age:10, email: "firealem@gmail.com" },
  //{ name: "erko", age:100, email: undefined },
  //{ name: "abel", age:78, email: "abel@gmail.com" },
//];

 //const getoldguy = arr =>
  // arr.sort((a, b) => Number(a.age) > Number(b.age))[arr.length -1].name;
 //console.log(getoldguy(data))

//44.**  Write a function that takes an array of objects with keys name, age and email and return the name of the youngest person

//const data = [
//{ name: "firealem", age:10, email: "firealem@gmail.com" },
  //{ name: "erko", age:100, email: undefined },
  //{ name: "abel", age:100, email: "abel@gmail.com" },
//];
//const getyoungguy = (arr) =>
  //arr.sort((a, b) => Number(b.age) - Number(a.age))[arr.length -1].name;
//console.log(getyoungguy(data));

//45.**  Write a function that takes an array of objects with keys name, age and email and return a new array with only the names of the people
//const data = [
//{ name: "firealem", age:10, email: "firealem@gmail.com" },
//{ name: "erko", age:100, email: undefined },
//{ name: "abel", age:100, email: "abel@gmail.com" },
//];
//const listofnames = (arr) => arr.map((person) => person.name);
//console.log(listofnames(data))
//46.  Write a function that takes an array of objects with keys name, age and email and return an array of objects with keys name, email and a boolean value that says if the person is an adult or not. An adult is a person whose age is greater than or equal to 18. The email key should only be present if the person has an email

//const data = [
  //{ name: "firealem", age:10, email: "firealem@gmail.com" },
//];
  
//const number46 = (arr) => 
 // arr
//.filter((person) => person.email)
//.map((person) => {
//let newperson = { person, isadult: person.age > 18 ? true : false };

//});
//console.log(number46(data))
 
//47.  Write a function that takes an array of objects with keys name, age and email and return a sorted array of objects by age

//const data = [
 // { name: "firealem", age:10, email: "firealem@gmail.com" },
 // { name: "erko", age:100, email: undefined },
 // { name: "abel", age:100, email: "abel@gmail.com" },
 // ];
//const number47 = (arr)=>arr.sort((a, b) => number(a.age) - number(b.age))
//console.log(number47(data))

//48.  Write a function that takes an array of objects with keys name, age and email and return a sorted array of objects by name

//const data = [
   //{ name: "firealem", age:10, email: "firealem@gmail.com" },
   //{ name: "erko", age:100, email: undefined },
  //{ name: "abel", age:100, email: "abel@gmail.com" },
//];
//const number48 = (arr)=>
  //arr.slice().sort((a, b) => {
  //if (a.name.tolowecase() < (b.name.tolowercase())) {
 //   return -1;
 //}
  //if (a.name.tolowercase() > b.name.tolowercase()) {
// return 1;
 //}
  //return 0;
//});

//console.log(number48(data))

//49.  Write a function that takes an array of objects with keys name, age and email return the name of the person with the longest name



//50.  Write a function that takes an array of objects with keys name, age and email and return a new array of string with the following format: 'name is age years old and has email'






