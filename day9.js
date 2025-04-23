// let MyDate= new Date()
// console.log(MyDate)
// console.log(MyDate.getFullYear())
// console.log(MyDate.getDay())
// console.log(MyDate.getMonth())   //jan 0 per ata heee
// console.log(MyDate.getHours())
// console.log(MyDate.getSeconds())
// console.log(MyDate.getMinutes())
// console.log(MyDate.getMilliseconds())
// console.log(MyDate.toLocaleString())
// let arr=["sunday","monday","tuesday","wednesday","thurs","friday","saturday"]
// console.log(arr[MyDate.getDay()]);

 

// ///stopwatch
//  setInterval(()=>{
// let CurDate=new Date()
// let showTime=document.querySelector("#showing")
// showTime.innerHTML=${CurDate.getHours()}: ${CurDate.getMinutes()} :${CurDate.getSeconds()}
// },1000)

// let MyDate = new Date();

// console.log(MyDate);                          // Full date-time
// console.log(MyDate.getFullYear());            // Year
// console.log(MyDate.getDay());                 // Day (0 = Sunday)
// console.log(MyDate.getMonth());               // Month (0 = January)
// console.log(MyDate.getHours());               // Current hour
// console.log(MyDate.getSeconds());             // Current seconds
// console.log(MyDate.getMinutes());             // Current minutes
// console.log(MyDate.getMilliseconds());        // Current milliseconds
// console.log(MyDate.toLocaleString());         // Local date-time string

// let arr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// console.log(arr[MyDate.getDay()]);            // Day name

// // Stopwatch - live clock
// setInterval(() => {
//     let CurDate = new Date();
//     let showTime = document.querySelector("#showing");
//     showTime.innerHTML = `${CurDate.getHours()} : ${CurDate.getMinutes()} : ${CurDate.getSeconds()}`;
// }, 1000);



function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    const clock = document.getElementById("clock");
    clock.textContent = `${hours} : ${minutes} : ${seconds}`;
  }
  
  setInterval(updateClock, 1000);
  updateClock(); // run once immediately
  