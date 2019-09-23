export default function({ ctx }) {
  this.ctx = ctx;
  this.subImages = new Map();
  this.img = new Image();

  this.draw = (Name, dx, dy, dw, dh) => {
    this.ctx.drawImage(
      this.img,
      this.subImages.get(Name).sx,
      this.subImages.get(Name).sy,
      this.subImages.get(Name).width,
      this.subImages.get(Name).height,
      dx,
      dy,
      dw,
      dh
    );
  };
  this.Define = (Name, sx, sy, height, width) => {
    let newIMG = { sx: sx, sy: sy, height: height, width: width };
    this.subImages.set(Name, newIMG);
  };
  this.drawRot = (Name, dx, dy, dw, dh, angle, flip, flop) => {
    this.ctx.save();
    //translate to center to rotate
    this.ctx.translate(dx + dw / 2, dy + dh / 2);
    let rad = 2 * Math.PI - (angle * Math.PI) / 180;
    this.ctx.rotate(rad);
    console.log(angle);
    // Flip/flop the canvas
    let flipScale = 1;
    let flopScale = 1;
    if (flip) flipScale = -1;
    if (flop) flopScale = -1;
    this.ctx.scale(flipScale, flopScale);

    this.ctx.drawImage(
      this.img,
      this.subImages.get(Name).sx,
      this.subImages.get(Name).sy,
      this.subImages.get(Name).width,
      this.subImages.get(Name).height,
      -dw / 2,
      -dh / 2,
      dw,
      dh
    );
    this.ctx.restore();
  };

  this.loadImage = src => {
    this.img.src = src;
    //debug
    console.log(this.img);
    this.img.onload = function() {
      /*
       console.log("heyhey");
      */
    };
  };
  this.update = () => {
    //
  };
}
