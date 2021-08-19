const images = [  
     "pepe1.jpg",
     "pepe2.jpg",
     "pepe3.png"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);