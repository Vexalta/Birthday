// Floating Hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "🩷";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    document.getElementById("hearts-container").appendChild(heart);
  
    setTimeout(() => {
      heart.remove();
    }, 6000);
  }
  setInterval(createHeart, 500);
  
  // Typewriter Effect
  const message = "I love you so much bby, headpats for birthday girl! 🥳";
  let i = 0;
  
  function typeWriter() {
    if (i < message.length) {
      document.getElementById("typewriter").innerHTML += message.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    }
  }
  
  // Landing Screen Logic
  document.getElementById("start-btn").addEventListener("click", (e) => {

    const landing = document.getElementById("landing");
    const mainContent = document.getElementById("main-content");
  
    landing.classList.add("fade-out");
    setTimeout(() => {
      landing.style.display = "none";
      mainContent.style.display = "block";
      mainContent.classList.add("fade-in");
  
      document.getElementById("bg-music").play().catch(err => console.log("Autoplay blocked"));
      typeWriter();
    }, 1000);
  });

  document.addEventListener("DOMContentLoaded", () => {
    // Open sidebar
    document.getElementById("hamburger").addEventListener("click", () => {
      document.getElementById("sidebar").classList.add("open");
    });
  
    // Close sidebar
    document.getElementById("close-sidebar").addEventListener("click", () => {
      document.getElementById("sidebar").classList.remove("open");
    });
  });

  const bgMusic = document.getElementById("bg-music");

  bgMusic.play().then(() => {
    console.log("Audio playing");
  }).catch(err => {
    console.log("Audio playback failed:", err);
  });

  const popup = document.getElementById('loveLetterPopup');
  const openBtn = document.querySelector('.love-letter-button');
  const closeBtn = document.getElementById('closePopup');

  openBtn.addEventListener('click', () => {
    popup.style.display = 'flex';
  });

  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  // Close popup if clicking outside card
  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.style.display = 'none';
    }
  });