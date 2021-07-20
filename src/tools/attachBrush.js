export default function attachBrush(e, brush, animate = false, loops = 1) {
    for (let i = 0; i < loops; i++) {
        const activeBrush = new brush(e.clientX, e.clientY);
        activeBrush.update(animate);
    }
}
