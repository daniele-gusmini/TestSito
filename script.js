fetch("images.json")
  .then((response) => response.json())
  .then((data) => {
    const slider = document.getElementById("imageSlider");
    data.images.forEach((image) => {
      const img = document.createElement("img");
      img.src = image;
      slider.appendChild(img);
    });
    rotateImages();
  });

function rotateImages() {
  let currentImageIndex = 0;
  let images = document.querySelectorAll(".slider img");
  let max = images.length;

  setInterval(() => {
    images[currentImageIndex].style.display = "none";
    currentImageIndex = (currentImageIndex + 1) % max;
    images[currentImageIndex].style.display = "block";
  }, 3000);
}
