// function* generate() // * tells that its a generating function 
// {
//      let i =0 ;
//      yield "BMW";
//      yield "AUDI";
//      yield "mercedes";
//      yield "Hyundai";
// }
// let gen = generate()
// console.log(gen.next());
// console.log(gen.next());

   ///**** */ // task with the loop 
function* generate()
{
    let i = 0;
    var ar =["BMW","mercedes","audi","bentley"]
    while(i<ar.length)
    {
        yield ar[i]
        i++;
    }
}
let gen = generate()
// console.log(gen.next().value);
// console.log(gen.next());
console.log(gen.next());
console.log(gen.next().value);


