const phrases = [
    "A passionate Software Developer 🚀",
    "An AI/ML Enthusiast 🤖"
  ];
  
  let currentPhrase = 0;
  let currentChar = 0;
  const typingSpeed = 100;
  const delayBetweenPhrases = 1000;
  const typingTarget = document.getElementById("typing");
  
  function type() {
    if (currentChar <= phrases[currentPhrase].length) {
      typingTarget.textContent = phrases[currentPhrase].substring(0, currentChar);
      currentChar++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, delayBetweenPhrases);
    }
  }
  
  function erase() {
    if (currentChar > 0) {
      typingTarget.textContent = phrases[currentPhrase].substring(0, currentChar - 1);
      currentChar--;
      setTimeout(erase, typingSpeed / 2);
    } else {
      currentPhrase = (currentPhrase + 1) % phrases.length;
      setTimeout(type, 300);
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    type();
  });
  