import NerdsRope from "./brushes/NerdsRope.js";
import Plants from "./brushes/Plants.js";
import attachBrush from "./tools/attachBrush.js";
import clearCanvas from "./tools/clearCanvas.js";
let drawing = false, animate = false, brush = NerdsRope, loops = 1;
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
window.addEventListener('mousemove', (e) => { if (drawing)
    attachBrush(e, brush, animate, loops); });
window.addEventListener('mousedown', () => drawing = true);
window.addEventListener('mouseup', () => drawing = false);
window.addEventListener('keyup', (e) => {
    if (e.key === 'a') {
        animate = (animate) ? false : true;
    }
    if (e.key === '+') {
        loops++;
        console.log(loops);
    }
    if (e.key === '-' && loops > 1) {
        loops--;
        console.log(loops);
    }
    if (e.key === 'c') {
        clearCanvas();
    }
    if (e.key === '1') {
        brush = NerdsRope;
    }
    if (e.key === '2') {
        brush = Plants;
    }
    if (e.key === 't') {
        ctx.globalCompositeOperation = ['lighten', 'multiply', 'screen', 'overlay', 'darken', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity'][Math.floor(Math.random() * 10)];
    }
    if (e.key === 'g') {
        ctx.lineWidth += 0.1;
    }
    if (e.key === 'b') {
        ctx.lineWidth -= 0.1;
    }
});
