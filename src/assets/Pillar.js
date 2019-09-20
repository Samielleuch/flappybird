export default function(x, y, dx, dy, center, gap, sprite) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.center = center;
  this.gap = gap;
  this.framesData = [{ x: 0, y: 648 }, { x: 0, y: 700 }];
  this.sprite = sprite;
  // eslint-disable-next-line no-unused-vars
  this.draw = (ctx, sprite) => {
    //draw here
    //draw top Half
    ctx.fillRect(this.x, 0, 20, this.center - this.gap / 2);
    // eslint-disable-next-line for-direction
    for (let i = this.center - this.gap / 2; i < 0; i -= 30) {
      if (i === this.center - this.gap / 2); //finish me
      //   sprite.draw( this.framesData[0] ,
      //
      // );
    }
    //draw Bottom Half
    ctx.fillRect(this.x, this.center + this.gap / 2, 20, 800);
  };
  this.update = () => {
    this.x -= this.dx;
    this.y += this.dy;
  };
}
