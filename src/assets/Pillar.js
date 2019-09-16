export default function(x, y, dx, dy, center, gap) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.center = center;
  this.gap = gap;
  this.draw = () => {};
  this.update = () => {};
}
