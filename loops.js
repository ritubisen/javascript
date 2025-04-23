// let fruits={
//     name:"ritu",
//     age:20,
//     city: "bhopal"
// }

// /// for in objects me or aray me use krte h isliye key or value accesable h
// for(let ritu in fruits){
//     console.log(ritu," ",fruits[ritu]);
// }

// //for of array or string lgate h

// let arr1=["hello","i","am"]
// for(let ritu of arr1){

//     console.log(ritu);
// }


///map  / filter  / for each


//map//array ke har ek element ko  atret krega access krta h usme kuch perform krega 
// or wapis nya array return krega or ek nya update array bna ke deta h

let num=[2,4,5,2,6,7]

let newarr=num.map((e)=>{        //-  .map is highorder function    
                                     //-
return e*2                              //this callbreak function   aisa jo kisi ke peramitar me bnaya gya ho vo hota h
                                     //-
})
console.log(newarr);            //-


//filter ////////exact map ke jaise hota h map ki jgah per filter 

let newarr1=num.filter((e)=>{

    // return e%2==0
    return e>6
})
console.log(newarr1)

//for each //me nya array nhi milta string milta h 

let newarr2=num.forEach((e)=>{
    console.log(e%2==0)
})