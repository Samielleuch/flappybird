import Pillar from "./Pillar";
export default function(gapMin, gapMax, centerMin, centerMax, nb, sprite) {
  this.numberOfPillars = nb;
  this.Pillars = [];
  this.betweenPillars = 300;
  this.PillarStart = 900;
  this.backgroundMvt = 780;
  this.sprite = sprite;
  this.addPillars = flag => {
    /* Pillars are composed of a top half and a bottom half seperated by a gap and the center of that gap this data is contained
     this data is contained in the Pillars Array
      * */
    //generation of the gap size randomly
    let randGap = gapMin + Math.floor(Math.random() * (gapMax - gapMin + 1));
    //generation of the center randomly
    let randCenter =
      centerMin + Math.floor(Math.random() * (centerMax - centerMin + 1));

    if (flag === true) {
      let increment = this.betweenPillars;
      for (let i = 0; i <= this.numberOfPillars; i++) {
        let pillar = new Pillar(
          this.PillarStart + increment,
          0,
          3,
          0,
          randCenter,
          randGap,
          this.sprite
        );
        increment += this.betweenPillars;
        this.Pillars.push(pillar);
        randGap = gapMin + Math.floor(Math.random() * (gapMax - gapMin + 1));
        randCenter =
          centerMin + Math.floor(Math.random() * (centerMax - centerMin + 1));
      }
    } else {
      let pillar = new Pillar(
        this.PillarStart,
        0,
        3,
        0,
        randCenter,
        randGap,
        this.sprite
      );
      this.Pillars.push(pillar);
    }
  };
  this.init = () => {
    this.sprite.Define("PillarHead", 1, 650, 26, 54);
    this.sprite.Define("PillarBody", 1, 700, 26, 54);
    this.sprite.Define("Background", 290, 0, 510, 280);
    console.log(this.sprite.subImages);
    //adding pillar for the first time with the flag
    this.addPillars(true);
  };
  this.checkPillars = () => {
    //function that checks if there are any pillars that are no longer visible
    // checking the first Pillar in the Pillars Array should be enough
    if (this.Pillars[0].x < 0) return true;
  };
  this.draw = () => {
    for (let i = 0; i < 2; i++) {
      this.sprite.draw("Background", this.backgroundMvt, 0, 400, 800);
      this.sprite.draw("Background", this.backgroundMvt - 397, 0, 400, 800);
      this.sprite.draw("Background", this.backgroundMvt - 797, 0, 403, 800);
    }
    for (let i = 0; i < this.Pillars.length; i++) {
      this.Pillars[i].draw(this.sprite);
    }
  };
  this.update = ctx => {
    this.backgroundMvt -= 4;
    if (this.backgroundMvt < 400) {
      this.backgroundMvt = 800;
    }
    if (this.checkPillars()) {
      this.Pillars.shift();
      this.addPillars();
    }
    for (let i = 0; i < this.Pillars.length; i++) {
      this.Pillars[i].update(ctx);
    }
  };
}
