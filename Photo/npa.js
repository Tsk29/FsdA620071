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
    var img = document.getElementById("i9");
    img.style.filter = "grayscale(100%)";
}

function createThumbnail(imgId) {
    const img = document.getElementById(imgId);
    img.style.border = '1px solid black';
    img.style.borderRadius = '50%';
    img.style.padding = '10px';
    img.style.width = '200px';
}

function makeReddish(imgId) {
    var img = document.getElementById(imgId);
    img.style.filter = "hue-rotate(30deg) saturate(2)";
}

function inv(imgId) {
    var img = document.getElementById(imgId);
    img.style.filter = "invert(100%)";
}

function increaseBrightness(imgId) {
    var img = document.getElementById(imgId);
    var brightness = 50; // Increase this value to make the image brighter

    // Set the brightness value for the image
    img.style.filter = "brightness(" + brightness + "%)";
}




const gBtn = document.getElementsByClassName("color-btn greenish")[0];
gBtn.addEventListener("click", makeGreenish);

const bBtn = document.getElementsByClassName("color-btn blueish")[0];
bBtn.addEventListener("click", makeBlueish);
const rBtn = document.getElementsByClassName("color-btn reddish")[0];
rBtn.addEventListener("click", function() { makeReddish('i11') });
const bwBtn = document.getElementsByClassName("grayscale-btn")[0];
bwBtn.addEventListener("click", makeBw);

const tBtn = document.getElementsByClassName("thumbnail-btn")[0];
tBtn.addEventListener("click", function() { createThumbnail('i13') });
const ibBtn = document.getElementsByClassName("brightness-btn")[0];
ibBtn.addEventListener("click", function() { increaseBrightness('i10') });
const inBtn = document.getElementsByClassName("negative-btn")[0];
inBtn.addEventListener("click", function() { inv('i4') });
