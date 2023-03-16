function makeGreenish() {
    const img = document.getElementById("i2");

    // Increase red and decrease blue and green to make image reddish
    img.style.filter = "sepia(100%) saturate(200%) hue-rotate(20deg)";

}

function makeBlueish() {
    const img = document.getElementById('i5');
    img.style.filter = "brightness(110%) saturate(150%) hue-rotate(200deg)";
}

function makeBw() {
    const img = document.getElementById('i9');
    img.style.filter = "grayscale(100%)";
}

const gBtn = document.getElementsByClassName("color-btn greenish");
gBtn.addEventListener("click", makeGreenish());
const bBtn = document.getElementsByClassName("color-btn blueish");
bBtn.addEventListener("click", makeBlueish());
const bwBtn = document.getElementsByClassName("grayscale-btn");
bwBtn.addEventListener("click", makeBw());