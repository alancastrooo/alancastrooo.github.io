const cards = document.querySelectorAll('.project-card');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

/* NAVBAR */
if (hamburger) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

/* SLIDER */
let index = 0;

function showCard(i) {
  cards.forEach(card => card.classList.remove('active'));
  cards[i].classList.add('active');
}

nextBtn?.addEventListener('click', () => {
  index = (index + 1) % cards.length;
  showCard(index);
});

prevBtn?.addEventListener('click', () => {
  index = (index - 1 + cards.length) % cards.length;
  showCard(index);
});
