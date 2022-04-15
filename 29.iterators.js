function cars(values)
{
    let index=0;
    return {
        next: function(){
            if(index<values.length)
            { return {
                value:values[index++], 
                done:false
                    }
            }
            else 
            {
                return {
                    done:true
                }
            }
        }
    };

}
var arr=["BMW","audi","mercedes","bentley"];
// for(let i=0;i<arr.length;i++)
// {
//     console.log(arr[i]);// by default have line spacing 
// }
// // working similiarly 
// for(let i of arr)
// {
//     console.log(i);
// }
var newCarz=cars(arr)
console.log(newCarz.next());
console.log(newCarz.next().value);