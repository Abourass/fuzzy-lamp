import NerdsRope from "./brushes/NerdsRope.js";
import Plants from "./brushes/Plants.js";
import attachBrush from "./tools/attachBrush.js";
import clearCanvas from "./tools/clearCanvas.js";
let drawing = false, animate = false, brush = NerdsRope, loops = 1, lineWidth = 1;
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const filterSelect = document.querySelector('#filter');
filterSelect.addEventListener('change', (event) => { ctx.globalCompositeOperation = event.target.value; });
const brushSelect = document.querySelector('#brush');
brushSelect.addEventListener('change', (event) => { if (event.target.value === 'NerdsRope')
    brush = NerdsRope;
else
    brush = Plants; });
const lineWidthInput = document.querySelector('#lineWidth');
lineWidthInput.addEventListener('change', (event) => {
    lineWidth = event.target.value;
    ctx.lineWidth = lineWidth;
});
const loopsInput = document.querySelector('#loops');
loopsInput.addEventListener('change', (event) => { loops = event.target.value; });
const animateCheckbox = document.querySelector('#animate');
animateCheckbox.addEventListener('change', (event) => { animate = event.target.checked; });
window.addEventListener('mousemove', (e) => { if (drawing)
    attachBrush(e, brush, animate, loops); });
window.addEventListener('mousedown', () => drawing = true);
window.addEventListener('mouseup', () => drawing = false);
window.addEventListener('keyup', (e) => {
    if (e.key === 'a') {
        animate = (animate) ? false : true;
        animateCheckbox.checked = animate;
    }
    if (e.key === '+') {
        loops++;
        loopsInput.value = loops.toString();
    }
    if (e.key === '-' && loops > 1) {
        loops--;
        loopsInput.value = loops.toString();
    }
    if (e.key === 'c') {
        clearCanvas();
    }
    if (e.key === '1') {
        brush = NerdsRope;
        brushSelect.value = 'NerdsRope';
    }
    if (e.key === '2') {
        brush = Plants;
        brushSelect.value = 'Plants';
    }
    if (e.key === 't') {
        const filterChoice = ['lighten', 'multiply', 'screen', 'overlay', 'darken', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity'][Math.floor(Math.random() * 10)];
        ctx.globalCompositeOperation = filterChoice;
        filterSelect.value = filterChoice;
    }
    if (e.key === 'g') {
        lineWidth += 0.1;
        ctx.lineWidth = lineWidth;
        lineWidthInput.value = ctx.lineWidth.toString();
    }
    if (e.key === 'b') {
        lineWidth -= 0.1;
        ctx.lineWidth = lineWidth;
        lineWidthInput.value = ctx.lineWidth.toString();
    }
});
