let Pin =1234  // your frist time password
    let newpin;
   let cruntbalence = document.getElementById("balance").innerHTML = 1234


   function changepin(newpin){
      Pin = newpin
   }
  document.getElementById("changePin").addEventListener("click",()=>{
    let oldPin = Number(prompt("what is your oldPin"))
    document.getElementById("password").hidden = true
    if(Pin == oldPin){
        newpin = Number(prompt("what is your newpin "))
        changepin(newpin)
    }else{
        alert("plese give a valid pin")
    }
  })


 document.getElementById("whithdrol").addEventListener("click",()=>{
    let askPin = Number(prompt("what is your pin"))
    let  comparePin = newpin || Pin
    if(askPin ==  comparePin ){
    let amount = Number(prompt("how many amount withdrol"))
    if(cruntbalence >=amount){
        cruntbalence = cruntbalence - amount
    document.getElementById("balance").innerHTML = `${cruntbalence}`
    }else{
        alert("etna amunt aapke pass nhi he ")
    }
}else{
    alert("plese give a valid pin ")
}
 })


document.getElementById("deposite").addEventListener("click",()=>{
    let askPin = Number(prompt("what is your pin"))
    let  comparePin = newpin || Pin
    if(askPin ==  comparePin ){
      let amount = Number(prompt("how many amount deposite"))
      cruntbalence = cruntbalence + amount
    document.getElementById("balance").innerHTML = `${cruntbalence}`  
    }else{
    alert("plese give a valid pin ")
}
})
 
document.getElementById("transfer").addEventListener("click",()=>{
    let askPin = Number(prompt("what is your pin"))
    let  comparePin = newpin || Pin
    if(askPin ==  comparePin ){
    let amount = Number(prompt("how many amount transfer"))
    if(cruntbalence >=amount){
        prompt("where are transfer many give a account number")
        cruntbalence = cruntbalence - amount
    document.getElementById("balance").innerHTML = `${cruntbalence}`
    }else{
        alert("etna amunt aapke pass nhi he ")
    }
}else{
    alert("plese give a valid pin ")
}
})

