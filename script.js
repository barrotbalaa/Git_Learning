document.addEventListener('DOMContentLoaded', () => {
  const landing = document.getElementById('landing');
  const header = document.getElementById('header');
  const progressBar = document.getElementById('progress-bar');
  const landingImage = document.getElementById('landing-image');

  const images = [
    './images/Zustpe1.png',
    './images/Zustpe2.png',
    './images/Zustpe3.png',
    './images/Zustpe4.png',
    './images/Zustpe5.png',
    './images/Zustpe6.png',
    './images/Zustpe7.png',
    './images/Zustpe8.png'
  ];

  // Preload all images to prevent lag
  images.forEach(src => {
    const img = new Image();
    img.src = src;
    img.onerror = () => console.error('Failed to load:', src);
  });

  let currentImage = 0;
  const imageDisplayTime = 2000 / images.length; // 250ms per image

  function changeImage() {
    if (currentImage < images.length) {
      landingImage.classList.remove('visible');
      setTimeout(() => {
        landingImage.src = images[currentImage];
        landingImage.classList.add('visible');
        currentImage++;
        if (currentImage < images.length) {
          setTimeout(changeImage, imageDisplayTime);
        }
        // The last image stays visible
      }, 50);
    }
  }

  // Start image rotation
  landingImage.src = images[0];
  landingImage.classList.add('visible');
  setTimeout(changeImage, imageDisplayTime);

  // Progress bar setup (4 seconds total)
  let progress = 0;
  const progressSteps = 100;
  const progressIntervalTime = 4000 / progressSteps;

  const progressInterval = setInterval(() => {
    progress++;
    progressBar.style.width = `${progress}%`;

    if (progress >= 100) {
      clearInterval(progressInterval);
      // Immediately transition to header section after progress completes
      transitionToHeader();
    }
  }, progressIntervalTime);

  function transitionToHeader() {
    landing.style.display = 'none';
    header.classList.remove('hidden');
    header.scrollIntoView({ behavior: 'smooth' });
  }
});
