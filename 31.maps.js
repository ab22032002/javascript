// var mycar = new Object()
// {
//     mycar.manufacture ="ford";
//     mycar.name="raptor";
//     mycar.color="black";
// }
// console.log(mycar.color);
// mycar.make =2012;
// console.log(mycar.make);
// console.log(mycar); // provide full object 
// // we can use object instead of maps and vice-versa
 /** creating an empty map  */
 var mycar = new Object()
 {

 }
 console.log(mycar);
 var mycarr = new Map()
 { //map_name.set("key","value")
   // string can also be a key ! and yeah any integer can also be the value 
   mycarr.set(1,"BMW");
   mycarr.set(2,"audi");
   mycarr.set(3,"Mercedes");
 }
 console.log(mycarr);
 console.log(mycarr.get(3));
 console.log(mycarr.size);
 // passing functions and objects as keys 
 var mycarr1 = new Map()
 let obj = {};
 let func = function(){};
 { //map_name.set("key","value")
   // string can also be a key ! and yeah any integer can also be the value 
   mycarr1.set("this is mycar_name","BMW");
   mycarr1.set(obj,"audi");
   mycarr1.set(func,"Mercedes");
 }
 console.log(mycarr1);
 console.log(mycarr1.get(obj)); // undefined --- solution is using variable it can be sort out 
 console.log(mycarr1.get(func));
 console.log(mycarr1.size);

 /*ARRAY WAY OF INITIALIAZING  MAPS*/
var mycarr2 = [[1,"BMW"],[2,"AUDi"],[3,"honda"]]
var mycarr2 = new Map(mycarr2);
console.log(mycarr2.get(2))
for (let [key,value] of mycarr2)
{
  console.log(key+" "+value);
}
for(let key of mycarr2.keys())
{
  console.log(key);
  // console.log(key.value));
  // console.log(valueof(key));
}
// creating a  copied map ----
var youCar = new Map(mycarr2)
console.log(youCar);
console.log(mycarr2==youCar); //false as they'ren't equal