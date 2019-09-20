import Sprite from "./Sprite";
export default function(x, y, dx, dy, img, ctx) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.framesData = [{ x: 7, y: 981 }, { x: 63, y: 981 }, { x: 119, y: 981 }];
  this.frameCount = 0;
  this.frameNb = 0;
  this.gravity = -3;
  this.sprite = new Sprite({
    width: 40,
    height: 32,
    ctx: ctx
  });
  this.init = () => {
    this.sprite.loadImage(img);
  };
  this.draw = () => {
    //ctx.fillRect(this.x, this.y, 64, 64);
    this.frameCount++;
    if (this.frameCount === 7) {
      this.frameCount = 0;
      this.frameNb++;
    }
    this.frameNb %= 3;
    console.log(this.frameNb);

    this.sprite.draw(
      this.framesData[this.frameNb].x,
      this.framesData[this.frameNb].y,
      this.x,
      this.y,
      52,
      60
    );
  };
  this.move = key => {
    if (key.isDown(key.UP)) this.y += this.dy;
  };
  this.update = key => {
    // this.y -= this.gravity;
    this.move(key);
  };
}
