fetch("images.json")
  .then((response) => {
    console.log("resp", response);
    return response.json();
  })
  .then((data) => {
    console.log("data", data);
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
  }, 5000);
}
