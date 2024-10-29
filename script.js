const images = ["service1.jpg", "service2.jpg", "service3.jpg"];
let index = 0;

document.getElementById("next").addEventListener("click", () => {
    index = (index + 1) % images.length;
    document.getElementById("service-img").src = images[index];
});

document.getElementById("prev").addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    document.getElementById("service-img").src = images[index];
});
