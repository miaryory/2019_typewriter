"use strict";
const text = document.querySelector("h1#typewriter").textContent;
let initialText = document.querySelector("h1#typewriter");
let sound1 = document.querySelector("#typekey1");
let sound2 = document.querySelector("#typekey2");
let soundSpace = document.querySelector("#typespace");


initialText.textContent = "";

window.addEventListener("load", start);

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