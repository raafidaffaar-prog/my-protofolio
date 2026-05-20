/* =========================
   PORTFOLIO PREMIUM JS
========================= */

/* CARD EFFECT */

const card = document.querySelector(".card3d");
const glow = document.querySelector(".glow");

if (card && glow) {
  document.addEventListener("mousemove", (e) => {
    window.requestAnimationFrame(() => {
      const x = (window.innerWidth / 2 - e.pageX) / 30;
      const y = (window.innerHeight / 2 - e.pageY) / 30;

      card.style.transform = `
        rotateY(${x}deg)
        rotateX(${y}deg)
        translateY(-10px)
        scale(1.03)
      `;

      glow.style.left = `${e.pageX / 6}px`;
      glow.style.top = `${e.pageY / 6}px`;
    });
  });

  document.addEventListener("mouseleave", () => {
    card.style.transform = `
      rotateY(0deg)
      rotateX(0deg)
      translateY(0px)
      scale(1)
    `;
  });
}

/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

/* =========================
   TYPING EFFECT
========================= */

const text = "Daffa Ar Raafi";
const typing = document.querySelector(".hero-text span");
let index = 0;

function typeText() {
  if (!typing) return;

  if (index < text.length) {
    typing.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, 120);
  }
}

if (typing) {
  typing.innerHTML = "";
  typeText();
}

/* =========================
   SCROLL ANIMATION
========================= */

const reveals = document.querySelectorAll(
  ".hero-text, .card3d, .edu-card, .exp-card, .hobby-card, .skills span"
);

function revealSection() {
  reveals.forEach((item) => {
    const windowHeight = window.innerHeight;
    const revealTop = item.getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      item.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealSection);
revealSection();

/* =========================
   PARTICLE EFFECT
========================= */

const body = document.body;

for (let i = 0; i < 25; i++) {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");

  const size = Math.random() * 20 + 10 + "px";
  bubble.style.width = size;
  bubble.style.height = size;
  bubble.style.left = Math.random() * innerWidth + "px";
  bubble.style.animationDuration = Math.random() * 8 + 4 + "s";

  body.appendChild(bubble);
}

/* =========================
   AUTO TEXT CHANGE
========================= */

const roles = [
  "Front-End Developer",
  "UI/UX Designer",
  "Web Designer",
  "Mahasiswa Informatika"
];

let roleIndex = 0;
const roleText = document.querySelector(".hero-text h2");

if (roleText) {
  setInterval(() => {
    roleIndex++;
    if (roleIndex >= roles.length) {
      roleIndex = 0;
    }

    roleText.style.opacity = "0";
    setTimeout(() => {
      roleText.innerHTML = roles[roleIndex];
      roleText.style.opacity = "1";
    }, 500);
  }, 3000);
}

/* =========================
   NAVBAR SHADOW
========================= */

const navbar = document.querySelector(".navbar");
if (navbar) {
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("sticky", window.scrollY > 20);
  });
}