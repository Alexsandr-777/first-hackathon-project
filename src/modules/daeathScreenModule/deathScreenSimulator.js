import { createScreenDeath } from './dom/deathScreen.js';
import { images } from "../../data/images.js";
import { audio1, audio2, audio3 } from "../../data/sound.js";

function playSound () {
const sound1 = new Audio (audio1);
const sound2 = new Audio (audio2);
const sound3 = new Audio (audio3)
sound1.addEventListener (`ended`, () => {
    sound2.play ();
});
sound2.addEventListener (`ended`, () => {
    sound3.play ();
});
    sound1.play ();
};

function startImages (screen) {
    images.forEach ((img, indx) => {
        setTimeout (() => {
            screen.style.backgroundImage = `url(${img})`
        }, indx * 2200);
    })
};
function stopImages (screen) {        
setTimeout (() => {
    screen.remove ()
    }, images.length * 2200 + 2500)
};

export function startDeathScreenModule () {
    const screen = createScreenDeath ();
    startImages (screen)
    playSound ()
    stopImages (screen)
};