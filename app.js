console.log("JavaScript Connected")

// Chapter7: user input and conditional statement

// 1.

//  // Taking city name input from user
//     var city = prompt("Enter your city name:");

//     // Checking if the city is Karachi (case insensitive)
//     if (city.toLowerCase() === "karachi") {
//       alert("Welcome to city of lights");
//     } else {
//       alert("Welcome to " + city);
//     }


// 2.

// // Take gender input from user
//     var gender = prompt("Enter your gender (male/female):");

//     // Convert input to lowercase to handle variations
//     gender = gender.toLowerCase();

//     // Check the gender and show the appropriate message
//     if (gender === "male") {
//       alert("Good Morning Sir.");
//     } else if (gender === "female") {
//       alert("Good Morning Ma’am.");
//     } else {
//       alert("Invalid input. Please enter 'male' or 'female'.");
//     }

// 3.

// // Take traffic signal color as input
//     var signal = prompt("Enter the traffic signal color (Red, Yellow, Green):");

//     // Convert input to lowercase for case-insensitive comparison
//     signal = signal.toLowerCase();

//     // Show message based on signal color
//     if (signal === "red") {
//       alert("Must Stop");
//     } else if (signal === "yellow") {
//       alert("Ready to move");
//     } else if (signal === "green") {
//       alert("Move now");
//     } else {
//       alert("Invalid signal color. Please enter Red, Yellow, or Green.");
//     }

// 4.

// // Take remaining fuel input from user
//     var fuel = parseFloat(prompt("Enter the remaining fuel in your car (in litres):"));

//     // Check if fuel is less than 0.25 litres
//     if (fuel < 0.25) {
//       alert("Please refill the fuel in your car");
//     } else {
//       alert("You have enough fuel");
//     }


// 5.

// var a = 4;
// if (++a === 5){
//   alert("given condition for variable a is true");
// }


// var b = 82;
// if (b++ === 83){
//   alert("given condition for variable b is true");
// }


// var c = 12;
// if (c++ === 13){
//   alert("condition 1 is true");
// }
// if (c === 13){
//   alert("condition 2 is true");
// }
// if (++c < 14){
//   alert("condition 3 is true");
// }
// if(c === 14){
//   alert("condition 4 is true");
// }


// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//   alert("The cost equals");
// }




// if (true){
//   alert("True");
// }
// if (false){
//   alert("False");
// }


// if("car" < "cat"){
//   alert("car is smaller than cat");
// }


// // 6.


// // Input from user
//     var subject1 = parseFloat(prompt("Enter marks for Subject 1:"));
//     var subject2 = parseFloat(prompt("Enter marks for Subject 2:"));
//     var subject3 = parseFloat(prompt("Enter marks for Subject 3:"));
//     var totalMarks = parseFloat(prompt("Enter total marks:"));

//     // Calculate total obtained and percentage
//     var obtainedMarks = subject1 + subject2 + subject3;
//     var percentage = (obtainedMarks / totalMarks) * 100;

//     // Determine grade
//     var grade;
//     if (percentage >= 80) {
//       grade = "A-one";
//     } else if (percentage >= 70) {
//       grade = "A";
//     } else if (percentage >= 60) {
//       grade = "B";
//     } else if (percentage >= 50) {
//       grade = "C";
//     } else {
//       grade = "Fail";
//     }

//     // Display result on the page
//     document.write("<h3>Result Summary</h3>");
//     document.write("Total Marks: " + totalMarks + "<br>");
//     document.write("Marks Obtained: " + obtainedMarks + "<br>");
//     document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
//     document.write("Grade: " + grade + "<br>");


// 7.

// var secretNumber = 7; // Secret number between 1-10
//   var guess = parseInt(prompt("Guess the secret number (1 to 10):"));

//   if (guess === secretNumber) {
//     alert("Bingo! Correct answer");
//   } else if (guess + 1 === secretNumber || guess - 1 === secretNumber) {
//     alert("Close enough to the correct answer");
//   } else {
//     alert("Wrong guess. Try again!");
//   }

// 8.

// var number = parseInt(prompt("Enter a number:"));

//   if (number % 3 === 0) {
//     alert("The number is divisible by 3.");
//   } else {
//     alert("The number is NOT divisible by 3.");
//   }

// 9.

//   var num = parseInt(prompt("Enter a number:"));

//   if (num % 2 === 0) {
//     alert("The number is Even.");
//   } else {
//     alert("The number is Odd.");
//   }

// 10.

//  var temp = parseInt(prompt("Enter temperature:"));

//   if (temp > 40) {
//     alert("It is too hot outside.");
//   } else if (temp > 30) {
//     alert("The Weather today is Normal.");
//   } else if (temp > 20) {
//     alert("Today’s Weather is cool.");
//   } else if (temp > 10) {
//     alert("OMG! Today’s weather is so Cool.");
//   } else {
//     alert("It's freezing!");
//   }

// 11.

//  var num1 = parseFloat(prompt("Enter the first number:"));
//   var num2 = parseFloat(prompt("Enter the second number:"));
//   var operator = prompt("Enter operation (+, -, *, /, %):");
//   var result;

//   if (operator === "+") {
//     result = num1 + num2;
//   } else if (operator === "-") {
//     result = num1 - num2;
//   } else if (operator === "*") {
//     result = num1 * num2;
//   } else if (operator === "/") {
//     result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
//   } else if (operator === "%") {
//     result = num2 !== 0 ? num1 % num2 : "Cannot mod by zero";
//   } else {
//     result = "Invalid operator";
//   }

//   alert("Result: " + result);


// chapter8:IF...ELSE & ELSE IF STATEMENT,
//  TESTING SET OF CONDITIONS

// 1.


//   var input = prompt("Enter a single character:");

//   if (!input || input.length !== 1) {
//     alert("Please enter only one character.");
//   } else {
//     var code = input.charCodeAt(0);

//     if (code >= 48 && code <= 57) {
//       alert("You entered a number.");
//     } else if (code >= 65 && code <= 90) {
//       alert("You entered an uppercase letter.");
//     } else if (code >= 97 && code <= 122) {
//       alert("You entered a lowercase letter.");
//     } else {
//       alert("You entered a special character.");
//     }
//   }

// 2.


//   var num1 = parseInt(prompt("Enter first integer:"));
//   var num2 = parseInt(prompt("Enter second integer:"));

//   if (num1 > num2) {
//     alert(num1 + " is larger.");
//   } else if (num2 > num1) {
//     alert(num2 + " is larger.");
//   } else {
//     alert("Both numbers are equal.");
//   }


// 3.


//   var number = parseFloat(prompt("Enter a number:"));

//   if (number > 0) {
//     alert("The number is positive.");
//   } else if (number < 0) {
//     alert("The number is negative.");
//   } else {
//     alert("The number is zero.");
//   }

// 4.


//   var char = prompt("Enter a single letter:");

//   if (!char || char.length !== 1 || !isNaN(char)) {
//     alert("Please enter a valid single letter.");
//   } else {
//     char = char.toLowerCase();
//     if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//       alert("True – it's a vowel.");
//     } else {
//       alert("False – it's not a vowel.");
//     }
//   }

// 5.



//   var correctPassword = "openAI123";
//   var userPassword = prompt("Enter your password:");

//   if (!userPassword) {
//     alert("Please enter your password");
//   } else if (userPassword === correctPassword) {
//     alert("Correct! The password you entered matches the original password");
//   } else {
//     alert("Incorrect password");
//   }


// 6.



//   var greeting;
//   var hour = 13;

//   if (hour < 18) {
//     greeting = "Good day";
//   } else {
//     greeting = "Good evening";
//   }

//   alert(greeting);


// 7.


//   var time = parseInt(prompt("Enter time in 24-hour format (e.g., 1900):"));

//   if (time >= 0 && time < 1200) {
//     alert("Good morning!");
//   } else if (time >= 1200 && time < 1700) {
//     alert("Good afternoon!");
//   } else if (time >= 1700 && time < 2100) {
//     alert("Good evening!");
//   } else if (time >= 2100 && time <= 2359) {
//     alert("Good night!");
//   } else {
//     alert("Invalid time format. Please enter time between 0000 and 2359.");
//   }

//  <==========COMPLETE===========>



    


