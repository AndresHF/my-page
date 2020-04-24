import p5 from "p5";
import { WindowOffset } from "./particleSystem";
import { checkPos } from "./utils";

type Dimension = {
  width: number;
  height: number;
};

class Particle {
  dimension: Dimension;
  acceleration: p5.Vector;
  velocity: p5.Vector;
  p5: p5;
  position: p5.Vector;
  tail: Array<p5.Vector>;
  color: string;
  accLimit: number;
  velLimit: number;
  offset: WindowOffset;
  collided: boolean;
  collidedCount: number;
  smallCollision: boolean;

  constructor(
    dimension: Dimension,
    p5: p5,
    offset: WindowOffset,
    color: string,
    velocity?: p5.Vector
  ) {
    this.dimension = dimension;
    this.p5 = p5;
    this.acceleration = this.p5.createVector();

    this.velocity = velocity ? velocity : this.p5.createVector();
    this.position = this.p5.createVector(
      Math.random() * window.innerWidth - window.innerWidth / 2,
      Math.random() * window.innerHeight - window.innerHeight / 2
    );
    this.accLimit = Math.random() * 2;
    this.velLimit = 3.5;
    this.tail = [];
    this.color = color;
    this.offset = offset;
    this.collided = false;
    this.smallCollision = false;
    this.collidedCount = 0;
  }

  update(mouseX: number, mouseY: number) {
    const { x, y } = this.position;

    this.acceleration = this.p5.createVector(
      checkPos(x, mouseX - this.offset.x, this.acceleration.x),
      checkPos(y, mouseY - this.offset.y, this.acceleration.y)
    );

    this.acceleration.limit(this.accLimit);
    this.acceleration.setMag(this.collided ? -2 : this.smallCollision ? -0.01 : 0.2);
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.collided ? 10 : this.smallCollision ? 5: this.velLimit)
    this.position.add(this.velocity);

    if (this.tail.length > 4) this.tail = this.tail.slice(0, -1);
    else this.tail = [this.position.copy(), ...this.tail];

    (this.collided || this.smallCollision) && this.collidedCount++;
    if (this.collidedCount  >= (this.smallCollision ? 15 : 80)) {
      this.collided = false;
      this.smallCollision = false;
      this.collidedCount = 0;
    }
  }

  drawCollider(mouseX: number, mouseY: number, image: any) {
    const millis = this.p5.millis();

    this.p5.pointLight(255, 255, 255, 0, 0, 10000);

    this.p5.texture(image);
    this.p5.push();
    this.p5.translate(mouseX - this.offset.x, mouseY - this.offset.y, 0);
    this.p5.rotateY(millis / 1000);
    this.p5.sphere(40, 24, 24);
    this.p5.pop();
  }

  draw() {
    const { width, height } = this.dimension;
    this.p5.fill(this.color);
    this.p5.ellipse(this.position.x, this.position.y, width, height);

    for (let i = 0; i < this.tail.length; i++) {
      this.p5.ellipse(this.tail[i].x, this.tail[i].y, width - i, height - i);
    }
  }
}

export default Particle;
