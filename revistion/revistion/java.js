// let arr = [1,2,3,4,5,6,7,8,5,6,5,6,7,5,7,8,5,78,4,3,4,5,7,5,7,86,5,4,5,6,78,4,5,3,32,24,56,7,77,6,4,6,8,9,10,8,9,5,5,9];
// let map = new Map();
// let num = 0;
// let max = 0;
// for(let key of arr){
//     if(map.has(key)){
//         let value = map.get(key)+1;
//         //map.set(key,value);
//         if(max < value){
//             max = value;
//             num = key;
//             map.set(num,key);
//         }
//     }else{
//         map.set(key,1);
//     }
// };
// console.log(map);
// console.log(num,max)

// let obj = {
//     name : "alisher",
//     age  : 21,
//     bank : {
//         accholderName : "alikhan",
//         ifscCode      : "sbiN0007093"
//     }
// }

// let ans = Object.keys(obj);
// console.log(ans);
// let value = Object.values(obj);
// console.log(value[2]);

// let ans1 = Object.entries(obj);
// for(let i = 0; i <= ans1.length ; i++){
//     console.log(ans1[i][0],ans1[i][1]);
//     if(typeof ans1[i][1] === "object"){
//         let an = Object.entries(ans1[i][1])
//         for(let j = 0 ; j <= an.length ; j++){
//             console.log(an[j][0] +" = " +an[j][1])
//         }
//     } 
// }


// ex 1 ...

// let ans = prompt("do you dring water");
// if(ans === "water"){
//     console.log("pani");
// }else if(ans === "pani"){
//     console.log("water")
// }else{
//     console.log("kuch nhi")
// }


// let a = 12;
// let b = 23;
// let sum = 100;
// let ans= (sum-(a+b));
// console.log(ans

// let weekday  = Number(prompt("what is your number"))
// switch(weekday){
//     case 1:
//     console.log("monday")
//     break;
//     case 2 :
//     console.log("apna");
//     break ;
//     default :
//     console.log("noo");
//     break;
//     case 3:
//     console.log("bhutmxt");
//     break ;
//     case 4:
//     console.log("mja aav");
//     break ;
//     case 5:
//         console.log("ha..gaa.haaa")


// }


// for(let i = 1 ; i <= 5 ; i++){
//     let str = "";
//     for(let j = 1 ; j<=i; j++){
//         str = str+"*";
        
//     }
//     console.log(str)
// }

// for(let i= 5 ; i>= 1 ; i--){
//     let ans = "";
//     for(let j= 1 ; j<=i;j++){
//         ans = ans+"*";
//     }
//     console.log(ans)
// }

// for(let i = 1 ; i <=5 ; i++){
//     let str = "";
//     for(let j = 1 ; j<=i ; j++){
//         str = str+"*";
//     }
//     console.log(str)
// }

// for(let i = 5 ; i >= 1 ; i--){
//     let str = "";
//     for(let j = 1 ; j <=i ; j++){
//       str = str+"*";  
//     }
//     console.log(str)
// }

// for(let i = 1 ; i<=5 ; i++){
//     let str = "";
//     for(let j = 1 ; j <=i ; j++){
//         str = str + i
//     }
//     console.log(str)
// }

// for(let i = 1; i<=5 ; i++){
//     let str = "";
//     for(let j = 1 ; j <= 5 ; j++){
//         str = str+i
//     }
//     console.log(str)
// }

// for(let i = 1 ; i<=11 ; i++){
//     let str = "";
//     if(i % 2 === 0){
//     for(let j= 1 ; j <=i ; j++){
//         str = str + "*"
//     }
//     console.log(str) 
// }
    
// }

// for(let i = 5 ; i>=1 ; i--){
//     let str = "";
//     for(let j = 1 ; j <= i ; j++){
//         str = str+"*";
//     }
//     console.log(str);
// }

// 

// const weekday = "snday";
// switch (weekday){
//     case "monday":
//         console.log("this is allso work day");
//         break;
//         case "sturday":
//             console.log("last day for week job");
//             break;
//             case " sunday":
//                 console.log("chuti");
//                 break ;
//                 default :
//                 console.log("work day ");
// }
// for(let i = 1 ; i <=5 ; i++){
//     let str = "";
//     for(let j = i ; j <=5 ; j++){
//         let space = "  ";
//         for(let k = 5 ; k>=1 ; k--){
// space  = str+i+space;

//         }
//         console.log(space)
//     }
    
    
// }
// for(let i = 1 ; i<=5; i++){
//     let str = "";
//     for(let j = i ; j<=5; j++){
//         str = str+"*";
//     }
//     console.log(str)
// }

// const person = function(name,age){
//     this._name = name;
//     this.age = age;
// }
// get name(){
//     return this._name
// }
// set name(newname){
// this._name = newname
// }


// person.prototype.work = "nikma"
// const aas = new person("aasif",21);
// const san = new person("sanif",22);
// console.log(aas)


// let age = 18;

// let status = age >= 18 ? "Adult" : "Minor";

// console.log(status); // Adult

// let oddeven = 24;
// let ans = oddeven %2 === 0 ? "Even" :"odd";
// console.log(ans)
// if (NaN) {
//   console.log("Yes");
// } else {
//   console.log("answer because NaN is a falsy value"); //answer because NaN is a falsy value
// }


// let oddeven = 21;
// let ans = oddeven % 2 === 0 ? "even" : "odd";
// console.log(ans);

// let oddeven = 32;
// let ans = oddeven %2 === 0 ? "Even" : "odd";
// console.log(ans)

// for(let i = 1; i<=5 ; i++){
//     let str = ""; 
//     for(let j=1; j>=i;j--){
//         str = str+"*"
//     }
//     console.log(str)
// }

// let map = new Map();
// let arr = [1,2,3,4,5,6,7,6,5,4,3,4,4,9]
// for(let key of arr){
//     if(map.has(key)){
//         let value = map.get(key)+1;
//         map.set(key,value);
//     }else{
//         map.set(key,1)
//     }
// }
// console.log(map);
// console.log(map.values())
// console.log(map.delete(1));
// console.log(map);
// console.log(map.entries());
// console.log(map.keys());
// map.forEach(function(value,key){
//     console.log(value,key)
// });
// console.log(map.has( 4));
// //console.log(map.clear());
// console.log(map.get(2));
// console.log(map);

// let arr = [[1,2],[3,4]]
// let map = new Map(arr);
// console.log(map);

// function oddeven(num){
//     if(num % 2===0){
//         console.log("Even")
//     }else{
//         console.log("odd")
//     }
// }
// oddeven(2)
// oddeven(21)

// let set = new Set();
// set.add(2);
// set.add(1);
// set.add(3);
// set.add(4);
// set.add(5);
// set.add(6);
// set.add(7);
// set.add(7);
// set.add(2);
// set.add(5);
// set.add(1);
// console.log(set);
// console.log(set.delete(4));
// console.log(set);
// console.log(set.size);
// set.forEach(function(num){
//     console.log(num)
// });
// for(let value of set){
//     console.log(value)
// }

// console.log(set.keys());
// console.log(set.values());
// let arr = [...set];
// console.log(arr);
// let arr1 = [1,2,3,4,5,6,7,8,7,5,4,4,3,2,2,3,5,7];
// let set1 = new Set(arr1);
// console.log(set1)

// function oddeven(num1,num2){
//     if(num1 %2 === 1 && num2 % 2 ===0){
//         console.log("yes")
//     }else{
//         console.log("no")
//     }
// }
// oddeven(12,22);

// let ans = Number(prompt("kitne  numbr print karne h tabel ke"))
// function tebal(num){
//     for(let i = 1 ; i<=ans ; i++){
//         console.log(i*num)
//     }
// }
// tebal(2);

// let str = "alisher"
// function reverseWords(str) {
//     return [...str.split(' ')].map(word => word.split('').reverse().join('')).join(" ");
//   }
//   console.log(reverseWords(str))

// let str = "hallo"
// let ans = str.split("");
// let a = ans.reverse().join("");
// console.log(a)

// let str = "alisher";
// let ans = str.split("");
// let str1 = "";
// for(let i =0 ; i<=ans.length-1; i++){
//     str1 = ans[i]+str1 ;
//     console.log(str1)
// }
// console.log(str1)

// let str = "12345";
// let ans = str.split("");
// let str1 = "";
// for(let i =0 ; i<=ans.length-1; i++){
//     str1 = ans[i]+str1 ;
//     console.log(str1)
// }
// console.log(str1)

// let str = "alisher";
// let upr = str.toUpperCase();
// let lor = str.toLowerCase();
// console.log(upr,lor)

// let spl = str.split("");
// let spc = "";
// for(let i = 0 ; i<=spl.length-1;i++){
//     if(i%2===1){
//         spc = spl[i]+spc;
//         spc = spc.toUpperCase()
//     }else{
//         spc = spl[i]+spc;
//         spc = spc.toLowerCase()
//     }
// }
// console.log(spc)

// let str = "   alisher  ";
// let ansall = str.trim();
// let s = str.trimStart();
// let e = str.trimEnd();
// console.log(s)
// console.log(e)
// console.log(ansall)


// let str = "  alisher sorgar ladmun jaan  ";
// let star = str.startsWith("a");
// let str1 = str.startsWith("ali");
// console.log(star);
// console.log(str1);
// let end = str.endsWith("er");
// console.log(str.endsWith("t"));
// console.log(end);
// console.log(str.repeat(5));
// //console.log(str.replace("alisher","alisher sorgar"));
// console.log(str.charAt(6))
// console.log(str.charAt(8))
// console.log(str.charAt(13))


// let str = "alishersorgar ";
// let str1 = "sorgar ";
// let str2 = "ladnun" ;
// let ans = str.concat(str1,str2);
// console.log(ans)
// let ind = str.indexOf("i");
// console.log(ind)
// console.log(str.indexOf("o"))
// console.log(str.lastIndexOf("gar"))
// console.log(str.includes("ali"))
// console.log(str.includes("i"));
// console.log(str.includes("sor"))
// console.log(str.includes("er"));

// let sp = str.split("");
// console.log(sp);
// console.log(str.split("i"))

// console.log("wecodeb".split("wecode"));
// console.log("wecode".split("wecode"));
// console.log("wecodeb","wecode".split("wecode"));
// console.log("wecode","wwecode".split("wecode"));

// const prom = new Promise(function(resolve,reject){
//     resolve()
// })
// prom.then(function(){
//     return fetch("https://restcountries.com/v3.1/name/india")
// }).then((response)=>{
//      return  response.json()
// }).then((res)=>{
//     console.log(res)
// })
// .catch((error)=>{
//     console.log("error")
// })

// const https = new XMLHttpRequest();
// https.open("get","https://restcountries.com/v3.1/name/india");
// https.send();
// https.onload = function(res){
//     let ans = this.response
//     console.log(JSON.parse(ans))
// }
//async
// let num1 = 290;
// let num2 = 100;
// const prom = new Promise(function(resolve,reject){
// if(num1 > num2){
//     resolve();
// }else{
//     reject();
// }
// });
// prom.then(()=>{
//     return fetch("https://restcountries.com/v3.1/name/india")
// }).then((response)=>{
//     return response.json();
// }).then((response)=>{
//     console.log(response)
// }).catch((error)=>{
//     console.log("error")
// });
// console.log("hallo")

// async function getdata(){
//     return fetch("https://restcountries.com/v3.1/name/india")
//     const data =await response
    
// }
// getdata();
// let ans = getdata();
// ans.then((response)=>{
//     return response.json()
// }).then((response)=>{
//     console.log(response)
// }).catch((error)=>{
//     console.log("error")
// });
// console.log("hallo")


 //let str1 = "hallo wecode";
// let ans = str.slice(1,4);
// console.log(ans);
// console.log(str.substring(2,6));
// console.log(str.substr(2,8));
// let num = "98649";
// console.log(num.padStart(10,"*"))
// console.log(num.padEnd(10,"*"))
// console.log(num.padStart(7,"#"))
// let str = "9737927364";
// let inc = str.indexOf(2);
// console.log(inc)
// let leftpart = str.slice(0,5);
// let rightpart = str.slice(5);
// console.log(leftpart,rightpart)
// let pad = rightpart.padStart(7,"*");
// console.log(leftpart.concat(pad))
// console.log(str1.padStart(15,"*"))

// class Person{
//     constructor(name,age,salary){
//         this.age = age ;
//         this.name = name;
//         this.salary = salary;
//     }
//     run(){
//         console.log("runing.....")
//     }
//     eat(){
//         console.log("eating......")
//     }
// }

// class Person1 extends Person{
//     constructor(name ,age,salary,add){
//         super(name,age,salary)
//         this.add = add;
//     }
// }
// class Person2 extends Person{
//     constructor(name ,age,salary,car){
//         super(name,age,salary)
//         this.car = car;
//     }
// }
// Person.prototype.work = "IT";
// const per = new Person("alisher",21,21000);
// console.log(per)

// const aasif = new Person1("aasif",22,22000,"ladnun");
// const aasi = new Person2("aasi",23,3333,"thar");
// console.log(aasif,aasi)
// aasif.eat();
//aasi.run();

// let a = "9649287338";
// let ans =a.slice(0,5);
// let padEnd = ans.padEnd(10,"*");
// let ans2  = a.slice(5);
// let start = ans2.padStart(10,"*");
// console.log(padEnd);
// console.log(start)


// let number = "964****338";
// let start = number.slice(0,3);
// let end   =  number.slice(-3)
// let padEnd = start.padEnd(7,"*");
// console.log(padEnd.concat(end))


// let str = "hallo";
// let ans = str.length
// console.log(ans);
// for(let i =1 ; i<= ans ; i++){
//     console.log(str+i)
// }

// let val = prompt("what is your name");
// let str = val.repeat(5);
// console.log(str)


// let ans = prompt("what is instude name");
// let ans1 = ans.includes("academy");
// if(true){
//     console.log(ans.indexOf("academy"))
// }else{
//     console.log(ans.concat("academy"))
// }



// let str  = "wecode academy";
// let ans = str.startsWith("acadmey");
// if(ans.indexOf()){
    
// }

// let str = prompt("what is instude name");
// let ans = str.includes("wecode");
// console.log(ans)
// if(ans === true){
//     console.log(str.length);
// }else{
//     console.log(str.concat("wecode"))
//

// let name = "ali";
// switch(name){
//     case "ali":
//         console.log("bhai");
//         break
// case "sadam":
//     console.log("class met")
// break 
// case "afjal":
//     console.log("gali friend")
// break
// default :
//     console.log("pta nhi kon hh")
// }


// *
// **
// ***
// ****
// *****

// for(let i = 0; i<5; i++){
//     let str = "";
//     for(let j = 0 ; j<=i ; j++){
//         str = str+"*"
//     }
//     console.log(str)
// }

// for(let i = 1; i<=5; i++){
//     let str = "";
//     for(let j = 5; j>=i ; j--){
//         str = str+"*";
//     }
//     console.log(str)
// }

// let str = "alisher sorgar";
// let ans = str.slice(2,7);
// console.log(ans);
// let ans2 = str.substr(2,7);
// console.log(ans2);
// let ans3 = str.substring(2,7);
// console.log(ans3);
// let ans4 = str.charAt(2);
// console.log(ans4);
// let ans5 = str.split(" ");
// console.log(ans5);
// let ans6 = str.concat("ladnun");
// console.log(ans6)

// let str = "alisher";
// let rightpart = str.slice(0,1).toUpperCase();
// let leftpart = str.slice(1);
// console.log(rightpart + leftpart)
// for(let i = 1 ; i<=5 ; i++){
//  console.log("&".repeat(5))
// }

// for(let i = 1 ; i<=5 ; i++){
//     console.log("&".repeat(5))
//    }
   
//    for(let i =5 ; i>=1; i--){
//     let str = "";
//     for(let j = 1 ; j<=i; j++){
//         if (j%2 === 1){
//             str = str+"&"
//         }else{
//             str = str+"##"
//         }
//     }
//     console.log(str)
//    }
// for(let i = 1 ; i<=5 ; i++){
//     console.log("1".repeat(i))
// }


// function animal(name,age,work){
//     this.name = name,
//     this.age = age,
//     this.work = work
//     }

    

// animal.prototype.food = "vej an non vej"
// const bandar = new animal("chiku",21,"pad par chadna")
// console.log(bandar);
// const lion = new animal("lion",21,"king")
// console.log(bandar,lion)
// console.log(bandar.name)
// console.log(lion.name)


// const https = new XMLHttpRequest();
// https.open("get","https://restcountries.com/v3.1/name/india");
// https.onload = function(){
//     let a = this.response;
//     if(this.status === 200){
//         console.log("ok")
//     }
//     console.log(JSON.parse(a))
// }
// https.send()

// let ans =  Number(prompt("what is your name"))
// let prom = new Promise(function(resolve,reject){
//     if(age > 18){
//         resolve()
//     }else{
//         reject()
//     }
// })
// .then(()=>{
// return fetch("https://restcountries.com/v3.1/name/india")
// })
// .then((respons)=>{
//     console.log(respons.json())
// })
// .catch((errr)=>{
//     console.log("error")
// })


 //let arr = [1,2,3,4,5,6,7,8,6,5,4,3,2,1,1,2];
// let ans = arr.reduce(test);
// function test(a,b){
//     return a+b
// }
// console.log(ans)

//let ans = arr.filter(test);
// function test(num){
//     return num%2===0;
// }
// console.log(ans)

// let ans2 = arr.sort(test);
// function test(a,b){
//     return a-b
// }
// console.log(ans2)

// let ans3 = arr.every(test);
// function test(num){
//     return num%2 === 0
// }
// console.log(ans3)

// let ans4 = arr.find(test);
// function test(num){
//     return num 
// }
//console.log(ans4)

// function fn(){
//     console.log(1)
//     fn2()
//     console.log(11)
// }
// function fn2(){
//     console.log(2);
//     fn3()
//     console.log(12)
    
// }
// function fn3(){
//     console.log(3);
    
// }
// fn()

// function Car(name,model,cc){
//     this.name = name;
//     this.model = model;
//     this.cc = cc;
// }
// Car.prototype.feul = "pentrol"

// const honda = new Car("i20",2020,"1000cc");
// const tata = new Car("thar",2023,"1200cc");
// console.log(honda);
// console.log(tata)

// class Car{
//     constructor(name , model,cc){
//         this.name = name;
//         this.model = model;
//         this.cc = cc;   
//     }
//     speed(){
//         console.log("car is run.......")
//     }
// }

// class honda extends Car{
//     constructor(name,model,cc,feul){
//         super(feul,name,model,cc)
//         this.feul = feul;
//     }
// } 

// const thar = new honda("thar",2023,"1200cc","pentrol")
// console.log(thar);


// function max(num1,num2){
//     return Math.max(num1,num2)
// };
// console.log(max(12,34));

// const max = function(num1,num2){
//     return Math.max(num1,num2)
// }
// console.log(max(12,35))

// const max = ((num1,num2)=>{
//     return Math.max(num1,num2)
// });
// console.log(max(11,234))


// function sum(a,b){
//     return a+b
// }
// console.log(sum(12,23));

// const sum = function(a,b){
//     console.log(a+b)
// }
// sum(23,34);

// const sum = ((a,b)=>console.log(a+b))
// sum(12,78)


// function oddeven(num){
// if(num %2 === 0){
//     return "even"
// }else{
//     return "odd"
// }
// }
// console.log(oddeven(22));
// console.log(oddeven(21));

// function tebal(num){
//     for(let i = 1; i <=10;i++){
//     console.log((num*i))
//     }
// }
// tebal(5)

// const tabel = function(num){
//     for(let i = 1; i <=10;i++){
//              console.log((num*i))
// }
// }
// tabel(5);

// const tabel = ((num)=>{
//     for(let i = 1; i <=10;i++){
//              console.log((num*i))
//     }
// })
// tabel(9)


// function test(fn){
//     fn()
// }
// test(function(){
//     console.log("hallo")
// })

// function test(a){
// if(a%2===0){
//     console.log("even")
// }else{
//     console.log("odd")
// }
//}

// test(12);
// test(11)


// function test(cb){
//     cb(23)
// }
// test(function(a){
//     if(a%2===0){
//         console.log("even")
//     }else{
//         console.log("odd")
//     }
// })

// function calculate(a,b,cb){
//     cb(a,b)
// }
// function sum(a,b){
//     console.log(a+b)
// }
// function mul(a,b){
//     console.log(a*b)
// }

// function divide(a,b){
//     console.log(a%b)
// }
// function sub(a,b){
//     console.log(a-b)
// }
// function max(a,b){
//     console.log(Math.max(a,b))
// }
// function oddeven(a,b){
//     if(a %2===0 && b %2 ===0){
//         console.log("even")
//     }else{
//         console.log("odd")
//     }
// }
// calculate(100,23,sum)
// calculate(100,23,sub)
// calculate(100,2,oddeven);
// calculate(100,23,max)
// calculate(100,23,mul)

// function test(operator){
//     if(operator === "+"){
//     return function sum(a,b){
//         console.log(a+b)
//     }
// }else{
//     console.log("no")
// }
// }
// let ans = test()
// ans(12,23)



//1. Create a function and pass one number in arugment. Agar number odd hai to ek function return kro jo Odd print krta ho. Agar number even ho to ek function return kro jo Even Print krta ho 
// function oddeven(num,cb,cb){
//     cb(num,even,odd)
// }

// function even(num){
// if(num%2=== 0){
//     console.log("even")
// }
// }
// function odd(num){
//     if(num%2===1){
//         console.log("odd")
//     }
// }
// oddeven(31,even,odd)

function oddeven(num){
    if(num %2===0){
        return function(){
            console.log("Even.......")
        }
    }else{
        return function(){
            console.log("odd.....")
        }
    }
}
console.log(oddeven(22));

// function strig(str){
//     if(str==="hallo"){
//         return function(){
//             console.log("hallo")
//         }
//     }else{
//         return function(){
//             console.log("hallo world")
//         }
//     }
// }
// strig("hallo")
// console.log(strig("hallo"))

// function test(num1,cb){
//     console.log(num1)
//     cb(num1)
// };

// test(5,function(num1){
//     for(let i = 1;i<=10;i++){
//         console.log(i*num1)
//     }
// })

// function strig(str,cb){
//     console.log(str)
//     cb(str);
// }
// strig("alisher",function(str){
//     console.log(str+"sorgar")
// })

//  setInterval(()=>{
// console.log("hallo")
// },2000);

// setInterval(() => {
//     console.log("bhai")
// }, 2000);

// setTimeout(function () {
//     let a = 10;
//     let b = 20;
//     console.log(a + b);
//   }, 2000);
//   function test() {
//     console.log("hello from function declaration");
//   }
//   test()
// setTimeout(()=>{
//     console.log("hallo")
// },2000)
// function sum(num1,num2){
//     return num1+num2
// }
// console.log(sum(12,22))
// setInterval(()=>{
//     console.log("hallollakd")
// },7000)
// let i = 1;
// let an = setInterval(()=>{
//     console.log(i);
//     i++
// },1000)
// if(i===10){
//     clearInterval((an)=>{
//       console.log("and")  
//     })
//}

// let id = setInterval(function () {
//     console.log("Hello");
//   }, 1000);
//   let id2 = setInterval(function () {
//     console.log("Hello World");
//   }, 1000);
//   setTimeout(function () {
//     clearInterval(id);
//   }, 5000);
  

// let ali = setInterval(()=>{
//     console.log("alisher")
// },1000);
// let afjal = setInterval(()=>{
//     console.log("afjal......")
// },1000);
// let abdul = setInterval(()=>{
//     console.log("abdul")
// },1000)

// setInterval(()=>{
//     clearInterval(ali)
// },1000)
// setInterval(()=>{
//     clearInterval(afjal)
// },4000)
// setInterval(()=>{
//     clearInterval(abdul)
// },1000)

// function sum(num1,num2,cb){
//     cb(num1,num2)
    
// }
// function add(num1,num2){
//     console.log(num1+num2)
// }
// function max(num1,num2){
//     console.log(Math.max(num1,num2))
// }
// sum(12,21,add)
// sum(12,21,max)


// Question 1
// Print 1 to 10 using ++ operator
// let a = 1;
// console.log(a)
// console.log(++a)
// console.log(++a)
// console.log(++a)
// console.log(++a)
// console.log(++a)
// console.log(++a)
// console.log(++a)
// console.log(++a)
// console.log(++a)


// Question 2
// Print 10 to 1 using -- operator
// let b = 10;
// console.log(b);
// console.log(--b);
// console.log(--b);
// console.log(--b);
// console.log(--b);
// console.log(--b);
// console.log(--b);
// console.log(--b);
// console.log(--b);
// console.log(--b);

// Question 3
// Check output of following in console

// 1+1
//console.log(1+1);
// 1+200
//console.log(1+200)
// 200+"300"
//console.log(200+"300")
// "learnjavascript" + 400
//console.log("learnjavascript" + 400)
// Question 4
// Check result of following

// 2 === 2
//console.log(2===2)//true
// 2 == "2"
//console.log(2=="2") // true
// 2 === +"2"
//console.log(2 === +"2")//true
// "learnjavascript" == "learnjavascript"
//console.log("learnjavascript" == "learnjavascript")//true
// "LearnJavascript" == "learnjavascript"
// console.log("LearnJavascript" == "learnjavascript")//false
// // 0.3 == 0.30
// console.log(0.3 == 0.30)//true
// // 1.0 == 1
// console.log(1.0==1)// true
// // 1.0 === 1
// console.log(1.0===1)//true
// // Question 5
// Create 5 variables for your bank account details. It would be better if you use let, const and var all 3
// let name = "alisher";
// const accuntNumber = 37364786358;
// let ifscCode = "hsg63"

// Question 6
// Write any code and explain that code using multi line comment

// Question 7
// Write difference between Process and Thread

// Question 8
// Write differences between let, const and var

// Question 9
// Give 1 example of each operator with expected output:

// **
// %
// !=
// !==
// <=
// >=
// Question 10
// Write in your own language. What is JavaScript? Explain in detail.

// for(let i =1;i<=100 ;i++){
//     if(i%2===0){
//         console.log(i)
//     }
// }
// let ans= Number(prompt("way did sirias print"));
// for(let i =1;i<=10;i++){
//     console.log(i*ans)
// }

// for(let i = 5; i>=1 ;i--){
//     let str = "";
//     for(let j =i ; j<=5 ; j++){
//         str = str+"*"
       
//     }
//     console.log(str)
// }
// let i =1;
// while(i<=10){
//     console.log(i);
//     i++
// }


// let a = 1;
// do{
//     console.log(a);
//     a++
// }while(a<=12);

// let weekday = "sunday";
// switch (weekday)    {
//     case "sunday",
//     console.log("sunday"):
//     break;
//     case "monday",
//     console.log("monday"):
//     break
//     default :
//         console.log("mja")
    
// }

// function sum(a,b){
//     return a+b
// }
// console.log(sum(12,23))

// {let sum = function(a,b){
//     return a+b
// }
// console.log(sum(14,45))}

// {
//     let ans = sum((a,b)=>a+b);
// console.log(sum(12,32))}

// function string(str,cb){
//     cb(str)
//     console.log("hi")
// }
// function strd(str){
//     console.log("hallo1")
// }
// string("hallo",strd)

// setTimeout(()=>{
//     console.log("hallo")
// },3000)
// let ans1 = Number(prompt("kha se start karna hh"))
// let ans = setInterval(()=>{
//     console.log(ans1)
//     ans1++
//     if(ans1 === 10){
//         clearInterval(ans)
//     }
// },2000)

// let num1 = 19;
// let num2 = 76;
// let prom = new Promise((resolve,reject)=>{
//     if(num2>num1){
//         resolve();
//     }else{
//         reject();
//     }
// })
// prom.then(()=>{
//     return fetch("https://restcountries.com/v3.1/name/india");
// })
// .then((response)=>{
//     return response.json()
// })
// .then((response)=>{
//     console.log(response[0].capital)
// })
// .catch(()=>{
//     console.log("Error")
// })

// function test(num1,cb,cb1){
//     if(num1 % 2=== 0){
//         cb();
//     }else{
//         cb1();
//     }
// }
// function even(){
//     console.log("even")
// }
// function odd(){
//     console.log("odd")
// }
// test(22,even,odd)

// Question 5
// Ek function bnana hai jise 3 arguments pass krne hain 
// function test(num1, num2, num3) {}

// Agar all 3 arguments undefined ni hai to ek function return krna hai jo max of 3 numbers btayega 

// Otherwise ek function return krega jo only Hello World print krega
// function test(num1,num2,num3){
//     if(num1 === undefined && num2=== undefined && num3 === undefined){
//         return function(a,b,c){
//             let max = a;
//             if(b > c){
//                 max = b;
//             } else if(c>a){
//                 max = c
//             }
//             console.log(max)
//         }
//     }else{
//         return function(){
//             console.log("hallo")
//         }
//     }
// }
// let max = test(5);
// max(12,34,56)

// Using 2 setInterval functions ye print krvana hai output 
// 1
// 2
// ==
// 3
// 4
// ====
// 5
// 6
// ======
// 7
// 8
// ========
// 9
// 10
// ==========
// let i = 1;
// const intervalId1 = setInterval(()=>{
// console.log(i)
// i++
// if(i ===11){
//   clearInterval(intervalId1)
// }
// },1000)
// const intervalId2 = setInterval(()=>{
//   let str = "";
//     for (let j = 0; j < i; j++) {
//       str += "=";
//     }
//     console.log(str)
//     if(i===10){
//       clearInterval(intervalId2)
//     }
// },2000)
// setTimeout(()=>{
//   clearTimeout(intervalId2)
//},10000)

// Iske bad kuch b print ni hona chahiye and dono setInterval band hone chahiye

//HH:MM:SS me time print krvana hai. Ye question krlo sb phle using setInterval
// let HH = 1;
// let MM = 0;
// let SS = 0;
// let format = 12;
// setInterval(function () {
//   ++SS;
//   if (SS === 60) {
//     ++MM;
//     SS = 0;
//   }else if(MM === 60){
//     HH++
//     MM = 0
//   }else if(HH===12){
//     HH= 0
//   }
//   console.log(`${HH}:${MM}:${SS}`);
// }, 1000)
//Hello World Print krvana hai 10 times using setInterval and 10 seconds bad print hona bad ho jana chahiye
// let id = setInterval(()=>{
//     console.log("hello world");
//     },1000)
// setTimeout(()=>{
//     clearInterval(id)
// },10000)


// Question 6. Ek function bnana hai jise aap date of birth year pass kroge to vo apko age return krega

// function calculateAge(birthYear){
//     const cy = new Date().getFullYear();
//     let myAge = cy-birthYear
//     return myAge
// }
// console.log(calculateAge(2001))

//Question 8 function expression and function declaration and arrow function me difference likhne hain
// function declaration
// sum(12,32)
// function sum(a,b){
//     console.log(a+b)
// }
// function declaration ko hamm function ko pehle bhi call kar skte h


//function expression
// let multi = function(a,b){
//     console.log(a*b)
// }
// multi(1,2)
// function expression ko hm pehle call nhi kar skte hh 

// arrow function
// let add =((a,b)=>{
//     console.log(a+b);
// })
// add(12,34);

// let sum = ((a,b)=>console.log(a+b));
// sum(12,98);
// arrow function ko bhi pehle call nhi kar skte hh
// and arrow function me agr ak line ka code likhna ho to curly bareses lagane ki bhi jarurat nhi hh


 