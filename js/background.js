const img = [
    "img01.jpeg", "img02.jpeg", "img03.jpeg"
]

const todayImage = img[Math.floor(Math.random() * img.length)];

const bgImage = document.createElement("img");
bgImage.src = "img/" + todayImage;

document.querySelector("body").style.backgroundImage = "url" + "(" + "'" + bgImage.src + "'" + ")";