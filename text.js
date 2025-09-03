const carousel = document.getElementById("carousel");
const scrollThumb = document.getElementById("scrollThumb");
const scrollTrack = document.querySelector(".scroll-indicator-track");

let isDragging = false;
let startX;
let thumbStartLeft;
let maxThumbLeft;

function updateThumbPosition() {
  const scrollPercent =
    carousel.scrollLeft / (carousel.scrollWidth - carousel.clientWidth);
  const trackWidth = scrollTrack.offsetWidth;
  const thumbWidth = scrollThumb.offsetWidth;

  const thumbLeft = scrollPercent * (trackWidth - thumbWidth);
  scrollThumb.style.left = `${thumbLeft}px`;
}

function updateActiveCard() {
  const cards = document.querySelectorAll(".stat-card");
  const carouselRect = carousel.getBoundingClientRect();
  const carouselCenter = carouselRect.left + carousel.offsetWidth / 2;

  let closestCard = null;
  let closestDistance = Infinity;

  cards.forEach((card) => {
    const cardRect = card.getBoundingClientRect();
    const cardCenter = cardRect.left + cardRect.width / 2;
    const distance = Math.abs(carouselCenter - cardCenter);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestCard = card;
    }
  });

  // Remove active from all cards
  cards.forEach((card) => card.classList.remove("active"));

  // Add active to the closest card
  if (closestCard) {
    closestCard.classList.add("active");
  }
}

// Sync thumb + active card on scroll
carousel.addEventListener("scroll", () => {
  updateThumbPosition();
  updateActiveCard();
});

// Thumb dragging logic
scrollThumb.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.clientX;
  thumbStartLeft = scrollThumb.offsetLeft;
  maxThumbLeft = scrollTrack.offsetWidth - scrollThumb.offsetWidth;
  document.body.style.userSelect = "none";
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  const dx = e.clientX - startX;
  let newLeft = thumbStartLeft + dx;
  newLeft = Math.max(0, Math.min(newLeft, maxThumbLeft));

  scrollThumb.style.left = `${newLeft}px`;

  const scrollPercent = newLeft / maxThumbLeft;
  carousel.scrollLeft =
    scrollPercent * (carousel.scrollWidth - carousel.clientWidth);
  updateActiveCard(); // Update active during drag
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  document.body.style.userSelect = "";
});

// Handle window resize
window.addEventListener("resize", () => {
  updateThumbPosition();
  updateActiveCard();
});

// Initial sync
window.addEventListener("load", () => {
  updateThumbPosition();
  updateActiveCard();
});
