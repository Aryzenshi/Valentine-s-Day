// script.js
document.addEventListener('mousedown', function() {
    document.body.classList.add('body-clicked');
});

document.addEventListener('mouseup', function() {
    document.body.classList.remove('body-clicked');
});


//page 2
function revealGift() {
    var giftBoxContainer = document.getElementById("giftBoxContainer");
    var rose = document.getElementById("rose");
    var rosePetals = document.getElementById("rosePetals");

    giftBoxContainer.style.opacity = 0;
    giftBoxContainer.style.transform = "scale(0)";

    rose.style.opacity = 1;
    rose.style.transform = "scale(1)";

    rosePetals.style.opacity = 1;
    generateRosePetals();
}

function generateRosePetals() {
    var rosePetals = document.getElementById("rosePetals");

    for (var i = 0; i < 40; i++) {
        var petal = document.createElement("img");
        petal.src = "../assets/image/rose-petal.png";
        petal.className = "falling-petal";
        petal.style.animationDuration = Math.random() * 3 + 2 + "s";
        petal.style.left = Math.random() * (window.innerWidth - 100) + "px";
        petal.style.top = -50+"px";
        petal.style.transform = "rotate(" + Math.random() * 360 + "deg)";

        rosePetals.appendChild(petal);
    }
}

//page 3
function handleButtonClick(isYes) {
    if (isYes) {
        showResult("YAYY! Thanks for making me feel special 💖💖")
        fadeOutButtons();
        showNext()
    } else {
        const noStatements = [
            'Please reconsider 🥺🥺',
            'Are you sure? 🥺🥺',
            'Take it slow we have time 😊😊',
            'Are you sure you don\'t want me? 🥺',
            'I ain\'t gonna let you go mind it!',
            'Please I love you 🥺'
        ];
        const randomStatement = getRandomStatement(noStatements);
        showResult(randomStatement);
        increaseYesButtonSize();
    }
}

function getRandomStatement(statements) {
    const randomIndex = Math.floor(Math.random() * statements.length);
    return statements[randomIndex];
}

function increaseYesButtonSize() {
    const yesButton = document.getElementById('yesButton');
    const currentSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
    const newSize = parseFloat(currentSize) * 1.10;
    yesButton.style.fontSize = newSize + 'px';
}

function showResult(message) {
    const resultBox = document.createElement('div');
    resultBox.className = 'result-box';
    resultBox.textContent = message;

    const existingResultBoxes = document.querySelectorAll('.result-box');
    existingResultBoxes.forEach(box => box.remove());

    document.body.appendChild(resultBox);
}

function fadeOutButtons() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.classList.add('fade-out');
    });

    const buttonContainer = document.getElementById('buttonContainer');
    setTimeout(() => {
        buttons.forEach(button => {
            buttonContainer.remove()
        });
    }, 500);
}

//page 4
const elButton = document.querySelector(".chocolate-button");

elButton.addEventListener("mousedown", (event) => {
  if (!elButton.matches(":focus")) {
    showNext();
    elButton.style.setProperty("--x", event.offsetX);
    elButton.style.setProperty("--y", event.offsetY);
}});

//page 5
//page5.js
function toy(){
    showNext();
    let toy = document.getElementById('container');
    toy.style.visibility = 'visible';
    let t = document.getElementById('TEXT');
    t.style.visibility = 'visible';
    let h = document.getElementById('Hide');
    h.remove()
}

//page 6
//not needed

//final

function revealHeart() {
    var heartShower = document.getElementById("heartShower");
    var us = document.getElementById("US");
    var snap = document.getElementById("snap");
    heartShower.style.opacity = 1;
    snap.style.visibility = 'visible';
    snap.classList.add("fade-in");
    us.style.visibility = 'visible';
    us.classList.add("fade-in");
    showHome()
    generateHearts();
}

function generateHearts() {
    var heartShower = document.getElementById("heartShower");

    for (var i = 0; i < 40; i++) {
        var heart = document.createElement("img");
        heart.src = "../assets/image/heart.png";
        heart.className = "falling-heart";
        var randomScale = Math.random() * 0.5 + 0.5;
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        heart.style.left = Math.random() * (window.innerWidth) + "px";
        heart.style.top = -50 + "px";
        heart.style.transform = "rotate(" + Math.random() * 360 + "deg) scale(" + randomScale + ")";

        heartShower.appendChild(heart);

        heart.addEventListener("animationiteration", function () {
            if (this.offsetTop > window.innerHeight) {
                this.style.opacity = 0;
                this.addEventListener("transitionend", function () {
                    this.remove();
                });
            }
        });
    }
}


//=======================================================//
function showNext(){
    var nextB = document.getElementById('nextButton');
    nextB.style.visibility = 'visible'
}

function showHome() {
    var homeB = document.getElementById('homeButton');
    homeB.style.visibility = 'visible'
}

function gotoPage2from3() {
    window.location.href = './page2.html';
}

function gotoPage3from4() {
    window.location.href = './page3.html';
}

function gotoPage4from5() {
    window.location.href = './page4.html';
}

function gotoPage5from6() {
    window.location.href = './page5.html';
}

function gotoPage6from7() {
    window.location.href = './page6.html';
}

function gotoPage7from8() {
    window.location.href = './page7.html';
}

function gotoPage2() {
    window.location.href = './pages/page2.html';
}

function gotoPage3() {
    window.location.href = './page3.html';
}

function gotoPage4() {
    window.location.href = './page4.html';
}

function gotoPage5() {
    window.location.href = './page5.html';
}

function gotoPage6() {
    window.location.href = './page6.html';
}

function gotoPage7() {
    window.location.href = './page7.html';
}

function gotoPage8() {
    window.location.href = './final.html';
}

function goBack() {
    window.location.href = "../index.html";
}