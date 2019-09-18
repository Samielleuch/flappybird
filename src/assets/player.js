import Sprite from "./Sprite";
export default function(x, y, dx, dy, src, ctx) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.gravity = -3;
  this.sprite = new Sprite({
    height: 100,
    width: 100,
    ctx: ctx
  });
  this.init = () => {
    this.sprite.loadImage("./imgs/Level.png").then(img => {
      ctx.drawImage(img, 0, 0);
    });
  };
  this.draw = () => {
    // ctx.fillRect(this.x, this.y, 64, 64);
    // this.sprite.draw(0, 0, this.x, this.y, 64, 64);
  };
  this.move = key => {
    if (key.isDown(key.UP)) this.y += this.dy;
  };
  this.update = key => {
    this.y -= this.gravity;
    this.move(key);
  };
}
