export default function clearCanvas() {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');
    ctx.lineWidth = 0.4;
    ctx.globalCompositeOperation = 'lighten';
    if (ctx instanceof CanvasRenderingContext2D) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}
