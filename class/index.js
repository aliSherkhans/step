let answer = document.getElementById("massege");

     function calculate(sym) {
       const inputnum1 = +document.getElementById("input1").value;
       const inputnum2 = +document.getElementById("input2").value;
       if (sym === "+") {
         answer.textContent = inputnum1 + inputnum2;
       } else if (sym === "-") {
         answer.textContent = inputnum1 - inputnum2;
       } else if (sym === "*") {
         answer.textContent = inputnum1 * inputnum2;
       } else if (sym === "/") {
         answer.textContent = inputnum1 / inputnum2;
       }
     }

