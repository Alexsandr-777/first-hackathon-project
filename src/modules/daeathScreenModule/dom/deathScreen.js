// import { createElement } from "react";
export function createScreenDeath () {
    const screen =document.createElement (`div`);
    screen.className = `death-screen`;
    document.body.insertAdjacentElement ("beforeend", screen);
    return screen;
};