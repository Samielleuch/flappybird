export default function({ height, width, ctx }) {
  this.height = height;
  this.width = width;
  this.ctx = ctx;
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
    return new Promise(resolve => {
      let img = new Image();
      img.addEventListener("load", () => {
        resolve(img);
      });
      img.src = src;
      this.img = img;
    });
  };
  this.update = () => {
    //
  };
}
