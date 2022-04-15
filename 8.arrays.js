// array : list of similiar data types in contiguous memory location 
var car = ["hondA","HYUNDAI","kiA"];
// declaring an array
document.write(car);
// indexing bydefault 0 1 2 3 4 and goes on 
for(var i=0;i<3;i++)
{
    document.write(`<br>${car[i]}`);
}
// another way of declaration 
document.write("<br>'Creating a new array here '");
var fruits = new Array("apple","banana","mango",'papaya');
for(var i=0;i<4;i++)
{
    document.write(`<br>${fruits[i]}`);
}
// what is the size of the  array 
document.write("<br>'push operation here'");
car.push("nishan");
for(var i=0;i<car.length;i++)
{
    document.write(`<br>${car[i]}`);
}
document.write("<br>'pop operation here'");
car.pop();
car.pop();
for(var i=0;i<2;i++)
{
    document.write(`<br>${car[i]}`);
}
// car.length;
document.write("<br>",car.length);
// adding the other data types into the array 
document.write("pushing a another data type into the array");
car.push(100);
for(var i=0;i<car.length;i++)
{
    document.write(`<br>${car[i]}`);
}

