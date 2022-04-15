function fun1(a,b)
{
    return a+b; 
}
function fun2()
{
    console.log("welcome here");
}
fun2();
/**** newer syntaxes for functions */
var arrow1 = (c,d) =>{ return c+d;
}
/* ** var arrow1 = (c,d)=> c+d is also the same */
// cresting an arrow function for the traditional function 
var arrow2 = () => { 
    console.log("welcome to simplicode");
}
// while dealing with the single line of code then there is no issue having it in the single line 
// this is for dealig with the single argument 
var arrow3 = newname => {
    console.log("hey- there !"+ newname);
}
arrow3("kunal");
arrow3("amit");
