var car_mf = "audi";
var car_model= "07";
var price= 50000;
function allwheeldrive()
{
    document.write("this car comes with Quatro all wheel drive");
}
allwheeldrive(); // behaviour of the car 
// function 
// bundling the requires things into onr thing under one name 
 /* syntax: 
 literal object way_-
 var car = {car_mf : "audi",
 car_model:"Q9",
 price: 2000000};*/
 var ax = {car_mf : "audi",
 car_model:"Q9",
 price: 2000000,
  freebe : function()
  {
      document.write("this is very powerfull car<br> ");
      document.write(this.price);
      // this worked here for the current instance of the class 
  }
};
//  document.write(ax);
document.write("<br>",ax.car_mf);
ax.freebe();
var bx = {car_mf : "TATA",
 car_model:"SAFARI",
 price: 20000000,
  freebe : function()
  {
      document.write("this is very powerfull car<br> ");
      document.write(this.price);
      // this worked here for the current instance of the class 
  }
};
//  document.write(ax);
document.write("<br>",bx.car_mf);
bx.freebe();
/**********object_based_property of js */
/*setting up the function acting similiar to constructor*/
function cs (cs_a,cs_b,cs_c)
{
    this.cs_a= cs_a;
    this.cs_b= cs_b;
    this.cs_c= cs_c;
    
    this.cs_fun = function()
    {
        document.write("<br>this is abundant and magnaanimous<br>");
        document.write(`printing the respective elements of the object :<br> ${this.cs_a}<br>${this.cs_b}<br>${this.cs_c}<br>`);
    } 
}
/* creating the object here */
var c1 = new cs("hyundai","verna","1M");
c1.cs_fun();
var c2 = new cs("honda","city","1M");
c2.cs_fun();
// defining something as new always took a relation to the object 
/*******************string object  */
var str1 = new String();
document.write("<br>",typeof(str1));
cs.cs_color= "black";
document.write("<br>",cs.cs_color);
cs.newfun= function()
{
    document.write("<br>created a function oustside added");
}
cs.newfun();
/******how to delete the property of the object here  */
delete cs.cs_color;
document.write("<br>",cs.cs_color);
// modifying the old values  
cs.cs_b= "roses";
document.write("<br>",cs.cs_b);