export default function(x, y, dx, dy) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.gravity = -5;
  this.draw = ctx => {
    ctx.fillRect(this.x, this.y, 64, 64);
  };
  this.move = key => {
    if (key.isDown(key.UP)) this.y += this.dy;
  };
  this.update = key => {
    this.y -= this.gravity;
    this.move(key);
  };
}
