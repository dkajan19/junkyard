const background = document.getElementById("background");
const canvas = document.getElementById("timeCanvas");
const ctx = canvas.getContext("2d");
const bgBrightnessSlider = document.getElementById("bgBrightnessSlider");
const bgImageInput = document.getElementById("bgImage");
const menu = document.getElementById("menu");
const menuButton = document.getElementById("menuButton");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let bgBrightness = localStorage.getItem("bgBrightness") || 50;
bgBrightnessSlider.value = bgBrightness;

bgBrightnessSlider.addEventListener("input", function () {
    bgBrightness = this.value;
    localStorage.setItem("bgBrightness", bgBrightness);
    updateBackgroundBrightness();
});

bgImageInput.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = new Image();
            img.src = e.target.result;
            img.onload = function () {
                background.style.backgroundImage = `url('${img.src}')`;
                updateBackgroundBrightness();
                localStorage.setItem("bgImage", img.src);
            };
        };
        reader.readAsDataURL(file);
    }
});

menuButton.addEventListener("click", function () {
    // Toggle menu visibility on button click
    menu.style.display = (menu.style.display === "none" || menu.style.display === "") ? "block" : "none";
});

const storedBgImage = localStorage.getItem("bgImage");
if (storedBgImage) {
    background.style.backgroundImage = `url('${storedBgImage}')`;
    updateBackgroundBrightness();
}

function updateBackgroundBrightness() {
    const brightness = bgBrightness / 100;
    const filterValue = `brightness(${brightness})`;
    background.style.filter = filterValue;
}

function updateTime() {
    const now = new Date();
    const timeElement = document.getElementById("time");
    const dateElement = document.getElementById("date");

    const timeString = now.toLocaleTimeString();

    const dateString = now.toLocaleDateString(navigator.language, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    timeElement.textContent = timeString;
    dateElement.textContent = dateString;

    setTimeout(updateTime, 1000);
}

updateTime();
