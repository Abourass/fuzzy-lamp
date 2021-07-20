import Brush from "../class/Brush";

export default function attachBrush(e: MouseEvent, brush: typeof Brush, animate = false): void {
    const activeBrush = new brush(e.clientX, e.clientY);
    activeBrush.update(animate);
  }
