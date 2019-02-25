var numberOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            if (this.textContent === "Easy") {
                numberOfSquares = 3;
            }
            else {
                numberOfSquares = 6;
            }
            reset();
            // how many squares to show
            // pick new colors
            // pick new picked color
            // update page to reflect changes
        });
    }
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        // add click listeners
        squares[i].addEventListener("click", function () {

            // grab color of clicked square
            var clickedColor = this.style.backgroundColor;

            // compare with picked color
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?";
            }
            else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!";
            }
        });
    }
}

function reset() {
    // generate all new colors
    colors = generateRandomColors(numberOfSquares);
    // pick a new random color from array
    pickedColor = pickColor();
    // change color display to match picked color
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    // change color of squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}
// easyBtn.addEventListener("click", function () {
//     numberOfSquares = 3;
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     colors = generateRandomColors(numberOfSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++) {
//         if (colors[i]) {
//             squares[i].style.backgroundColor = colors[i];
//         }
//         else {
//             squares[i].style.display = "none";
//         }
//     }
// });
// hardBtn.addEventListener("click", function () {
//     numberOfSquares = 6;
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     colors = generateRandomColors(numberOfSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++) {
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }
// });

resetButton.addEventListener("click", function () {
    reset();
});


function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // make an array
    var arr = [];
    // add random colors to array
    for (var i = 0; i < num; i++) {
        // getRandomColors
        arr.push(randomColor());
    }
    // return that array
    return arr;
}

function randomColor() {
    // pick a red from 0-255
    var r = Math.floor(Math.random() * 256);
    // pick a green from 0-255
    var g = Math.floor(Math.random() * 256);
    // pick a blue from 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}