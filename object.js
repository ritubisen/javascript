let text="this is string"  //string
let fruits=["ritu",25 ,"balaghat"]  ////array

let obj={
    //key value,
    name:"ritu",
    age:20,
    city:"Bhopal",
    //age:21  //key should be unique
}
 console.log(obj);  //to print full obj.
 console.log(obj.age);  //to access obj value
 console.log(obj.city);
 obj.college='cybrom'  //to insert in obj.
obj.age=23 ;    // update the value of obj.
delete obj.name  ///to delete an object key
 console.log(obj);

 /////////////////distructing////////////////////
// let student={name:"ritu",age:20,city:"bhopal"};

// let{name,age}=student ;

//  console.log(name);
//  console.log(age);

 /////////////////////////spread operator//////////////////////////////


//  let student1={name:"ritu",age:20};
//  let student2={city:"bhopal",grade:"A"};
//  let combinedstudent={...student1,...student2};

//  console.log(combinedstudent);

// let hide=()=>{

//    let.show= document.querySelector("#show")
// show.innerHTML="hide"
// }