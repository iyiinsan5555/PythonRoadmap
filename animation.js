const texts = [
  "👋 Welcome, Future Programmer!",
  "💡 Ready to learn something new?",
  "🚀 Let's start your coding journey!"
];

let textIndex = 0;
let charIndex = 0;
const h1 = document.querySelector('h1');

function typeTitle() {
  const currentText = texts[textIndex];
  if (charIndex <= currentText.length) {
    h1.innerHTML = currentText.slice(0, charIndex);
    charIndex++;
    setTimeout(typeTitle, 100);
  } else {
    // pause before next text
    setTimeout(() => {
      charIndex = 0;
      textIndex = (textIndex + 1) % texts.length; // loop through texts
      typeTitle();
    }, 1500);
  }
}

typeTitle();
