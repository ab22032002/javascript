var regex = /\d233/ 
var regex = /\d+233\d/  // for full number to get here 
// \d  represent a number here 
var regex = /\D+233/
var str1 = "users phone number is 789823a2331"
var str2 = "23232324@#$%$^#&@*&*@&#*@#2331";
var output = regex.exec(str1);
console.log(output);
var output1 = regex.exec(str2);
console.log(output1);
//it returns the maximun number of characters before 233 in the str2
// /wber returns m 
// /w+ber returns left side till space 
// inverse chacter class 
// in num$ber  $ can be exctracted by /Wber/
// in num$%#^%^%^#@%^#%@^ber extracted by /W+ber/

/* for white spaces */
// /\sphone/ the space before phone the index is for the space present in the string 
// /\sUsers / gives null 
// user               phne number is is 26786595679;
// /\susers / this will point to the last space it encounter 
//          Users  \S gives everything ecxept the space here it will give null 
//     %#$%%^Users \S gives all the other except space 
