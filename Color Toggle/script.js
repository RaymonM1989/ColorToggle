// Declare variables for colors
// (It might not have been necessary to make variables of all colors, but this way I could control all colors via JavaScript, instead of in CSS)

let greyTextColor =         "rgb(36, 36, 36)";
let greyBackgroundColor =   "rgb(128, 128, 128)";
let greyBorderColor =       "rgb(75, 75, 75)";
let blueTextColor =         "rgb(0, 0, 59)";
let blueBackgroundColor =   "rgb(36, 94, 252)";
let blueBorderColor =       "rgb(11, 62, 201)";
let redTextColor =          "rgb(39, 0, 0)";
let redBackgroundColor =    "rgb(224, 70, 70)";
let redBorderColor =        "rgb(155, 11, 11)";
let yellowTextColor =       "rgb(59, 33, 0)";
let yellowBackgroundColor = "rgb(253, 221, 78)";
let yellowBorderColor =     "rgb(179, 146, 1)";
let greenTextColor =        "rgb(0, 59, 15)";
let greenBackgroundColor =  "rgb(87, 182, 103)";
let greenBorderColor =      "rgb(38, 148, 56)";

// Declare variables for border style (of color buttons)
let borderWidth = "2px";
let borderStyle = "solid";

// Declare variables for timing of animations
let menuAnimationTime =   500;
let colorTransitionTime = 1000;

// Declare variables for HTML/DOM Elements
const body =          document.querySelector("body");
const colorMenu =     document.querySelector(".color-menu");
const colorList =     document.querySelector(".color-list");
const colorText =     document.querySelector("p");
const colorButtons =  document.querySelectorAll("li");
const greyButton =    document.querySelector("#grey");
const blueButton =    document.querySelector("#blue");
const redButton =     document.querySelector("#red");
const yellowButton =  document.querySelector("#yellow");
const greenButton =   document.querySelector("#green");


let openMenu = function () {
  colorList.style.visibility = "visible";
  colorList.style.transition = "left " + menuAnimationTime + "ms cubic-bezier(0.5, 1.5, 0.9, 1)";
  colorList.style.left = "0px";
};

let closeMenu = function () {
  colorList.style.transition = "left " + menuAnimationTime + "ms cubic-bezier(0.1, 0, 0.5, -.5), visibility 0ms " + menuAnimationTime + "ms";
  colorList.style.left = "-100px";
  colorList.style.visibility = "hidden";
};

let changeBackground = function (color, textcolor, text) {
  body.style.transition = "background-color " + colorTransitionTime + "ms ease-in-out";
  body.style.backgroundColor = color;
  colorText.innerHTML = text;
  colorText.style.color = textcolor;
  closeMenu();
};

let setActive = function (button) {
  // Reset each button to its initial look (this is also where I added the "extra" make-up options, so I could keep them out of the CSS file)
  greyButton.style.color =              greyTextColor;
  greyButton.style.backgroundColor =    greyBackgroundColor;
  greyButton.style.borderColor =        greyBorderColor;
  greyButton.style.borderWidth =        borderWidth;
  greyButton.style.borderStyle =        borderStyle;
  blueButton.style.color =              blueTextColor;
  blueButton.style.backgroundColor =    blueBackgroundColor;
  blueButton.style.borderColor =        blueBorderColor;
  blueButton.style.borderWidth =        borderWidth;
  blueButton.style.borderStyle =        borderStyle;
  redButton.style.color =               redTextColor;
  redButton.style.backgroundColor =     redBackgroundColor;
  redButton.style.borderColor =         redBorderColor;
  redButton.style.borderWidth =         borderWidth;
  redButton.style.borderStyle =         borderStyle;
  yellowButton.style.color =            yellowTextColor;
  yellowButton.style.backgroundColor =  yellowBackgroundColor;
  yellowButton.style.borderColor =      yellowBorderColor;
  yellowButton.style.borderWidth =      borderWidth;
  yellowButton.style.borderStyle =      borderStyle;
  greenButton.style.color =             greenTextColor;
  greenButton.style.backgroundColor =   greenBackgroundColor;
  greenButton.style.borderColor =       greenBorderColor;
  greenButton.style.borderWidth =       borderWidth;
  greenButton.style.borderStyle =       borderStyle;

  // Set the bordercolor of the button that has just been pressed to white
  button.style.borderColor = "white";
};

let hoverEffectOn = function () {
  // Set text color to white when button is hovered over
  this.style.color = "white";
};

let hoverEffectOff = function () {
  // Reset text color when button is no longer hovered over
  if (this.id == "grey") {
    this.style.color = greyTextColor;
  }
  if (this.id == "blue") {
    this.style.color = blueTextColor;
  }
  if (this.id == "red") {
    this.style.color = redTextColor;
  }
  if (this.id == "yellow") {
    this.style.color = yellowTextColor;
  }
  if (this.id == "green") {
    this.style.color = greenTextColor;
  }
};

// Add menu toggle when hovering over the "burger-menu"
colorMenu.addEventListener("mouseover", openMenu);
colorMenu.addEventListener("mouseout", closeMenu);

// Add hover functionality to each color button
Array.from(colorButtons).forEach(function (button) {
  button.addEventListener("mouseover", hoverEffectOn);
  button.addEventListener("mouseout", hoverEffectOff);
});

// Add functionality to color buttons on click
greyButton.addEventListener("click", () => {
  // Temporarily remove the "open menu" functionality, so it doesn't open again while closing due to the cursor still hovering the menu
  colorMenu.removeEventListener("mouseover", openMenu);
  // Change the background color
  changeBackground(greyBackgroundColor, greyTextColor, "Grey");
  // Set the clicked button to 'Active'
  setActive(greyButton);
  // Reset "open menu" functionality after "close menu" animation has finished
  setTimeout(function () {
    colorMenu.addEventListener("mouseover", openMenu);
  }, menuAnimationTime);
});
blueButton.addEventListener("click", () => {
  colorMenu.removeEventListener("mouseover", openMenu);
  changeBackground(blueBackgroundColor, blueTextColor, "Blue");
  setActive(blueButton);
  setTimeout(function () {
    colorMenu.addEventListener("mouseover", openMenu);
  }, menuAnimationTime);
});
redButton.addEventListener("click", () => {
  colorMenu.removeEventListener("mouseover", openMenu);
  changeBackground(redBackgroundColor, redTextColor, "Red");
  setActive(redButton);
  setTimeout(function () {
    colorMenu.addEventListener("mouseover", openMenu);
  }, menuAnimationTime);
});
yellowButton.addEventListener("click", () => {
  colorMenu.removeEventListener("mouseover", openMenu);
  changeBackground(yellowBackgroundColor, yellowTextColor, "Yellow");
  setActive(yellowButton);
  setTimeout(function () {
    colorMenu.addEventListener("mouseover", openMenu);
  }, menuAnimationTime);
});
greenButton.addEventListener("click", () => {
  colorMenu.removeEventListener("mouseover", openMenu);
  changeBackground(greenBackgroundColor, greenTextColor, "Green");
  setActive(greenButton);
  setTimeout(function () {
    colorMenu.addEventListener("mouseover", openMenu);
  }, menuAnimationTime);
});

// Add functionality on key press
window.addEventListener("keydown", (e) => {
  if (e.key == "1") {
    changeBackground(greyBackgroundColor, greyTextColor, "Grey");
    setActive(greyButton);
  }
  if (e.key == "2") {
    changeBackground(blueBackgroundColor, blueTextColor, "Blue");
    setActive(blueButton);
  }
  if (e.key == "3") {
    changeBackground(redBackgroundColor, redTextColor, "Red");
    setActive(redButton);
  }
  if (e.key == "4") {
    changeBackground(yellowBackgroundColor, yellowTextColor, "Yellow");
    setActive(yellowButton);
  }
  if (e.key == "5") {
    changeBackground(greenBackgroundColor, greenTextColor, "Green");
    setActive(greenButton);
  }
});

// Set "Grey Button" as active, as this is the "start" color
setActive(greyButton);
