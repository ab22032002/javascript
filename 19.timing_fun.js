var message = () => alert("welcome to simplicode");
 /*   approximately the syntax*/
function start1() {
    setTimeout(message,2000);
}
// on clicking to the Click_me nbutton the js let us explore this button from
// inside so that the popup recheS out and create alot 
// writting the code into the format such that it also showcases the arrow function 
function start2() {
    setTimeout(function (){
        alert("welcome back!");
    },2000);
}
// we wrote the function inside the setTimeout function 
// new function 
/* steps to clear timeout functions 
1. we have declared a function  which needs to be exe 
it will be executed after the timeintervel provided 
2. somehow we got to know that this fun is of no need 
3. to cancel that function we declare it as clearTiimeout function 
*/
var id = 0;
var msg = () => alert("welcome to SC");
function start(){
    id=setTimeout(msg,5000);
} 
function stop(){
    clearTimeout(id);
}
/* setIntervel method(fun_name , time_in_ms)
to repeatedly exe the function */
var id1 = 0;
var msg1 = () => alert("welcome to SC");
function start4(){
    id1 = setInterval(msg,5000);
} 
function stop4(){
    clearTimeout(id1);
}
// getting the popup again and again 
// we can stop the popup using the clearTimeout function in the above example 
