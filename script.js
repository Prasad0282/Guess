"use strict";
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "💥 correct Number!";
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;
// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);
let secretNumber = Math.trunc(Math.random() * 20 + 1);
//document.querySelector(".number").textContent = secretNumber;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  //when no input
  if (!guess) {
    // console.log(
    //   (document.querySelector(".message").textContent = "🛑 NO Number")

    // );
    displayMessage("🛑 NO Number");
  }
  // when player wins
  else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "🍾 Correct Guess";
    displayMessage("🍾 Correct Guess");
    if (guess === secretNumber) {
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
      }
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      displayMessage(guess > secretNumber ? "Too High 📈" : "Too Low 📉");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent =
      displayMessage("💥 You're Lost in the game");
      document.querySelector(".score").textContent = 0;
    }
  }
});
//document.querySelector(".guess").value;

// when guess is too High
//   } else if (guess > secretNumber) {
//     if (score > 0) {
//       document.querySelector(".message").textContent = "Too High 📈";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent =
//         "💥 You're Lost in the game";
//       document.querySelector(".score").textContent = 0;
//     }
//   }
//   // when guess is too Low
//   else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "Too Low 📉";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent =
//         "💥 You're Lost in the game";
//       document.querySelector(".score").textContent = 0;
//     }
//   }
// });
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".score").textContent = score;
  //   document.querySelector(".highscore").textContent = highscore;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  // document.querySelector(".message").textContent = "try Guessing...";
  displayMessage("try Guessing...");
  if (document.querySelector(".again")) {
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
  }
});
