export default function(x, y, dx, dy, center, gap) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.center = center;
  this.gap = gap;
  this.draw = ctx => {
    ctx.fillRect(this.x, 0, 20, this.center - this.gap / 2);
    ctx.fillRect(this.x, this.center + this.gap / 2, 20, 800);
  };
  this.update = () => {
    this.x -= this.dx;
    this.y += this.dy;
  };
}
