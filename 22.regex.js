var regex = /to/ 
// for  no problem as case sensetive ....
//  /hello/i 
var regex = /hello/g
// if the part oft the word is provided then also it works 
// ex . /ello/g works 
// generally gives the first hello it encounter 
// To gives null 
var str1 = "welcome to our website hello to all of hello you ";
// var output = regex.exec(str1);
// console.log(output);
// var output = regex.exec(str1);
// console.log(output);
// secod will give info about the s econd hello it encounters
// test()

// var output = regex.test(str1);
// console.log(output);

// match()
// var output = str1.match(regex);
// console.log(output);

//replace 
var output = str1.replace(regex,"hi");
console.log(output); 
// due to /g modifier .............
//  removing /g will replace the first finded hello with hi 

