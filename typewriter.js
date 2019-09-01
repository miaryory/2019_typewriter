"use strict";
const text = document.querySelector("h1#typewriter").textContent;
let initialText = document.querySelector("h1#typewriter");
const soundBtn = document.querySelector("#soundControl");
let sound1 = document.querySelector("#typekey1");
let sound2 = document.querySelector("#typekey2");
let soundSpace = document.querySelector("#typespace");


initialText.textContent = "";

window.addEventListener("load", start);

soundBtn.addEventListener("click", activateSound);

function activateSound() {
    sound1.volume = 1;
    sound2.volume = 1;
    soundSpace.volume = 1;
    soundBtn.src = "soundon.png";
    document.querySelector("p").textContent = "Click to disable the sound :";
    soundBtn.removeEventListener("click", activateSound);
    soundBtn.addEventListener("click", deactivateSound);
}

function deactivateSound() {
    sound1.volume = 0;
    sound2.volume = 0;
    soundSpace.volume = 0;
    soundBtn.src = "soundoff.png";
    document.querySelector("p").textContent = "Click to enable the sound :";
    soundBtn.removeEventListener("click", deactivateSound);
    soundBtn.addEventListener("click", activateSound);
}

let i = 0;

function start() {

    if (i < text.length) {
        initialText.textContent += text.charAt(i);

        //adding the sound
        if (text.charAt(i) == " ") {
            soundSpace.play();
        } else if (i % 2 == 0) {
            sound1.play();
        } else if (i % 2 != 0) {
            sound2.play();
        }

        i++;
        setTimeout(start, Math.random() * (400 - 60) + 60);
    }
}