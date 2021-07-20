import Brush, { iBrushOverrides } from "../class/Brush.js";
import randomIntInRange from "../tools/randomIntInRange.js";

const canvas = document.querySelector('#canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

export default class Plants extends Brush {
  angle: number;
  radius: number;

  constructor(x: number, y: number, override: iBrushOverrides|null = null) {
    super(x, y, override);
    this.angle = override?.angle ?? Math.random() * 6.2;
    this.radius = override?.radius ?? randomIntInRange(10, 100);
  }

  update(animate: boolean = false) {
    this.x += this.speedX + Math.cos(this.angle) * this.radius;
    this.y += this.speedY;
    this.size += 0.1;
    this.angle += 0.1;

    if (this.size < this.maxSize && ctx instanceof CanvasRenderingContext2D) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `hsl(140,${randomIntInRange(1, 150)}%,50%)`;
      ctx.fill();
      ctx.stroke();
      if (animate) requestAnimationFrame(this.update.bind(this, true));
    }

    if (this.x > canvas.width - this.size || this.x < 0) {
      this.speedX = -this.speedX;
    }
    if (this.y > canvas.height - this.size || this.y < 0) {
      this.speedY = -this.speedY;
    }
  }
}
