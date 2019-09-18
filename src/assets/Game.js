import player from "./player";
import Level from "./Level";
import * as controls from "./Controls";
export default function() {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");
  ctx.width = 800;
  ctx.height = 800;
  const level = new Level(70, 140, 200, 500, 3);
  const Player = new player(60, 400, 3, -15);
  controls.hookUp();
  level.init();

  function update() {
    //updates here
    Player.update(controls.Key);
    level.update();
  }

  function draw() {
    //draw here
    ctx.fillStyle = "Black";
    Player.draw(ctx);
    level.draw(ctx);
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
