export default function() {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");
  function update() {
    //updates here
  }

  function draw() {
    //draw here
  }

  function animate() {
    //reset the canvas
    ctx.fillStyle = "rgba(12, 20, 63, 0.25)";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    update();
    draw();
    requestAnimationFrame(animate);
  }

  animate();
}
