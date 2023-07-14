const fs = require("fs");
const http = require("http");
const port = 9002;
const ip   = "localhost"
const url = require("url")
const hotel = JSON.parse(fs.readFileSync("hotel.txt",{encoding : "utf-8"}));
const student = JSON.parse(fs.readFileSync("student.txt",{encoding : "utf-8"}));


const server = http.createServer((req,resp)=>{
    const urls = req.url.split("/");
    if(urls.includes("hotel")){
        sendHotalData(urls,resp);
     }if(urls.includes("student")){
        sendStudentData(urls,resp)
     }
        resp.end()
     
})

server.listen(port,ip,()=>console.log("server start"))

function sendHotalData(urls,resp){
    if(urls[urls.length-1] === "hotel"){
        resp.write(JSON.stringify(hotel))
    }else if(+urls[urls.length-1]){
        const sendbyid = hotel.filter((ho)=>ho.id === +urls[urls.length-1])
        if(sendbyid.length > 0){
            resp.write(JSON.stringify(sendbyid))
        }else{
            resp.write("hotel is note found")
        }
    }
}

function sendStudentData(urls,resp){
    if(urls[urls.length-1]==="student"){
        resp.write(JSON.stringify(student))
    }else if(+urls[urls.length-1]){
        const sendbyid = student.filter((stu)=>stu.id === +urls[urls.length-1]);
        if(sendbyid.length > 0){
            resp.write(JSON.stringify(sendbyid))
        }else{
            resp.write("student is note found")
        }
    }
}