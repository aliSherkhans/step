const count = +prompt("Total family members?");
const members = [];
for (let i = 1; i <= count; i++) {
  alert(`Enter details for member : ${i}`);
  const name = prompt("What is your name?");
  const image = prompt("Image name");
  const about = prompt("About");
  members.push({
    name,
    image,
    about,
  });
}
let buttons = "";
for (let value of members) {
  buttons =
    buttons +
    `<button type='submit' onclick="showImage('${value.name}')"> ${value.name}</button>`
}
document.getElementById("members").innerHTML = buttons;

function showImage(name) {
  const member = members.filter((value) => {
    return value.name === name;
  })[0];
  document.getElementById("personName").textContent = member.name;
  document.getElementById("personImg").hidden = false;
  document.getElementById("personImg").src = member.image;
  document.getElementById("personAbout").textContent = member.about;
}