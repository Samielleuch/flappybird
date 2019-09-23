export default function(x, y, dx, dy, sprite) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.frameCount = 0;
  this.frameNb = 0;
  this.gravity = -3;
  this.sprite = sprite;
  this.init = () => {
    console.log(this.sprite);
    this.sprite.Define("Playerframe1", 7, 981, 50, 40);
    this.sprite.Define("Playerframe2", 63, 981, 50, 40);
    this.sprite.Define("Playerframe3", 119, 981, 50, 40);
  };
  this.draw = () => {
    // this.sprite.ctx.fillRect(this.x, this.y, 64, 64);

    this.frameCount++;
    if (this.frameCount === 7) {
      this.frameCount = 0;
      this.frameNb++;
    }
    this.frameNb %= 3;

    switch (this.frameNb) {
      case 0: {
        this.sprite.draw("Playerframe1", this.x, this.y, 52, 60);
        break;
      }
      case 1: {
        this.sprite.draw("Playerframe2", this.x, this.y, 52, 60);
        break;
      }
      case 2: {
        this.sprite.draw("Playerframe3", this.x, this.y, 52, 60);
        break;
      }
    }
  };
  this.move = key => {
    if (key.isDown(key.UP)) this.y += this.dy;
  };
  this.update = key => {
    this.y -= this.gravity;
    this.move(key);
  };
}
