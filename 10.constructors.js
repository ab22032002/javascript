//  syntax::
//  var obj_name= new Object();
var rect2 = new Object();// created ana empty object
rect2.length = 5;
rect2.width = 10;
rect2.getarea = function()
{
    return this.length*this.width;
}
rect2.getperi = function()
{
    return (2*this.length + 2*this.width);
}
document.write(`<h2>the length of the  rectangle is ${rect2.length} <br>`);
document.write(`<h2>the width of the  rectangle is ${rect2.width} <br>`);
document.write(`<h2>the area of the  rectangle is ${rect2.getarea()} <br>`);
document.write(`<h2>the perimeter of the  rectangle is ${rect2.getperi()} <br>`);
// initial part of the code has it all kindly relate it with 9.objects.js
/**constructor function method  */
// while Creating multiple instances
function rect3(len,wid) 
{
    this.len = len;
    this.wid = wid;
    this.getAr = function()
    {
        return len*wid;
    }
    this.getpr = function()
    {
        return 2*(len+wid);
    }
    this.show = function()
    {
        document.write(`<h2>the length of the  rectangle is ${this.len} <br>`);
        document.write(`<h2>the width of the  rectangle is ${this.wid} <br>`);
        document.write(`<h2>the area of the  rectangle is ${this.getAr()} <br>`);
        document.write(`<h2>the perimeter of the  rectangle is ${this.getpr()} <br>`);   
    }
}
// creating an object 
var r1 = new rect3(5,10);
r1.show();
document.write(`creaitng another object here ::::<br>`);
var r2 = new rect3(3,4);
r2.show();
// we can crete multiple objects  here 








