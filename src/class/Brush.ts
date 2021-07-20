export interface iBrushOverrides {
  speedX: number;
  speedY: number;
  speedMultiplier: number;
  gravity: number;
  radius: number;
  angle: number;
  angleX: number;
  angleY: number;
  maxSize: number;
  minSize: number;
  size: number;
  color: string;
  opacity: number;
  velocitySize: number;
  velocityAngle: number;
  velocityX: number;
  velocityY: number;
}

export default class Brush {
  speedX: number;
  speedY: number;
  maxSize: number;
  size: number;
  constructor(public x: number, public y: number, override: iBrushOverrides|null = null) {
    this.x = x;
    this.y = y;
    this.speedX = override?.speedX ?? Math.random() * 4 - 2;
    this.speedY = override?.speedY ?? Math.random() * 4 - 2;
    this.maxSize = override?.maxSize ?? Math.random() * 7 + 5;
    this.size = override?.size ?? Math.random() * 1 + 2;
  }

  update(animate: boolean) { }
}
