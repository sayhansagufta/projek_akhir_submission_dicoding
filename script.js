let currentIndex = 0;
const images = [
  "https://cdn.pixabay.com/photo/2019/06/25/09/35/google-4297824_640.jpg",
  "https://cdn.pixabay.com/photo/2015/06/01/09/00/adwords-793034_640.jpg",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhbm5lciUyMGFkc3xlbnwwfHwwfHx8MA%3D%3D",
];

function changeImage() {
  const slideshowElement = document.getElementById("slideshow");
  slideshowElement.style.backgroundImage = `url(${images[currentIndex]})`;
  currentIndex = (currentIndex + 1) % images.length; // Looping back to first image
}

// Change image every 3 seconds
setInterval(changeImage, 5000);

// Initial load
changeImage();
