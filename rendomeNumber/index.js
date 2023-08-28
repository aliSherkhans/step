const randomNumber = Math.trunc(Math.random() * 10) + 1;
const totalAttempt = 0;
const maxAttempt = 10;
let highestScore = 0;
let currentScore = 10;
console.log(randomNumber);
function check() {
  const diff = Math.abs(
    randomNumber - Number(document.getElementById("num").value)
  );
  if (diff === 0) {
    document.getElementById("message").textContent =
      "Congratulations!!! Magic Number is " + randomNumber;
    if (currentScore > highestScore) {
      highestScore = currentScore;
    }
    document.getElementById("highestScore").textContent = highestScore;
    document.getElementById("currentScore").textContent = currentScore;
    return;
  } else if (diff > 2) {
    document.getElementById("message").textContent =
      "You are very far from the correct number";
  } else if (diff <= 2) {
    document.getElementById("message").textContent =
      "You are very near to the number";
  }
  if (totalAttempt === maxAttempt) {
    document.getElementById("message").textContent = "You have lost the game";
  }
  --currentScore;
  document.getElementById("currentScore").textContent = currentScore;
}