// function abc(call)
// {
//    call();
// }
function one()
{
    console.log("function 1");
}
function two()
{
    console.log("function 2");
}
function three()
{
    console.log("function 3");
}
one();
two();
three();
// to make the function execute after sometime
setTimeout(one,2000);
// the time here is in miliseconds
// here function 1 is executed again after 2 sec
// to make the function happen after the particular function 
function four()
{  
    // writting a function inside the settimeout function will help us to make the function run after the other  
    setTimeout(function(){
    console.log("function 4");
    five();
    },3000);
}
function five()
{
    console.log("function 5");

}
four();
// five();
/****** the call back rules  */
function person(friend,personx)
{   setTimeout(function(){
    console.log("my friend name is ss " + friend);
    personx();},3000);
}
 function person2()
{
    console.log("this is what you want right!");
}
person("suryash",person2);