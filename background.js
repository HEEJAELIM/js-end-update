const body = document.querySelector("body");

const images= [
    "1.png", "2.jpg"
];

function backG() {
const backgroundRandomImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement("img")

body.appendChild(bgImage)

bgImage.src = `images/${backgroundRandomImage} `;

// body.style.backgroundImage = "url('" + backgroundRandomImage + "')";

body.style.background = backgroundRandomImage

}



backG();




