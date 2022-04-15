/*** this js file deals with the ctlr system */
/*                        ctrl sttm
        _______________________|________________________
        ctrl sttm                                       iteration-statement
        ____|______________                             __________|_________
       |                   |                           |                    |
       if-else             switch-case                 for /while/do while  for...in
       */
age = 100;
if(age>10)
{
    document.write("age is greater than 10");
}
else if(age==10)
{
    document.write("age is 10");
}
else{
    document.write("age is smaller than 10");
}
/* number is +ve or -ve and even or odd*/
num = -10;
if(num>0)
{ 
    document.write("<br>the number is a positive_number ");
    if(num%2==0)
    {
        document.write("<br>numbner is even");
    }
    else
    {
       document.write("<br>the number is odd");
    }

}
else if (num<0)
{
    document.write("<br>the numbner is a negetive_number");
    if(num%2==0)
    {
        document.write("<br>numbner is even");
    }
    else
    {
       document.write("<br>the number is odd");
    }

}
/*****************switch_case */
var month = 3;
month= 2; // providing it the differnet value than expected:
switch(month)
{
    case "july":
    document.write("this is 7th month ");
    break;
    default:
        document.write("<br>this month does't exist");
}