// function sum()
// {
//     var x = 10;
//     y=5;
//     total = x+y;
//     document.write(total);
// }
// sum(); 
// THE CONCEPT OF OVERRIDING WORKS HERE 
function sum(x,y)
{
    // var x = 10;
    // y=5;
   var total = x+y;
    document.write(total);
}
sum(10,15);
function strsum(x,y)
{
    // var x = 10;
    // y=5;
    total = x+y;
    document.write("<br>",total);
}
let a = "there exist";
let b = "the majesty";
strsum("welcome_to","simply_code");
strsum(a,b);
function myfun()
{
    var n = 100;
    document.write("<br>",n);
};
myfun();
// document.write(n);
// if we don't declare a var as let or var bydefault it takes var 
