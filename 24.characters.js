// [abc]
// var regex = /[a-z]def/;
// // var regex = /[^def]def/ not to include the def and can include others 
// var str1= "this is the string kausaladef";
// var str2 =" this is also an string xyzabc5def"; // false as 5 isn't fall in between 
// var output = regex.test(str1);
// console.log(output); 
// var output1 = regex.test(str2);
// console.log(output1); 

function employee()
{
    var empid = document.getElementById("eid").value;
    var check = /[DE]253[10-99]/i
    if((check.test(empid)))
    {
        alert("vALid employee id ");
    }
    else
    {
       alert("invaLid");      
    }
}
// id should look like 
// D25311 E 25361
// without modifier it will say d25321 as invalid 