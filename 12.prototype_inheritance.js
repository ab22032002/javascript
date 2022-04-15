// traditional way of using the inheriatance 
// creating an object and learning about prototype
const Employee = {
    Post : function()
    {
       return "a software developer";
    },
    changeName : function(name){
        this.name = name;
    }
};
var e1 = Object.create(Employee);
console.log(e1);
e1.name = "baru";
e1.role = "sFE";
console.log(e1);//
//tum neeche bhi upadate kroge to bhi upper dikhata hai 
// the above changes occured in the prototype 
e1.changeName("ram");
console.log(e1);

var E2 = Object.create(Employee,{
    name : {value:"kaushal2"},
    role: { value:"programmer"}
})
console.log(E2);
// E2.changeName("shyam"); // this line won't work its not ahving the permission to write on it ::::: overwritting:
// using writeable keyword we can mange it . 
var E3 = Object.create(Employee,{
    name : {value:"kaushal2", writable:true}, // writable 
    role: { value:"programmer"}
})
console.log(E3);
E3.changeName("shyam");
console.log(E3);
// DIFFERENT WAY OF APPROACHING >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function Emp(n,id,sal)
{
    this.n= n;
    this.id=id;
    this.sal= sal;
}
Emp.prototype.post = function(){
    return (this.n+ " "+ " is a creator");
}
var kl = new Emp("kaushank" ,45,10000);
console.log(kl);
 function programmer(n,id,sal,lang)
 {  // three properties have been inherited from the above class 
     Emp.call(this,n,id,sal);
     this.lang= lang;
 }
 var pg = new programmer("vaRun",23,129292,"java");
 console.log(pg);
 // varun.post() not working here 
//  adding the prototype here
programmer.prototype = Object.create(Emp.prototype);
// now we have to explicitely declare the constructor for the respective class 
programmer.prototype.constructor = programmer;
var pg1 = new programmer("vaRun",23,129292,"java");
 console.log(pg1);
// after this line it will be printing the VArun is creator as it  is the part of the prototype function in the upper prototype