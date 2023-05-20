// let parent = document.querySelector('.parent');
// let childs = document.querySelectorAll('.child');

// function checkedPro() {
//     childs.forEach(function (res) {
//         res.checked = true
//         if (parent.checked == false) {
//             res.checked = false
//         }
//     })

// }

// chapter 1

// alert("first name")
// alert("second name")
// alert("Email")
// alert("Phone Number")
// alert("Password")
// alert("I am learning JavaScript!")
// alert("sir na la li hai  :  ...class")

// chapter 2

// var secondNumber =" holle world ";
// alert(secondNumber);
//  var bestMan = "Huzifa";

// chapter 3

// var caseQty = 144;
// var num = "9";

// var sum;
// sum = 2;

// var merchTotal = 200;
// var shippingCharge = 15;
// var orderTotal = merchTotal + shippingCharge;
// console.log(orderTotal);

// var num =20;
// num +=2;
// console.log(num);

// chapter 4

// var product cost = 3.45;   // not Correct
// var productcost = 3.45;      // Correct


// var Nameofband;     // not Correct
// var nameOfband;     //  correct

// var named =   10;
// var HuzifaFaheem;

// Legal variable names:

// var caseQty = 10;
// var _count = 5;
// var myVariable = "Hello";
// var user123 = "John";

// Illegal variable names:

// var 123abc = 5; // starts with a number
// var my-variable = "test"; // contains a hyphen (-)
// var my variable = "test"; // contains a space


// chapter 5

// +  : add 
// -  : subtract
// /  : division
// *  : multiple
// %  : modulus
// ++ : increment
// -- : decrement


// var num = 20 % 6;
// console.log(num);  // answer is 2

// var  largeNum = 1000 * 2000;
// console.log(largeNum);


// var variable1 = 10;
// var variable2 = 5;
// var subtractionResult = variable1 - variable2;
// console.log(subtractionResult);


// var variable1 = 10;
// var variable2 = 3;
// var modules = variable1%variable2;
// console.log(modules);



// var variable1 = 100;
// var variable2 = 2;
// var modules = variable1 * variable2;
// alert(modules);

// chapter  6

// x = 7
// x = x + 1; // 
// x += 1;  //  answer
// x++   //  answer


// var x = 100;
// x--
// console.log(x);


// var x = 50;
// var y = x++; // answer is 50
// console.log(y);
// // but
// var x = 50;
// var y = ++x; // answer is 51
// console.log(y);



// var y = 50;
// var z = --y;  //answer is 49
// console.log(z);
// //but
// var y = 50;
// var z = y--;  //answer is 50
// console.log(z);


// var num = 10;
// var newNum = --num;
// console .log(newNum)

//  var num = 10;
//  var newNum = ++num;
//  console .log(newNum)


// var x  = 20;
// var y = ++x;
// alert(y);

// chapter 7



// var calculatedNum = 2 + (2 * 6);   //answer is 14
// console.log(calculatedNum);

// var calculatedNum = (2 + 2) * 6;   // answer is 24
// console.log(calculatedNum);

// var calculatedNum = (2 + 2) * (4 + 2);  // answer is 24
// console.log(calculatedNum);


// var calculatedNum = ((2 + 2) * 4) + 2;  //answer is 28
// console.log(calculatedNum);



// var calculatedNum = ( 2 + 2) *( 4 + 10);
// console.log(calculatedNum);

// var calculatedNum = 2 + (2 * 4) + 10;
// console.log(calculatedNum);

// var calculatedNum = (4 / 2 )* 4;   //is not posible
// console.log(calculatedNum);


// chapter 8

// var num = "2" + "2";  // answer is 22
// console.log(num);

// var message = ("Hello," + "Dolly");
// alert(message);



// alert("33" + 3);  //answer is 333

// var part1 = "Pakistan";
// var part2 = "Zindabad";
// alert(part1 + " " + part2);




// var stringVariable = "Hello";
// var numberVariable = 42;
// var concatenatedValue = stringVariable + numberVariable;
// console.log(concatenatedValue)


//  var stringVariable = "Hello";
//  var numberVariable = "world";
//  var concatenatedValue = stringVariable +" "+ numberVariable;
// alert(concatenatedValue)


// chapter 9

// var firstName = prompt("Enter first name");
// document.write(firstName)


// var country = prompt("Enter Country name");
// document.write(country)

// var yourName = prompt("Enter Your Name");

// var yourName = prompt("Enter Your Name" ,"name");
// var defaultinput = yourName
// document.write( defaultinput);

// var  question = "What is your favorite food?";
// var  defaultResponse = "Pizza";
// var userResponse = prompt(question, defaultResponse);


// var question = "What is your favorite food?";
// var defaultResponse = "Pizza";
// var userResponse = prompt(question, defaultResponse);
// alert(userResponse);


// chapter 10

// var city = "Karachi"
// if (city == "Karachi") {
// console.log("The City OF Lights")
// }


// if (x === y) {
//     var z = prompt("Enter the value of z?");
// }

// var zipcode = prompt("enter your zipcode")
// var city =10010
// if (zipcode==city ) {
//     alert("karachi")
// } else {
//     alert("Please write correct zipcode")
// } 

// let x = 2; // The variable to test and potentially assign a new value

// if (x === 1) {
//   x = 3; // Assigning a new value to x if the condition is true
// }

// console.log(x); // Output the value of x to the console


// chapter 11

// if (!(variable1 === variable2)) {
//     // Rest of the code for the if statement
//   }


// if(variable1 >= variable2){

// }


// var x = 3; // The variable to test and potentially assign a new number
// if (x !== 5) {
//   x = 7; // Assigning a new number to x if the condition is true
// }
// console.log(x); // Output the value of x to the console



// var num1 = 10;
// var num2 = 20;
// if (num1 !== num2) {
//     alert("congratulations")
// }


// var enteredName = prompt("enter your first name")
// if (enteredName !== "john"){
//     alert("no match")
// }
// else{
//     alert("name is match")
// }

// chapter 12


// var variable1 = 5;
// var variable2 = 3;

// if (variable1 >= variable2) {
//   alert("Variable 1 is greater than or equal to Variable 2");
// } else {
//   alert("Variable 1 is less than Variable 2");
// }




// var perc = +prompt("enter your percentage")
// if (perc <= 100 && perc >= 80) {
//     document.write("your grade is A+")
// }
// else if (perc < 80 && perc >= 70) {
//     document.write("your grade is A")
// }
// else if (perc < 70 && perc >= 60) {
//     document.write("your grade is B")
// }
// else if (perc < 60 && perc >= 50) {
//     document.write("your grade is C")
// }
// else if (perc < 50 && perc >= 40) {
//     document.write("your grade is D")
// }
// else if (perc < 40 && perc >= 0) {
//     document.write("fail")
// }
// else {
//     document.write("your input is invalid")
// }


// var a = 10

// if (a === 10) {
//     alert("a is 10");
//    } else {
//     alert("The correct value of a is");
//   }


// var city = prompt("enter your city");

// if (city == "karachi") {
//     alert("karachi")
// }

// else if(city == "lahore"){
// alert("lahore")
// }
// else{
// alert("Is not correct city")
// }


// chapter 13


// if (a === b && c === d) {
//     // Rest of the code for the if statement
//   }

// if (a === b || c !== d) {
//     // Rest of the code for the if statement
//   }

// if ((nam === "Hamza" || nam === "Arsalan") && age < 60) {
//     // Rest of the code for the if statement
//   }


// var num1 = 10;
// var num2 = 20;
// if (num1 < num2||num1>num2 ){
// alert("thank you")
// }

// var firstname = "Huzaifa";
// var secondname ="faheem";

// var enterfirstname =prompt("enter your first name ")
// var entersecondtname =prompt("enter your second name ")

// if (firstname==enterfirstname||secondname==enterfirstname){
//     alert("thank you")
// }

// chapter 14


// var Password = prompt("enter your password")
// if (Password !== "") {
//     if (Password.length <= 5 ) {
// alert("password must be greater than 5")
//     }
//     else{
//         alert("ok")
//     }
// }


// var a=1;
// var c="Max";
// if (a === 1) {
//     if (c === "Max") {
//      alert("OK");
//      }
//     }



// var a=1;
// var c="Max";
// if (a === 1 && c === "Max") {
//     alert("OK");
// }


// var firstvariable = 10;
// var secondvariable = 10;

// if (firstvariable == secondvariable) {
//     if (firstvariable <= secondvariable) {
//         alert("okay")
//     }

// }



// chapter 15


// var ary = ["h","s","b","u","v","c"]


// var  myArray = ["Hello, World!"];


// var alphabet = ["h","i","j","k"]
// document.write(alphabet[2])


// var alphabet=["h","i","j","k", "l","m", "n", "o"]
// console.log(alphabet.length);


// let myArray = ["First element"];
// myArray[1] = "Second element";

// alert(myArray[1]);


// chapter 16 I

// var Alphabet = ["h", "i", "j", "k"]
// Alphabet.push("L")
// alert(Alphabet[4])



// var Alphabet=["h","i","j","k"]
// Alphabet.pop()
// console.log(Alphabet);


// var Alphabet = ["h", "i", "j", "k"];
// Alphabet.push(123);

// console.log(Alphabet);

// chapter 16 II


// var sizes = ["S", "M", "XL", "XXL", "XXXL"]
// sizes.shift()
// console.log(sizes);



// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.unshift(1, 2, 3);
// console.log(sizes);



// var ary = ["world"]
// ary.unshift("hello")
// alert(ary[0])


// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.splice(2, 0, "L");

// console.log(sizes);



// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// var regSizes = sizes.slice(0, 3);

// console.log(regSizes);


// var pets = ["dog", "cat", "ox", "duck", "frog"];
// pets.splice(1, 3, "elephant", "giraffe");

// console.log(pets);


// var pets = ["dog", "cat", "ox", "duck", "frog"];
// pets.splice(1, 2);

// console.log(pets);


// var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
// var reducedPets = pets.slice(3, 5);
// console.log(reducedPets);


// chapter 17 and 20

// for(var i = 1;i<=10;i++){
// document.write("hello <br>")
// }


// for (let i = 1; i <= 12; i++) {
//     // Rest of the loop code goes here
//   }
  


// for (var i = 0; i <= 4; i++) {
//     // Rest of the loop code goes here
//   }
  

// for (var counter = 1; counter <= 100; counter++) {
//     // Rest of the loop code goes here
//   }
  

//   for (var i = 3; i > 0; i--) {
//     // Rest of the loop code goes here
//   }
 


// var array = [1, 2, 3, 4, 5];
// var length = array.length;
// console.log(length);



// var flag = true;


// var pets = ["dog", "cat", "fish", "bird"];
// for (var i = 0; i < pets.length; i++) {
//   document.write(pets[i]+"<br>")
// }



// for (var i = 0; i < 10; i++) {
//     if (i === 1) {
//       alert("Counter: " + i); // Display the counter in an alert on the second iteration
//       break; // Break out of the loop
//     }
//   }
  



// var userNames = ["John", "Jane", "Alex", "Emily"];

// var firstName = prompt("Enter first name");

// for (var i = 0; i < userNames.length; i++) {
//   if (firstName === userNames[i]) {
//     alert("Welcome, " + firstName + "!"); // User name matches
//     break; // Exit the loop since we found a match
//   }
// }

// if (i === userNames.length) {
//   alert("Please write the correct user name"); // User name doesn't match any in the array
// }





// var matchFound = false;
// var list = ["item1", "item2", "item3", "item4"]; // Assuming list is an array containing items
// var userInput = prompt("Enter an item");

// for (var i = 0; i < list.length; i++) {
//   if (userInput === list[i]) {
//     alert("Match found");
//     matchFound = true;
//     break;
//   }
// }

// if (!matchFound) {
//   alert("No match found");
// }





// var firstArr = ["a", "b", "c", "d", "e", "f"];
// var secondArr = [1, 2, 3, 4, 5, 6];

// for (var i = 0; i < firstArr.length; i++) {
//   for (var j = 0; j < secondArr.length; j++) {
//     console.log(firstArr[i] + secondArr[j]);
//   }
// }



















