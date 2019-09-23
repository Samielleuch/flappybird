import player from "./player";
import Level from "./Level";
import Sprite from "./Sprite";

import * as controls from "./Controls";
export default function() {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");
  ctx.width = 800;
  ctx.height = 800;
  const sprite = new Sprite({ ctx });
  sprite.loadImage(require("@/assets/imgs/Level.png"));

  const level = new Level(120, 200, 200, 500, 2, sprite);
  const Player = new player(60, 400, 3, -13, sprite);
  controls.hookUp();
  level.init();
  Player.init();

  function update() {
    //updates here
    Player.update(controls.Key);
    level.update();
  }

  function draw() {
    //draw here
    ctx.fillStyle = "Black";
    level.draw();
    Player.draw();
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
