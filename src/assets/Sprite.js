export default function({ height, width, ctx }) {
  this.height = height;
  this.width = width;
  this.ctx = ctx;
  this.img = new Image();

  this.draw = (sx, sy, dx, dy, dw, dh) => {
    this.ctx.drawImage(
      this.img,
      sx,
      sy,
      this.height,
      this.width,
      dx,
      dy,
      dw,
      dh
    );
  };

  this.loadImage = src => {
    this.img.src = src;
    //debug
    console.log(this.img);
    this.img.onload = function() {
      console.log("heyhey");
    };
  };
  this.update = () => {
    //
  };
}
