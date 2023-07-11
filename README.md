# step
learn

/ console.log("halloi")
// for(let i = 1;i<=10;i++){
//     console.log(i)
// }

// let ss = 0;
// let mm = 0;
// let hh = 0;
// setInterval(()=>{
//     ++ss
//     if(ss === 10){
//         ++mm
//         ss = 0
//         if(mm === 10){
//             ++hh
//             mm = 0
//         }
//     }else if(hh === 24){
//        hh = 0
//     }
//     console.log(`${addZero(hh)} :${addZero(mm)}: ${addZero(ss)}`)
// },1000)

// function addZero(timeUnit) {
//     let timeUnitStr = String(timeUnit);
//     if (timeUnitStr.length === 1) {
//       return "0".concat(timeUnitStr);
//     }
//     return timeUnitStr;
//   }

// function calculetAge(birthYear){
//     let cY = new Date().getFullYear();
//     let mayAGE = cY-birthYear
//     return mayAGE
// }
// console.log(calculetAge(2000))

// let i = 0;
// let id = setInterval(()=>{
//     ++i;
//     console.log(i);
// },1000)
// let eq = "==";
// let id1 = setInterval(()=>{
// ++i;
// console.log(i);
// console.log(eq);
// eq+= "=="

// },1000);
// setTimeout(()=>{
//     clearInterval(id);
//     clearInterval(id1)
// },5000)

//  let id = setInterval(()=>{
//     console.log("hello");
// },1000)
// setTimeout(()=>{
//     clearInterval(id)
// },10000)

// function oddeven(num , cb,cb1){
//     if(num % 2 === 0){
//         return function (){
//           console.log("even")
//         }
//     }else{
//         return function(){
//             console.log("odd")
//         }
//     }
// }
// console.log(oddeven(23))
