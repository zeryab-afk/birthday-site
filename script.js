let currentStep = 1;
const totalSteps = 5;
let userName = "My Love";

// Initialize Particles.js
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 40, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#f06292" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.6, "random": true, "anim": { "enable": true, "speed": 1, "opacity_min": 0.1 } },
    "size": { "value": 6, "random": true, "anim": { "enable": true, "speed": 2, "size_min": 0.1 } },
    "line_linked": { "enable": true, "distance": 150, "color": "#f8bbd0", "opacity": 0.4, "width": 1.5 },
    "move": { "enable": true, "speed": 1.5, "random": true, "straight": false, "out_mode": "out", "attract": { "enable": true, "rotateX": 600, "rotateY": 1200 } }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" } },
    "modes": { "grab": { "distance": 160, "line_linked": { "opacity": 0.5 } }, "push": { "particles_nb": 4 } }
  },
  "retina_detect": true
});

// Show first step
document.getElementById(`step${currentStep}`).classList.add("active");
updateProgressBar();

function nextStep() {
  if (currentStep < totalSteps) {
    document.getElementById(`step${currentStep}`).classList.remove("active");
    currentStep++;
    document.getElementById(`step${currentStep}`).classList.add("active");
    updateProgressBar();
    if (currentStep === 4) startTypingMessage();
  }
}

function saveName() {
  const input = document.getElementById("nameInput").value.trim();
  if (input) {
    userName = input;
    document.getElementById("displayName").innerText = userName;
    document.getElementById("heartName").innerText = userName;
    document.getElementById("finalName").innerText = userName;
    nextStep();
  } else {
    alert("Please enter a name!");
  }
}

function updateProgressBar() {
  const progress = (currentStep / totalSteps) * 100;
  document.getElementById("progressBar").style.width = `${progress}%`;
}

// Floating Hearts
function createHearts() {
  const container = document.getElementById("floatingHearts");
  for (let i = 0; i < 10; i++) {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${2 + Math.random() * 3}s`;
    container.appendChild(heart);
    setTimeout(() => container.removeChild(heart), 5000);
  }
}

// Typing effect
const message = "Happy Birthday, my love! 🎉💖 May your day be as magical as your smile!";
function startTypingMessage() {
  const textContainer = document.getElementById("typingText");
  let i = 0;
  textContainer.innerText = "";
  const typing = setInterval(() => {
    textContainer.innerText += message[i];
    i++;
    if (i >= message.length) clearInterval(typing);
    document.getElementById("typedMessage").classList.add("show");
  }, 100);
}

// Social share (simple alert)
function shareOnSocial(platform) {
  alert(`Share this love on ${platform.toUpperCase()}! 💖`);
}
