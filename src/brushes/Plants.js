import Brush from "../class/Brush.js";
import randomIntInRange from "../tools/randomIntInRange.js";
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
class Flower {
    x;
    y;
    size;
    image;
    maxFlowerSize;
    frameSize;
    frameY;
    frameX;
    willFlower;
    growthVelocity;
    angle;
    angleVelocity;
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.x = x;
        this.y = y;
        this.size = size;
        this.growthVelocity = Math.random() * 0.3 + 0.2;
        this.maxFlowerSize = this.size + Math.random() * 100;
        // Define our sprite sheet
        this.image = new Image();
        this.image.src = "/src/assets/flowers.png";
        // Sprite sheet size
        this.frameSize = 100;
        // These select from the sprite sheet
        this.frameY = Math.floor(Math.random() * 3);
        this.frameX = Math.floor(Math.random() * 3);
        // Make only the longest roots bloom
        this.willFlower = this.size > 11.5;
        // Spin some blooms
        this.angle = 0;
        this.angleVelocity = Math.random() * 0.05 - 0.025;
    }
    grow() {
        if (this.size < this.maxFlowerSize && this.willFlower) {
            this.size += this.growthVelocity;
            this.angle += this.angleVelocity;
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);
            ctx.drawImage(this.image, this.frameSize * this.frameX, this.frameSize * this.frameY, this.frameSize, this.frameSize, 0 - this.size / 2, // Center the flowers
            0 - this.size / 2, this.size, this.size);
            ctx.restore();
            requestAnimationFrame(this.grow.bind(this));
        }
    }
}
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
        else {
            const flower = new Flower(this.x, this.y, this.size + 1);
            flower.grow();
        }
        if (this.x > canvas.width - this.size || this.x < 0) {
            this.speedX = -this.speedX;
        }
        if (this.y > canvas.height - this.size || this.y < 0) {
            this.speedY = -this.speedY;
        }
    }
}
