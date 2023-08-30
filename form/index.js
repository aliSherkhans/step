let name = document.forms.RegForm.Name.value;
let age  = +document.forms.RegForm.age.value;
let email  = document.forms.RegForm.Email.value;
let address = document.forms.RegForm.Address.value;
let password = document.forms.RegForm.Password.value;
let subject  = document.forms.RegForm.Subject.value;


if (!name) {
    window.alert("Please enter your name properly.")
    return false;
  }
  if ([...name].length > 10) {
    window.alert("Name character length should less than or equal to 10");
    return false;
  }

  if(!age){
    window.alert("Please enter your age properly.")
    return false;
  }

  if(age > 18 && agr <45){
    window.alert("Are you eligible to fill out the form?")
  }