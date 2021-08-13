let message = document.querySelector(".message");
let highScore = document.querySelector(".highscore");
let check = document.querySelector(".check");
let heading = document.querySelector(".heading");
let body = document.querySelector("body");

let secretNum = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScoreText = 0;
console.log(secretNum, typeof secretNum);

let number = document.querySelector(".number");

check.addEventListener("click", () => {
  let guess = Number(document.querySelector(".guess").value);

  // Run when Guess is Right
  if (guess === secretNum) {
    if (score > 0) {
      number.textContent = secretNum;
      number.style.fontSize = "7rem";
      number.style.width = "28rem";
      body.style.backgroundColor = "#2ed573";
      message.textContent = "Congratulations!";
      heading.textContent = "You Win! 😍";
      score = score - 1;

      if (score > highScoreText) {
        highScoreText = score;
        highScore.textContent = highScoreText;
      }
    }
    // Run when guess is not a Number
  } else if (!guess) {
    message.textContent = "No Number!";
    score = score - 1;

    // Run when guess is greater than secret Number
  } else if (guess > secretNum) {
    message.textContent = "Too High!";
    score = score - 1;

    // Run when guess is lower than secret Number
  } else if (guess < secretNum) {
    message.textContent = "Too Low!";
    score = score - 1;
  }

  if (score < 0) {
    message.textContent = "Better Luck next Time!";
    score = 0;
    body.style.backgroundColor = "#f53b57";
    heading.textContent = "You Loose! 😢";
  }

  console.log("score = ", score);
  document.querySelector(".score").textContent = score;
});

let again = document.querySelector(".again");

again.addEventListener("click", () => {
  message.textContent = "Start guessing...";
  heading.textContent = "Guess My Number!";
  number.style.fontSize = "6rem";
  number.style.width = "15rem";
  body.style.backgroundColor = "#0fbcf9";
  number.textContent = "?";

  secretNum = Math.floor(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".score").textContent = score;
  console.log("Again", secretNum);

  let guess = (document.querySelector(".guess").value = "");
});
