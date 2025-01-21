// // // // // function greet(name = "Guest") {
// // // // //   console.log(`Hello, ${name}`);
// // // // // }

// // // // // greet();
// // // // // greet("Varshith");

// // // // function area(length = 1, breadth = 1) {
// // // //   return length * breadth;
// // // // }

// // // // console.log(area());//length=1,breadth=1 --> (1*1)
// // // // console.log(area(5)); // length=5,breadth=1 --> (5*1)
// // // // console.log(area(5, 2)); //length=5,breadth=2 --> (5*2)

// // // function power(base, exponent = base) {
// // //   return Math.pow(base, exponent);
// // // }

// // // console.log(power(2));
// // // console.log(power(2, 3));

// // function greet(name) {
// //   if (name) {
// //     console.log(`Welcome ${name}`);
// //   } else {
// //     console.log("Welcome Unknown");
// //   }
// // }

// // greet();
// // greet("Varshith");
// // greet();

// function greet(name = "Unknown") {
//   console.log(`Welcome ${name}`);
// }

// greet();
// greet("Varshith");
// greet();
