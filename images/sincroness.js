
console.log("task given");

//setTimeout(()=>{},delay)
//2000means 2sec  
//setTimeout (function,delay) delay=> inmiliseconds
setTimeout(()=>{

    console.log("in process");

},5000)

console.log("compleated");

// let okk=()=>{
    
//     setTimeout(()=>{

//         console.log("ritu")
    
//     },1000)
    
// }

//setInterval

let count=0
let okk=()=>{
    
  let interval=  setInterval(()=>{
        count++
        console.log (count)
    
        
    },1000)
    
}

let stapp=()=>{
    clearInterval(interval)
}


//clearIntervel(set-interval-name)