import NerdsRope from "./brushes/NerdsRope.js";
import attachBrush from "./tools/attachBrush.js";
import clearCanvas from "./tools/clearCanvas.js";

let animate = false;
let brush = NerdsRope;

window.addEventListener('mousemove', (e: MouseEvent) => attachBrush(e, brush, animate));
window.addEventListener('click', clearCanvas);
window.addEventListener('keyup', (e) => {
   if (e.key === 'a') { animate = (animate) ? false : true; }
});

