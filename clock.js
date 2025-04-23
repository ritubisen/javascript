let MyDate = new Date();

console.log(MyDate);                          // Full date-time
console.log(MyDate.getFullYear());            // Year
console.log(MyDate.getDay());                 // Day (0 = Sunday)
console.log(MyDate.getMonth());               // Month (0 = January)
console.log(MyDate.getHours());               // Current hour
console.log(MyDate.getSeconds());             // Current seconds
console.log(MyDate.getMinutes());             // Current minutes
console.log(MyDate.getMilliseconds());        // Current milliseconds
console.log(MyDate.toLocaleString());         // Local date-time string

let arr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(arr[MyDate.getDay()]);            // Day name

// Stopwatch - live clock
setInterval(() => {
    let CurDate = new Date();
    let showTime = document.querySelector("#showing");
    showTime.innerHTML = `${CurDate.getHours()} : ${CurDate.getMinutes()} : ${CurDate.getSeconds()}`;
}, 1000);

///////////////////otp generate===================================================
let num = math.floor(1000 + math.random() * 8000);
console.log(num);

//math.random =  number generat krta h 0 se 1 tak 