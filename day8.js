// function okk(){

//     let answer = prompt("what is 5 + 9");

//     if(answer = 14){
//         alert("correct");
//     }
//     else{
//         alert("wrong!");
//     }

// }
// okk()


//====================================================next topic , next day=================================================================//

//=======================================================dom(document object model)=============================================================//

// document.getElementById('text')
//document.getElementByIdClassName('text')
//document.querySelector("#text")



// function okk(){

//     let show= document.querySelector("#text")

//     show.innerHTML="ritu"
// }


///========================================================normal funtion====================================================================

function name(){
    console.log("normal fun");

}

name();




///=================anonymus function==============//

let okk=function(){

    console.log("anonymus function")
}

okk();           //isme variable e name s function ko call krta h

//=================iife(imidiently involve function expression)===================//


(
    function(){
        console.log("iife")
    }
)()          //isme last me perenthesis()ka use krke function ko call krte hai 


//=======================arrow function("=>")=======================//


let ritu=()=>{
    console.log("arrow function");

}

ritu()            ///isme arrow ka use krte hai



