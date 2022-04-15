var myset = new Set()
console.log(myset); // gives empty set
myset.add(1)
myset.add(2)
myset.add(3)
myset.add(4)
console.log(myset);
// trying to insert the same value again 
myset.add(3)
console.log(myset)
let arr = [1,2,3,4,45,3,5,5,4,3,4,3,4,5,46,63,34,533,3,4,2,4]
console.log(arr);
// getting unique elements out of this ... _____ 
//  by just passing it as argument in the set 
let myset2 = new Set(arr);
console.log(myset2) // prints only unique values 
let myarr = Array.from(myset2)
console.log(myarr); // in the form of an array 
for (let item of myset2)
{
    console.log(item);
}
for (let item of myarr)
{
    console.log(item);
}
myset2.delete(45);
for (let item of myset2)
{
    console.log(item);
}
// truncating the set 
myset2.clear();
console.log(myset2);