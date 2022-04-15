// let regex = /We...me/; // works 
// let regex= / W*e/    // works 
// let regex = /^Welcome/;   // works 
// works only when the given string starts with Welcome 
// and even di=on't care about any other welcome exists or not 
// let regex = /BACk$/;
// this works for the last word present in the string 
let regex = /Welc?ome?/
// here c and e are as optional words 
let str1 = "Welo to our channel . Welcom BACk";
let output =regex.test(str1);
console.log(output);
let op = regex.exec(str1);
console.log(op);