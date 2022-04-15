function f1()
{
    console.log("this is a function 1");
    // syntax err generation 
}
f1();
/*** run time error  */
function f2()
{
    console.log("this is a function");
}
// f4();// this will generate the err 
function makeorder()
{
    console.log("here is your black coffee");
}
// trying a function which even don't exist 
try 
{
   makeorder();
   processOrder();
}
catch(error)
{
    console.log("sorry! an error occured");
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}
// processOrder();
// runt time error in the default manner 
//  finally block here which executes anyhow no matter what other error occured 
finally{
    console.log("this block will get executed . No matter what ");
}
///// this is customized error 
 var a = 9 ;
 if (a<10)
 {
     throw new Error("this is customizable error ");
 }
 else {
     console.log("working Fine!");
 }