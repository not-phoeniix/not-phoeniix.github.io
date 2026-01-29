const color0 = "#05070d";
const color1 = "#181a26";
const color2 = "#353a4d";
const color3 = "#a7aecc";
const color4 = "#e1e5f2";
const color5 = "#a60731";
const color6 = "#f21b54";
const bgDarkPath = "../media/bg_dark.png";
const bgLightPath = "../media/bg_light.png";

let isLightMode = true;

let switchButton;
let switchIcon;
let bgElement;

document.addEventListener("DOMContentLoaded", () => {
    switchButton = document.querySelector("#theme_switch");
    switchIcon = switchButton.querySelector("i");
    switchButton.addEventListener("click", switchTheme);
    bgElement = document.querySelector("main");

    const storageValue = localStorage.getItem("enableLightMode");
    if (storageValue) {
        isLightMode = storageValue === "true";
    }

    setTheme(isLightMode);
});

function switchTheme() {
    isLightMode = !isLightMode;
    console.log("switch theme clicked, new isLightMode value: " + isLightMode);
    setTheme(isLightMode);
}

function setTheme(setToLightMode) {
    if (setToLightMode) {
        setLightMode();
        isLightMode = true;
    } else {
        setDarkMode();
        isLightMode = false;
    }

    localStorage.setItem("enableLightMode", isLightMode);
}

function setDarkMode() {
    switchIcon.classList.remove("nf-oct-moon");
    switchIcon.classList.add("nf-oct-sun");

    document.documentElement.style.setProperty("--color-main", color4);
    document.documentElement.style.setProperty("--color-main-secondary", color3);
    document.documentElement.style.setProperty("--color-main-tertiary", color2);
    document.documentElement.style.setProperty("--color-bg", color0);
    document.documentElement.style.setProperty("--color-bg-secondary", color1);

    setDefaultColors();

    bgElement.style.backgroundImage = "url(" + bgDarkPath + ")";
}

function setLightMode() {
    switchIcon.classList.remove("nf-oct-sun");
    switchIcon.classList.add("nf-oct-moon");

    document.documentElement.style.setProperty("--color-main", color0);
    document.documentElement.style.setProperty("--color-main-secondary", color1);
    document.documentElement.style.setProperty("--color-main-tertiary", color2);
    document.documentElement.style.setProperty("--color-bg", color4);
    document.documentElement.style.setProperty("--color-bg-secondary", color3);

    setDefaultColors();

    bgElement.style.backgroundImage = "url(" + bgLightPath + ")";
}

function setDefaultColors() {
    document.documentElement.style.setProperty("--color-accent", color6);
    document.documentElement.style.setProperty("--color-accent-secondary", color5);
    document.documentElement.style.setProperty("--color-navbar-bg", color1);
    document.documentElement.style.setProperty("--color-navbar-main", color4);
}
