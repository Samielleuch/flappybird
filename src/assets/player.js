export default function(x, y, dx, dy) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.draw = ctx => {
    ctx.fillRect(this.x, this.y, 64, 64);
  };
  this.update = ctx => {
    this.x += this.dx;

    if (this.x >= ctx.width || this.x <= 0) {
      this.dx = -this.dx;
    }
  };
}
