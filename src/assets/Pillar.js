export default function(x, y, dx, dy, center, gap, sprite) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.center = center;
  this.gap = gap;
  this.sprite = sprite;
  // eslint-disable-next-line no-unused-vars
  this.draw = (ctx, sprite) => {
    //draw here
    //draw top Half

    for (let i = this.center - this.gap / 2 - 30; i + 30 > 0; i -= 30) {
      if (i === this.center - this.gap / 2 - 30) {
        this.sprite.drawRot("PillarHead", this.x, i, 52, 30, 180, true, false);
      } else {
        this.sprite.draw("PillarBody", this.x, i, 52, 30);
      }
    }
    //draw Bottom Half
    for (let i = this.center + this.gap / 2; i < 800; i += 30) {
      if (i === this.center + this.gap / 2) {
        this.sprite.draw("PillarHead", this.x, i, 52, 30);
      } else {
        this.sprite.draw("PillarBody", this.x, i, 52, 30);
      }
    }
  };
  this.update = () => {
    this.x -= this.dx;
    this.y += this.dy;
  };
}
