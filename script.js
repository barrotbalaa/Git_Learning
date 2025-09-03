// document.addEventListener("DOMContentLoaded", () => {
//   const landingSection = document.getElementById("landing");
//   const headerSection = document.getElementById("header");
//   const progressBar = document.getElementById("progress-bar");
//   const landingImage = document.getElementById("landing-image");

//   // ✅ Disable scroll initially
//   document.body.classList.add("no-scroll");

//   // Hide header initially
//   headerSection.classList.add("hidden");

//   const landingImages = [
//     "./images/Zustpe1.png",
//     "./images/Zustpe2.png",
//     "./images/Zustpe3.png",
//     "./images/Zustpe4.png",
//     "./images/Zustpe5.png",
//     "./images/Zustpe6.png",
//     "./images/Zustpe7.png",
//     "./images/Zustpe8.png",
//   ];

//   // Preload images
//   landingImages.forEach((src) => {
//     const img = new Image();
//     img.src = src;
//   });

//   // ===== Image Animation =====
//   let currentLandingImage = 0;
//   const imageDisplayTime = 400;

//   function playLandingImages(callback) {
//     function showNextImage() {
//       if (currentLandingImage < landingImages.length) {
//         landingImage.classList.remove("visible");
//         setTimeout(() => {
//           landingImage.src = landingImages[currentLandingImage];
//           landingImage.classList.add("visible");
//           currentLandingImage++;
//           setTimeout(showNextImage, imageDisplayTime);
//         }, 100);
//       } else if (typeof callback === "function") {
//         callback();
//       }
//     }

//     landingImage.src = landingImages[0];
//     landingImage.classList.add("visible");
//     currentLandingImage = 1;
//     setTimeout(showNextImage, imageDisplayTime);
//   }

//   // ===== Progress Bar Animation =====
//   function animateProgressBar(duration, callback) {
//     let progress = 0;
//     const steps = 100;
//     const intervalTime = duration / steps;

//     const interval = setInterval(() => {
//       progress++;
//       progressBar.style.width = `${progress}%`;

//       if (progress >= 100) {
//         clearInterval(interval);
//         if (typeof callback === "function") callback();
//       }
//     }, intervalTime);
//   }

//   // ===== Start Combined Landing Sequence =====
//   function startLandingSequence() {
//     let imageDone = false;
//     let progressDone = false;

//     function checkIfDone() {
//       if (imageDone && progressDone) {
//         transitionToHeader();
//       }
//     }

//     playLandingImages(() => {
//       imageDone = true;
//       checkIfDone();
//     });

//     animateProgressBar(4000, () => {
//       progressDone = true;
//       checkIfDone();
//     });
//   }

//   // ===== Transition Logic =====
//   function transitionToHeader() {
//     // ✅ Enable scroll after loading completes
//     document.body.classList.remove("no-scroll");

//     landingSection.style.display = "none";
//     headerSection.classList.remove("hidden");
//     headerSection.scrollIntoView({ behavior: "smooth" });

//     // Footer logic
//     setTimeout(() => {
//       const footerLogo = document.querySelector(".footer-logo");

//       if (footerLogo) {
//         footerLogo.classList.remove("hidden");
//         footerLogo.classList.add("visible");

//         const footerImages = [...landingImages];

//         footerImages.forEach((src) => {
//           const img = new Image();
//           img.src = src;
//         });

//         let footerImage = footerLogo.querySelector("img");
//         if (!footerImage) {
//           footerImage = document.createElement("img");
//           footerLogo.appendChild(footerImage);
//         }

//         footerImage.style.width = "80vw";
//         footerImage.style.height = "auto";

//         let currentFooterImage = -1;
//         const footerImageTime = 500;

//         function cycleFooterImage() {
//           footerImage.classList.remove("visible");

//           setTimeout(() => {
//             currentFooterImage = currentFooterImage + 1;
//             footerImage.src = footerImages[currentFooterImage];
//             footerImage.classList.add("visible");

//             if (currentFooterImage < footerImages.length - 1) {
//               setTimeout(cycleFooterImage, footerImageTime);
//             }
//           }, 300);
//         }

//         cycleFooterImage();
//       }
//     }, 800);
//   }

//   // Start everything
//   startLandingSequence();
// });
// ------------------------------ this is landing page-------------------------------

// === Landing Page Animation ===
document.addEventListener("DOMContentLoaded", () => {
  const landingSection = document.getElementById("landing");
  const headerSection = document.getElementById("header");
  const progressBar = document.getElementById("progress-bar");
  const landingImage = document.getElementById("landing-image");
  // Set initial width and height for landing page
  landingSection.style.width = "100vw"; // Full viewport width
  landingSection.style.height = "100vh"; // Full viewport height
  // const landingSection = document.getElementById("landing");
  landingSection.style.paddingTop = "20px"; // nudges content down by 20px
  landingImage.style.paddingTop = "70px";

  // Optionally set header section too (maybe hidden initially)
  headerSection.style.width = "100vw";
  headerSection.style.height = "auto"; // Or some fixed height

  const landingImages = [
    "./images/Zustpe1.png",
    "./images/Zustpe2.png",
    "./images/Zustpe3.png",
    "./images/Zustpe4.png",
    "./images/Zustpe5.png",
    "./images/Zustpe6.png",
    "./images/Zustpe7.png",
    "./images/Zustpe8.png",
  ];

  // === Disable scroll during loading ===
  document.body.style.overflow = "hidden";

  // Preload images
  landingImages.forEach((src) => {
    const img = new Image();
    img.src = src;
  });

  let currentLandingImage = 0;
  const imageDisplayTime = 2000 / landingImages.length;

  function changeLandingImage() {
    if (currentLandingImage < landingImages.length) {
      landingImage.classList.remove("visible");
      setTimeout(() => {
        landingImage.src = landingImages[currentLandingImage];
        landingImage.classList.add("visible");
        currentLandingImage++;
        if (currentLandingImage < landingImages.length) {
          setTimeout(changeLandingImage, imageDisplayTime);
        }
      }, 30);
    }
  }

  landingImage.src = landingImages[0];
  landingImage.classList.add("visible");
  setTimeout(changeLandingImage, imageDisplayTime);

  let progress = 0;
  const steps = 100;
  const intervalTime = 2000 / steps;

  const progressInterval = setInterval(() => {
    progress++;
    progressBar.style.width = `${progress}%`;

    if (progress >= 100) {
      clearInterval(progressInterval);
      transitionToHeader();
    }
  }, intervalTime);

  function transitionToHeader() {
    landingSection.style.display = "none";
    headerSection.classList.remove("hidden");

    // === Re-enable scroll ===
    document.body.style.overflow = "auto";

    // Scroll to header smoothly
    headerSection.scrollIntoView({ behavior: "smooth" });
  }
});
// ------------------ THIS IS FOR BUTTON EFFFECT -------------------

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".get-started-button");
  const arrowImg = document.querySelector(".arrow-img");

  if (button && arrowImg) {
    // On hover (mouse enters button)
    button.addEventListener("mouseenter", () => {
      arrowImg.src = "./images/arrow2.png"; // Change to the white arrow
    });

    // On hover out (mouse leaves button)
    button.addEventListener("mouseleave", () => {
      arrowImg.src = "./images/arrow1.png"; // Revert back to the default arrow
    });
  }
});
// ------------------------------ this is profile imagess-------------------------------

document.addEventListener("DOMContentLoaded", () => {
  const bgImages = [
    "./images/bg15.png",
    "./images/bg14.png",
    "./images/bg13.png",
    "./images/bg12.png",
    "./images/bg11.png",
    "./images/bg10.png",
    "./images/bg9.png",
    "./images/bg8.png",
    "./images/bg7.png",
    "./images/bg5.png",
    "./images/bg4.png",
    "./images/bg3.png",
    "./images/bg2.png",
    "./images/bg1.png",
  ];

  // Preload background images
  bgImages.forEach((src) => {
    const img = new Image();
    img.src = src;
  });

  // Animate background
  const founderSection = document.getElementById("founderSection");
  let bgIndex = 0;

  function updateBackground() {
    founderSection.style.backgroundImage = `url('${bgImages[bgIndex]}')`;
    bgIndex = (bgIndex + 1) % bgImages.length;
  }

  updateBackground(); // Initial call
  setInterval(updateBackground, 2000); // Change every 5 seconds
});
// === Background Images Preload ===

document.addEventListener("DOMContentLoaded", () => {
  const backgroundImages = [
    "./images/bg15.png",
    "./images/bg14.png",
    "./images/bg13.png",
    "./images/bg12.png",
    "./images/bg11.png",
    "./images/bg10.png",
    "./images/bg9.png",
    "./images/bg8.png",
    "./images/bg7.png",
    "./images/bg5.png",
    "./images/bg4.png",
    "./images/bg3.png",
    "./images/bg2.png",
    "./images/bg1.png",
  ];

  backgroundImages.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
});

// === Card Stack Scrolling Logic ===
const cardStackContainer = document.getElementById("cardStack");
let cardIndex = 0;
let cardScrollLocked = false;

function updateCardStack() {
  const cards = cardStackContainer.querySelectorAll(".card");

  cards.forEach((card, index) => {
    card.classList.remove("active");

    if (index < cardIndex) {
      const offset = (cardIndex - index) * 20;
      const rotation = -2 * (cardIndex - index);
      const opacity = 0.7 - index * 0.2;
      card.style.transform = `translateY(-${offset}px) rotateZ(${rotation}deg)`;
      card.style.opacity = opacity;
      card.style.zIndex = cardIndex - index;
    } else if (index === cardIndex) {
      card.classList.add("active");
      card.style.transform = `translateY(0) rotateZ(0deg)`;
      card.style.opacity = 1;
      card.style.zIndex = 4;
    } else {
      card.style.transform = `translateY(0) rotateZ(0deg)`;
      // card.style.opacity = 0.7;
      card.style.opacity = 1;
      card.style.zIndex = cards.length - index;
    }
  });

  if (cardIndex === cards.length - 1) {
    setTimeout(() => {
      const strapSection = document.querySelector(".strap");
      if (strapSection) {
        window.scrollTo({ top: strapSection.offsetTop, behavior: "smooth" });
      }
    }, 600);
  }
}

cardStackContainer.addEventListener("wheel", (event) => {
  if (cardScrollLocked) return;

  cardScrollLocked = true;
  setTimeout(() => (cardScrollLocked = false), 600);

  const cards = cardStackContainer.querySelectorAll(".card");

  if (event.deltaY > 0 && cardIndex < cards.length - 1) {
    cardIndex++;
    updateCardStack();
  } else if (event.deltaY < 0 && cardIndex > 0) {
    cardIndex--;
    updateCardStack();
  }
});

updateCardStack(); // Initialize

// === Horizontal Scroll Carousel Logic (Improved) ===
const horizontalCarousel = document.getElementById("carousel");
const scrollThumb = document.getElementById("scrollThumb");
const scrollTrack = document.querySelector(".scroll-indicator-track");

let isDragging = false;
let dragStartX = 0;
let thumbStartLeft = 0;
let maxThumbLeft = 0;

function updateScrollThumbPosition() {
  const scrollRatio =
    horizontalCarousel.scrollLeft /
    (horizontalCarousel.scrollWidth - horizontalCarousel.clientWidth);
  const trackWidth = scrollTrack.offsetWidth;
  const thumbWidth = scrollThumb.offsetWidth;
  const thumbLeft = scrollRatio * (trackWidth - thumbWidth);
  scrollThumb.style.left = `${thumbLeft}px`;
}

function highlightClosestStatCard() {
  const statCards = document.querySelectorAll(".stat-card");
  const centerX =
    horizontalCarousel.getBoundingClientRect().left +
    horizontalCarousel.offsetWidth / 2;

  let closestCard = null;
  let minDist = Infinity;

  statCards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    const cardCenter = rect.left + rect.width / 2;
    const dist = Math.abs(centerX - cardCenter);
    if (dist < minDist) {
      minDist = dist;
      closestCard = card;
    }
  });

  statCards.forEach((card) => card.classList.remove("active"));
  if (closestCard) closestCard.classList.add("active");
}

// Carousel scroll
horizontalCarousel.addEventListener("scroll", () => {
  updateScrollThumbPosition();
  highlightClosestStatCard();
});

// Drag Start
function startDrag(e) {
  isDragging = true;
  dragStartX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
  thumbStartLeft = scrollThumb.offsetLeft;
  maxThumbLeft = scrollTrack.offsetWidth - scrollThumb.offsetWidth;
  document.body.classList.add("no-scroll");
  e.preventDefault();
}

// Drag Move
function duringDrag(e) {
  if (!isDragging) return;

  const clientX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
  let newLeft = thumbStartLeft + (clientX - dragStartX);
  newLeft = Math.max(0, Math.min(newLeft, maxThumbLeft));

  scrollThumb.style.left = `${newLeft}px`;

  const scrollPercent = newLeft / maxThumbLeft;
  horizontalCarousel.scrollLeft =
    scrollPercent *
    (horizontalCarousel.scrollWidth - horizontalCarousel.clientWidth);
  highlightClosestStatCard();

  e.preventDefault();
}

// Drag End
function endDrag() {
  isDragging = false;
  document.body.classList.remove("no-scroll");
}

// Events for mouse and touch
scrollThumb.addEventListener("mousedown", startDrag);
scrollThumb.addEventListener("touchstart", startDrag, { passive: false });
window.addEventListener("mousemove", duringDrag);
window.addEventListener("touchmove", duringDrag, { passive: false });
window.addEventListener("mouseup", endDrag);
window.addEventListener("touchend", endDrag);

// Initial sync
window.addEventListener("resize", () => {
  updateScrollThumbPosition();
  highlightClosestStatCard();
});
window.addEventListener("load", () => {
  updateScrollThumbPosition();
  highlightClosestStatCard();
});

// ------------------------------- this is 2nd page -------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const section = document.querySelector(".container");
  const c1 = document.querySelector(".company-container.company-one");
  const c2 = document.querySelector(".company-container.company-two");
  const c3 = document.querySelector(".company-container.company-three");

  let scrollCount = 0;
  let isLocked = false;
  let inSection = false;
  let scrolling = false;

  let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Toggle visible + moved classes based on step
  function setStep(el, active) {
    el.classList.toggle("visible", active);
    el.classList.toggle("moved", active);
  }

  // Update company containers based on scrollCount
  function updateCompanies() {
    setStep(c1, scrollCount >= 1);
    setStep(c2, scrollCount >= 2);
    setStep(c3, scrollCount >= 3);
    // setStep(c4, scrollCount >= 4);

    // Lock scroll while in intermediate steps, unlock at ends
    if (scrollCount === 0 || scrollCount === 4) {
      unlockScroll();
    } else {
      lockScroll();
    }
  }

  function resetCompanies() {
    scrollCount = 0;
    [c1, c2, c3].forEach((c) =>
      c.classList.remove("visible", "moved", "scroll")
    );
    console.log("Reset companies: scrollCount =", scrollCount);
  }

  function showAllCompanies() {
    scrollCount = 3;
    [c1, c2, c3].forEach((c) => {
      c.classList.add("visible", "moved");
      c.classList.remove("scroll");
    });
    console.log("Show all companies");
  }

  function lockScroll() {
    if (!isLocked) {
      isLocked = true;
      document.body.classList.add("lock-scroll");
      section.classList.add("lock-scroll"); // Add to .container too
      console.log("Scroll locked");
    }
  }

  function unlockScroll() {
    if (isLocked) {
      isLocked = false;
      document.body.classList.remove("lock-scroll");
      section.classList.remove("lock-scroll"); // Remove from .container
      console.log("Scroll unlocked");
    }
  }

  function handleScrollOut() {
    if (inSection) {
      inSection = false;
      unlockScroll();
      [c1, c2, c3].forEach((c) => c.classList.remove("scroll"));
      console.log("Scrolled out of section");
    }
  }

  function stepScroll(isDown) {
    if (scrolling || !inSection || !isLocked) {
      console.log(
        "Scroll skipped: scrolling=",
        scrolling,
        "inSection=",
        inSection,
        "isLocked=",
        isLocked
      );
      return;
    }
    scrolling = true;
    [c1, c2, c3].forEach((c) => c.classList.remove("scroll"));

    if (isDown) {
      if (scrollCount < 3) {
        scrollCount++;
        updateCompanies();

        if (scrollCount === 1) c1.classList.add("scroll");
        else if (scrollCount === 2) c2.classList.add("scroll");
        else if (scrollCount === 3) c3.classList.add("scroll");
      } else {
        unlockScroll();
        console.log("Reached end scrolling down");
      }
    } else {
      if (scrollCount > 0) {
        scrollCount--;
        updateCompanies();

        if (scrollCount === 2) c2.classList.add("scroll");
        else if (scrollCount === 1) c1.classList.add("scroll");
      } else {
        unlockScroll();
        console.log("Reached top scrolling up");
      }
    }

    setTimeout(() => {
      scrolling = false;
      console.log("Ready for next scroll");
    }, 500);
  }

  document.addEventListener(
    "wheel",
    (e) => {
      if (inSection && isLocked) {
        e.preventDefault();
        stepScroll(e.deltaY > 0);
      }
    },
    { passive: false }
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const currentScrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        const isScrollingDown = currentScrollTop > lastScrollTop;
        lastScrollTop = currentScrollTop;

        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          inSection = true;

          if (isScrollingDown) {
            console.log("Entered section scrolling down");
            scrollCount = 0;
            resetCompanies();
          } else {
            console.log("Entered section scrolling up");
            scrollCount = 3;
            showAllCompanies();
          }

          lockScroll();
        } else {
          handleScrollOut();
        }
      });
    },
    { threshold: [0.5] }
  );

  observer.observe(section);
});
// --------- mobile view toggle MENU --------------
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("menuToggle");
  const navMenu = document.getElementById("mobileNav");

  toggleButton.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
});
