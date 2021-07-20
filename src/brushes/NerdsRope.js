import Brush from "../class/Brush.js";
import randomIntInRange from "../tools/randomIntInRange.js";
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
export default class NerdsRope extends Brush {
    update(animate = false) {
        this.x += this.speedX;
        this.y += this.speedY;
        this.size += Math.random() * 0.2 - 0.1;
        if (this.size < this.maxSize && ctx instanceof CanvasRenderingContext2D) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            const hsl = `hsl(${randomIntInRange(1, 150)},${randomIntInRange(1, 150)}%,50%)`;
            console.log(hsl);
            ctx.fillStyle = hsl;
            ctx.fill();
            ctx.stroke();
            if (animate)
                requestAnimationFrame(this.update.bind(this, true));
        }
        if (this.x > canvas.width - this.size || this.x < 0) {
            this.speedX = -this.speedX;
        }
        if (this.y > canvas.height - this.size || this.y < 0) {
            this.speedY = -this.speedY;
        }
    }
}
