import player from "./player";
export default function() {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");
  ctx.width = 800;
  ctx.height = 800;

  const Player = new player(0, 400, 3, 3);

  function update() {
    //updates here
    Player.update(ctx);
  }

  function draw() {
    //draw here
    ctx.fillStyle = "Black";
    Player.draw(ctx);
  }

  function animate() {
    //reset the canvas
    ctx.fillStyle = "rgba(100,255,255)";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    update();
    draw();
    requestAnimationFrame(animate);
  }

  animate();
}
