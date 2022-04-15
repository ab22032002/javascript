// promise
// : resolved if the task got completed
// : not s=accomplished == rejected 
// : pending the time in which the system work on the promise
// promise == object which give various output on a single mentioned thing 
var prom = new Promise(function(resolve,reject){
          var drive = false;
          if(drive){
                 resolve("YES ");
          }
          else 
          {
              reject("no ");
          }
});
 // calling the function 
 // this if the prom is resolved  
 prom.then(function(resolve){
     console.log(resolve+"the user knows how to drive ");
 }).catch(function(reject){
    console.log(reject + "the user doesn't know how to drive");
 })
 var functions= function(){
     return new Promise(function(resolve,reject){
         resolve("learnt functions ");
     })
 }
 var callback = function(message){
    return new Promise(function(resolve,reject){
        resolve(message+ "learnt   callback functions");
    })
}
var promises = function(message){
    return new Promise(function(resolve,reject){
        resolve(message+"   good to go for promises in javascript");
    })
}
//  romise(executor: (resolve: (value: any) => void, reject: (reason?: any) => void) => void): Promise<any>
functions().then(function(result){
    return callback(result);
}).then(function(result){
    return promises(result);
}).then(function(result){
    console.log("good to go : "+ result);
})