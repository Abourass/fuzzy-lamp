import Brush from "../class/Brush";

export default function attachBrush(e: MouseEvent, brush: typeof Brush, animate = false, loops = 1): void {
  for(let i = 0; i < loops; i++) {
    const activeBrush = new brush(e.clientX, e.clientY);
    activeBrush.update(animate);
  }
}
