import Pillar from "./Pillar";
export default function(gapMin, gapMax, centerMin, centerMax, nb) {
  this.numberOfPillars = nb;
  this.Pillars = [];
  this.addPillars = () => {
    /* Pillars are composed of a top half and a bottom half seperated by a gap and the center of that gap this data is contained
     this data is contained in the Pillars Array
      * */

    //generation of the gap size randomly
    const randGap = gapMin + Math.floor(Math.random() * (gapMax - gapMin + 1));
    //generation of the center randomly
    const randCenter =
      centerMin + Math.floor(Math.random() * (centerMax - centerMin + 1));

    let pillar = new Pillar(800, 0, 0, 0, randCenter, randGap);

    this.Pillars.push(pillar);
  };
  this.init = () => {
    for (let i = 0; i <= this.numberOfPillars; i++) {
      this.addPillars();
    }
  };
  this.draw = ctx => {
    for (let i = 0; i < this.Pillars.length; i++) {
      this.Pillars[i].draw(ctx);
    }
  };
  this.update = ctx => {
    for (let i = 0; i < this.Pillars.length; i++) {
      this.Pillars[i].update(ctx);
    }
  };
}
