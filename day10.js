let arr1=["apple",2,"banana"]


/////////array of object////////////////////
let userdata=[
    {

        name:"u",
        age:"21",
        city:"bhopal"
},
{
    name:"t",
    age:"21",
    city:"bhopal"
},
{
    name:"i",
    age:"21",
    city:"bhopal"
},
{
    
   
    name:"r",
    age:"21",
    city:"bhopal" 

}]

console.log(userdata[0])

let datashow=document.querySelector("#datashow")

userdata.map((e)=>{

    datashow.innerHTML+=`
  
    <tr>
    <td> ${e.name}</td>
    <td> ${e.age}</td>
    <td> ${e.city}</td>
    </tr>
    `
})


  // <div>
    // <h1> ${e.name}</h1>
    // <h1> ${e.age}</h1>
    // <h1> ${e.city}</h1>
    // </div>//