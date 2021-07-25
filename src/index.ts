import NerdsRope from "./brushes/NerdsRope.js";
import Plants from "./brushes/Plants.js";
import attachBrush from "./tools/attachBrush.js";
import clearCanvas from "./tools/clearCanvas.js";

let drawing = false, animate = false, brush = NerdsRope, loops = 1, lineWidth = 1;
const canvas = document.querySelector('#canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

const filterSelect = document.querySelector('#filter') as HTMLSelectElement;
filterSelect.addEventListener('change', (event: any) => { ctx.globalCompositeOperation = event.target.value; });
const brushSelect = document.querySelector('#brush') as HTMLSelectElement;
brushSelect.addEventListener('change', (event: any) => { if (event.target.value === 'NerdsRope') brush = NerdsRope; else brush = Plants; });
const lineWidthInput = document.querySelector('#lineWidth') as HTMLInputElement;
lineWidthInput.addEventListener('change', (event: any) => {
  lineWidth = event.target.value;
  ctx.lineWidth = lineWidth;
});

window.addEventListener('mousemove', (e: MouseEvent) => { if (drawing) attachBrush(e, brush, animate, loops) });
window.addEventListener('mousedown', () => drawing = true);
window.addEventListener('mouseup', () => drawing = false);
window.addEventListener('keyup', (e) => {
   if (e.key === 'a') { animate = (animate) ? false : true; }
   if (e.key === '+') { loops++; console.log(loops); } 
   if (e.key === '-' && loops > 1) { loops--; console.log(loops); }
   if (e.key === 'c') { clearCanvas(); }
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
    lineWidth += 0.1
    ctx.lineWidth = lineWidth;
    lineWidthInput.value = ctx.lineWidth.toString();
  }
  if (e.key === 'b') {
    lineWidth -= 0.1
    ctx.lineWidth = lineWidth;
    lineWidthInput.value = ctx.lineWidth.toString();
  }
});
