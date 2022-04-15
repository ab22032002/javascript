console.log("welcome here ");
var abc = {
    Name : "kunal",
    Subject: "javascript",
    Add:"jamnagar"
}
// console.log(`printing the object ${abc}`); this won't wowrked somehow 
console.log(abc);
// using predefined things as the IDE is providing 
// creating object via constructor 
function xyz(name,subject,add)
{
    this.name= name;
    this.subject= subject
    this.add = add;

}
// var x1 = new xyz("kaushik","java","earth");
// console.log(x1);
// all the things can be executed on the console------ it will be accessed from there
// var x2 = new xyz("kali","need","you");
xyz.prototype.getname = function ()
{
    return this.name;
}
var x3 = new xyz("rolls","java","junwani");// works for getaddr too 
xyz.prototype.getaddr = function ()
{
    return this.add;
}
var x4 = new xyz("rolls","ram","saikh");
xyz.prototype.grade= "a";

