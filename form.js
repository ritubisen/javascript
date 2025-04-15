let val =()=>{
   let inpname= document.querySelector("#name").value
   let inpnumber= document.querySelector("#number").value
   let inpemail= document.querySelector("#email").value
   let inppassword= document.querySelector("#password").value
   let inpcpass= document.querySelector("#con-password").value

   let errname= document.querySelector("#errname")
   let errnumber= document.querySelector("#errnumber")
   let erremail= document.querySelector("#erremail")
   let errpass= document.querySelector("#errpass")
   let errlogin= document.querySelector("#errlogin")

   if(inpname==""){

    errname.innerHTML="plz enter your name"
    return false
   }
else if(inpnumber==""){
   errnumber.innerHTML="plz enter your number"
   // document.querySelector("number").computedStyleMap.border 1px solid red
   return false
}
else if(isNaN(inpnumber)) {     ////if ans is number return false
   errnumber.innerHTML="please enter number "
return false

} 
else if(inpnumber.length !=10){
   errnumber.innerHTML="please enter 10 digit only"
   return false
}
// else if(!(inpemail.includes("@")&& inpemail.includes(".com"))){
   else if(!(inpemail.includes("@"&&".com"))){
   erremail.innerHTML="please enter your email"
   return false
}
else if(inppassword==""){
   errpass.innerHTML="please enter your password"
   return false
}

else if(inpcpass!= password.value){

   errlogin.innerHTML="password not match"
   return false
}
else if(inpcpass!=inpcpass){
   errlogin.innerHTML="password and confirm password should be same"
   document.querySelector("#con-password").value=""
   document.querySelector("#con-password").focus()
   return false
}

else if(!(inpcpass.match([/1234567890/]))
      &&!(inpcpass.match([/!@#$%^&*()_+/]))
      && !(inpcpass.match([/A-Z/]))
      && !(inpcpass.match([/a-z/]))

)
        
}