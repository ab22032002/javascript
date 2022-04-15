console.log("this is added using js");
// we can perform many operations here as its a very robust language to carry-over
document.write("this is what you wanted to do me ! right?");
let a = 500000;
b= 5000;
let c = b/a;
console.log("\n this is the value of c ",c);
document.write("\n the value of B is given by :", b);
var k = 15;
var l = 50;
var m = 60;
document.write("\n the value of m is == ",m);
// let is not for accessing outside the block
// but variable can work 
{
    var z= 500;
    let x= 900;
    console.log("the value of z is =",z);
    console.log("the value of x is =",x);
    
}
document.write("the value of z outside accesing",z);  
// document.write("the value of x outside accesing",x);    // this will  produce error
// var can be ovewriteable but let isn't
const e = 590903;
console.log(e);
console.log(typeof(e));
var flag = false;
console.log(typeof(flag));
// we didn't have to give it a type during declaration 
var f;
// console("the value of f is ",f); genrate error as it will so undefined
console.log(typeof(f));
// checking for null value always points to the object 
var g = null;
console.log(typeof(g));

