function makeorder(coffee)
{
    return new Promise((resolve,reject)=>{
        console.log("making request for a "+ coffee)
        if(coffee =="black coffee"){
            resolve(" here is your coffee ,Have a nice day ")
        }
        else {
            reject("sorry! we serve black coffee only ")
        }
    } )
}
// in the above stttm its not mandatory to have the if else.
// it can be resolve reject according to the situation given to us 
function processOrder(order)
{
    return new Promise((resolve,reject)=>{
        console.log("processing order");
        resolve("extra information"+ order)
    })
};
// this function alaways get resolved 

// calling the respective functions 
// makeorder("black coffee").then(order=>{
//     console.log(" order has been recieved")
//     return processorder(order)
// }).then(processorder =>{
//     console.log(processorder)
// }).catch(error =>{
//     console.log(error);
// })
// makeorder("LAATTE").then(order=>{
//     console.log(" order has been recieved")
//     return processorder(order)
// }).then(processorder =>{
//     console.log(processorder)
// }).catch(error =>{
//     console.log(error);
// })
/*** USING ASYNC AWAIT ____________ */
async function fun1(){
    try{
   var order =  await makeorder("black coffee") // to make next function await for this 
   console.log("ORDER HAS been received");
    var  processOrder =  await processOrder(order) 
   console.log(processOrder);
    }
    catch(error){
        console.log(error);
        // now its not producing the error 
    }
}

fun1();
