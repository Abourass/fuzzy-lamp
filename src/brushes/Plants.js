import Brush from "../class/Brush.js";
import randomIntInRange from "../tools/randomIntInRange.js";
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
export default class Plants extends Brush {
    angleX;
    angleY;
    velocitySize;
    velocityX;
    velocityY;
    lightness;
    constructor(x, y, override = null) {
        super(x, y, override);
        this.velocitySize = override?.velocitySize ?? Math.random() * 0.1 + 0.05;
        this.angleX = override?.angleX ?? Math.random() * 6.2;
        this.angleY = override?.angleY ?? Math.random() * 6.2;
        this.velocityX = override?.velocityX ?? Math.random() * 0.6 - 0.022;
        this.velocityY = override?.velocityY ?? Math.random() * 0.6 - 0.03;
        this.lightness = override?.lightness ?? 10;
    }
    update(animate = false) {
        this.x += this.speedX + Math.sin(this.angleX);
        this.y += this.speedY + Math.sin(this.angleY);
        this.size += this.velocitySize;
        this.angleX += this.velocityX;
        this.angleY += this.velocityY;
        if (this.lightness < 70)
            this.lightness++;
        if (this.size < this.maxSize && ctx instanceof CanvasRenderingContext2D) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `hsl(140,${randomIntInRange(50, 150)}%,${this.lightness}%)`;
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
