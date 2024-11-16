import {Stars} from './stars.js';
import { MountainsHigh } from './mountainsHigh.js';
import { MountainsLow } from './mountainsLow.js';
import { Ground } from './ground.js';

window.onload = init;

let ctx;
let stars;
let mountainsHigh;
let mountainsLow;
let ground;

function init() {
    let canvas = document.getElementById("my-canvas");

    if (canvas.getContext) {
        ctx = canvas.getContext('2d');

        stars = new Stars(ctx);
        stars.load(loaded);
        
        mountainsHigh = new MountainsHigh(ctx);
        mountainsHigh.load(loaded);

        mountainsLow = new MountainsLow(ctx);
        mountainsLow.load(loaded);

        ground = new Ground(ctx);
        ground.load(loaded);

    } else {
        alert("Canvas is not supported");
    }
}

let loaderCounter = 0;

function loaded() {

    loaderCounter++;

    if (loaderCounter <4)
    return;

    main();
}

function main() {
    window.requestAnimationFrame(main);

    clearCanvas();
    update();
    draw();

}


function clearCanvas() {
        let linearGradient = ctx.createLinearGradient(ctx.canvas.width/ 2, 0, ctx.canvas.width/ 2, ctx.canvas.height);
        linearGradient.addColorStop(0, '#0D0E20');
        linearGradient.addColorStop(0.5, '#26303E');
        linearGradient.addColorStop(1, '#445664');
        ctx.fillStyle = linearGradient;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function update() {
    stars.update();
    mountainsHigh.update();
    mountainsLow.update();
    ground.update();
}

function draw() {

    stars.draw();
    mountainsHigh.draw();
    mountainsLow.draw();
    ground.draw();
}