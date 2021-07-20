export default class Brush {
    x;
    y;
    speedX;
    speedY;
    maxSize;
    size;
    constructor(x, y, override = null) {
        this.x = x;
        this.y = y;
        this.x = x;
        this.y = y;
        this.speedX = override?.speedX ?? Math.random() * 4 - 2;
        this.speedY = override?.speedY ?? Math.random() * 4 - 2;
        this.maxSize = override?.maxSize ?? Math.random() * 7 + 5;
        this.size = override?.size ?? Math.random() * 1 + 2;
    }
    update() { }
}
