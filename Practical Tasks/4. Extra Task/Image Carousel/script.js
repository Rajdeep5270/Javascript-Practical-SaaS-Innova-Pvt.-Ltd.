const allImages = [
    "https://cdn.pixabay.com/photo/2026/07/08/12/27/12-27-48-894_1280.png",
    "https://cdn.pixabay.com/photo/2026/01/31/22/33/leaf-10098317_1280.jpg",
    "https://cdn.pixabay.com/photo/2026/07/03/17/51/17-51-34-515_1280.jpg",
    "https://cdn.pixabay.com/photo/2026/07/13/21/26/21-26-44-214_1280.jpg",
    "https://cdn.pixabay.com/photo/2026/01/12/19/06/mountains-10065118_1280.jpg"
];

let currentImg = 0;

const carouselImg = document.getElementById("carouselImg");
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

function loadCarousel() {
    carouselImg.src = allImages[currentImg];

    if (currentImg === 0) {
        prevBtn.style.display = "none";
    } else {
        prevBtn.style.display = "block"
    }

    if (currentImg === allImages.length - 1) {
        nextBtn.style.display = "none";
    } else {
        nextBtn.style.display = "block";
    }
};

loadCarousel();

prevBtn.addEventListener('click', e => {
    currentImg = currentImg - 1;
    loadCarousel();
});

nextBtn.addEventListener('click', e => {
    currentImg = currentImg + 1;
    loadCarousel();
});

setInterval(() => {
    currentImg = currentImg + 1;

    if (currentImg === allImages.length)
        currentImg = 0;

    loadCarousel();
}, 3000);