document.addEventListener("DOMContentLoaded", () => {
  const lightboxLinks = document.querySelectorAll(".lightbox");
  const lightboxContainer = document.getElementById("lightbox-container");
  const lightboxImage = document.getElementById("lightbox-image");
  const closeBtn = document.getElementById("close-lightbox");

  lightboxLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const imgSrc = link.getAttribute("href");
      lightboxImage.src = imgSrc;
      lightboxContainer.classList.remove("hidden");
    });
  });

  closeBtn.addEventListener("click", () => {
    lightboxContainer.classList.add("hidden");
    lightboxImage.src = "";
  });

  lightboxContainer.addEventListener("click", (e) => {
    if (e.target === lightboxContainer) {
      lightboxContainer.classList.add("hidden");
      lightboxImage.src = "";
    }
  });
});
