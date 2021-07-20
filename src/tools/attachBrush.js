export default function attachBrush(e, brush, animate = false) {
    const activeBrush = new brush(e.clientX, e.clientY);
    activeBrush.update(animate);
}
