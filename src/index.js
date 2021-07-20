import NerdsRope from "./brushes/NerdsRope.js";
import Plants from "./brushes/Plants.js";
import attachBrush from "./tools/attachBrush.js";
import clearCanvas from "./tools/clearCanvas.js";
let animate = false, brush = NerdsRope, loops = 1;
window.addEventListener('mousemove', (e) => attachBrush(e, brush, animate, loops));
window.addEventListener('click', clearCanvas);
window.addEventListener('keyup', (e) => {
    if (e.key === 'a') {
        animate = (animate) ? false : true;
    }
    if (e.key === '+') {
        loops++;
    }
    if (e.key === '-' && loops > 1) {
        loops--;
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
});
