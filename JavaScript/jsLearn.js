// ===== Primitive and Object =====

// var a = 22;
// var b = a;
//
// a = 35;
//
// console.log(a); // 35
// console.log(b); // 22



// var c = {
//
//   name: 'John',
//
// }
//
// var d = c;
//
// c.name = 'Tom'
//
// console.log(c.name); // Tom
// console.log(d.name); // Tom

// var age = 26;
// var obj = {
//
//   name: 'Tommy',
//   lastName: 'Li',
//
// }
//
// function change(a, b) {
//
//   a = 36;
//   b.lastName = 'Wang';
// }
//
// change(age, obj);
//
// console.log(age);
// console.log(obj.lastName);

// ===== inherit =====

// var tom = {
//
//   name: 'Tom',
//   lastName: 'Li',
//   job: 'desinger'
// }
//
// var Person = function(name, lastName, job) {
//
//   this.name = name;
//   this.lastName = lastName;
//   this.job = job;
//
// }
//
// Person.prototype.location = "Taiwan";
//
// var kelly = new Person('Kelly', 'Chen', 'retired');
// var tommy = new Person('Tommy', 'Huang', 'teacher');
//
// console.log(kelly.location);
// console.log(tommy.location);


// ===== Object.create =====

// var desinger = {
//
//   product: 200,
//   usingTool: 'PhotoShop',
//
// }
//
// var tommy = Object.create(desinger);
//
// tommy.name = 'Tommy';
// tommy.lastName = 'Li';
// tommy.job = 'Designer';
//
// console.log(tommy);
//
// var kelly = Object.create(desinger, {
//
//   name: {value: 'Kelly'},
//   yearOfBirth: {value: 1992},
//   job: {value: 'Designer'},
//
// });
//
// console.log(kelly);

// var years = [1993, 1956, 1982, 1933];
//
// function calculate(arr, func) {
//
//   var array = [];
//   for (let i = 0; i < arr.length; i++) {
//
//     array.push(func(arr[i]));
//
//   }
//
//   return array;
//
// }
//
// function ageCalculate(arr) {
//
//   return 2019 - arr;
//
// }
//
// function isFullAges(arr){
//
//   return arr >= 18;
//
// }
//
// var ages = calculate(years, ageCalculate);
//
// console.log(ages);
//
// var fullAges = calculate(years, isFullAges);
//
// console.log(fullAges);


// ===== 如何使用 function 作為 function 的返回值 =====

// function sayHello(job){
//
//   return (name) => {
//
//     if (job === 'desinger'){
//       console.log('Hello '+ name +', you are a '+ job +'!');
//     } else if(job === 'teacher'){
//       console.log('Hello '+ name +', you are a '+ job +'!');
//     }
//
//   }
//
// }
//
// // var callFunc = sayHello('desinger');
// // callFunc('Tom');
//
// sayHello('teacher')('Ken');




// function sayHello() {
//
//   console.log('Hello!');
// }
//
// sayHello();

// IIFE - immediately invoked function expressions


// (function sayHello(name) {
//
//   console.log('Hello '+ name +'!');
// })('Tommy');


// ===== Object 如何借用其他 Object 裡面的 method =====

// var person = {
//
//   firstName: 'Tommy',
//   lastName: 'LI',
//   fullName: function(job1, job2) {
//
//     console.log(this.firstName + ' ' + this.lastName + ' is a ' + job1 + ', and also is a ' + job2 + '.');
//   }
// }
//
// // person.fullName();
//
// var ken = {
//
//   firstName: 'Ken',
//   lastName: 'Cen',
//
// }
//
// person.fullName.call(ken, 'teacher', 'desinger');
// person.fullName.bind(ken, 'desinger')('teacher');


// ===== Global variable 全局變量 & Local variable 局部變量 =====

// function myFunction() {
//
//   var a = 4;
//   console.log(a * a);
//
// }
//
// myFunction();
//console.log(a); // a is not defined


// var a = 5;
// function myFunction() {
//
//   console.log(a * a);
//
// }
//
// myFunction();


// var a = 5;
// function myFunction() {
//
//   a = 4;
//   console.log(a * a);
//
// }
// myFunction();
// console.log(a);




//
// function add(){
//
//   var counter = 0;
//   counter += 1;
// }
//
// add();
// add();
// add();
//
// console.log(counter);




// function add(){
//
//   var counter = 0;
//   function plus() {
//     counter += 1;
//   }
//
//   plus();
//   return counter;
// }
//
// add();
// add();
// add();
//
// console.log(add());

// closure
// var add = (() => {
//
//   let counter = 0;
//   return () => {
//
//     return counter += 1;
//   }
// })();
//
// add();
// add();
//
// console.log(add());


// var add = new Object();
// add.count = 0;
// add.plus = function()
// {
//   this.count++;
// }
// add.plus();
// add.plus();
// console.log(add.count);


// ===== forEach & map method =====

// var array = [4, 9, 16, 25];
//
// array.forEach(myFunction);
//
// function myFunction(item, index){
//
//   console.log('index[' + index + ']: ' + item);
// }
//
// var newArray = array.map( item => {
//
//   return item * 2;
//
// });
//
// console.log(newArray);
// console.log(array);


// =====  =====

// slice()

var array = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];

var newArray = array.slice(1, 4);

console.log(newArray);

var index = array.indexOf('Lemon');

console.log(index);
