// classes template for creating the object in js 
class Student {
    constructor(name,age,roll)
    {
    this.name = name;
    this.age= age;
    this.roll = roll;
    }
    //adding method'
    org()
    {
        return ("i am "+ this.name + "from NIGER");
    }
    dob()
    {
        return ("the YEAR of birth of "+ this.name + "is"+ (2020-this.age));
    }
    // adding static methods in js
    // ?? can be directly called via a class name 
    static add (a,b){
        return a+b;
    }
    
}
var kl = new Student("Vishal",23,"debugger");
console.log(kl);
var rahul = new Student("NAAM TO SUNA HOGA",45,"heroic");
console.log(rahul);
console.log(Student.add(12,223223));
/*****the properties of inheritance using classes  */
// super refers to the immediate parents 
class Student1 extends Student
{
    constructor(name,age,roll,lang,sec)
    {   super(name,age,roll);
        this.lang= lang;
        this.sec= sec;
    }
}
// creating an object for student1
var arun = new Student1("arun",35, 200,"javascript","b");
console.log(arun);
// in the prototype section we got to know that the methods also gets inherited 
console.log(Student1.add(34,43));
