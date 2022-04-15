// function add()
// {
//     var no1= document.getElementById("n1").value ;
//     var no2= document.getElementById("n2").value ;
//     var no3 = no1+no2;
//     alert("the sum is "+no3);
//      // this will generate output as string concattenation
// }
/* using parseInt method */
function add()
{
    var no1= parseInt(document.getElementById("n1").value);
    var no2= parseInt(document.getElementById("n2").value);
    var no3 = no1+no2;
    // alert("the sum is "+no3);
    console.log("the sum is = "+ parseInt(no1+no2));
    // console.log("parsed sum is =="+parseInt(no1no2));  generates the err 
     // this will generate output as string concattenation
}
// point where we intentionally stops the prog
// using chroms developer tools appropiately so that get the 
// solution you want src>>down there is a debugging option 