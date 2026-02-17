const phrases = [
  "I solve hard problems ⚙️",
  "Competitive Programmer ♟️",
  "Machine Learning & CV Builder 🤖",
  "Software Engineer in the making 🚀"
];

let currentPhrase = 0;
let currentChar = 0;
const typingTarget = document.getElementById("typing");

function type() {
  if (currentChar <= phrases[currentPhrase].length) {
    typingTarget.textContent =
      phrases[currentPhrase].substring(0, currentChar++);
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1200);
  }
}

function erase() {
  if (currentChar > 0) {
    typingTarget.textContent =
      phrases[currentPhrase].substring(0, --currentChar);
    setTimeout(erase, 60);
  } else {
    currentPhrase = (currentPhrase + 1) % phrases.length;
    setTimeout(type, 300);
  }
}

document.addEventListener("DOMContentLoaded", type);
