import p5, { Vector } from "p5";

type Dimension = {
  width: number;
  height: number;
};

const ACC_RATE = 0.1;

const checkPos = (pos: number, mouse: number, acceleration: number): number => {
  if (pos <= mouse) return acceleration + ACC_RATE;
  if (pos >= mouse) return acceleration - ACC_RATE;
  return 0;
};

export const getParticles = (
  particlesAmount: number,
  radius: number,
  p5: p5
) => {
  let particles = new Array(particlesAmount);
  for (let i = 0; i < particlesAmount; i++) {
    particles[i] = new Particle({ width: radius, height: radius }, p5);
    colors.pop();
  }
  return particles;
};

let colors = ["red", "green", "blue", "yellow", "orange"];

class Particle {
  dimension: Dimension;
  acceleration: p5.Vector;
  velocity: p5.Vector;
  p5: p5;
  position: p5.Vector;
  tail: Array<p5.Vector>;
  color: string;

  constructor(dimension: Dimension, p5: p5) {
    this.dimension = dimension;
    this.p5 = p5;
    this.acceleration = this.p5.createVector();

    this.velocity = this.p5.createVector();
    this.position = this.p5.createVector(
      Math.random() * window.innerWidth,
      Math.random() * window.innerHeight
    );
    this.tail = [];
    this.color = colors[colors.length - 1] || "black";
  }

  update(mouseX: number, mouseY: number) {
    const { x, y } = this.position;
    this.acceleration = this.p5.createVector(
      checkPos(x, mouseX, this.acceleration.x),
      checkPos(y, mouseY, this.acceleration.y)
    );
    this.acceleration.limit(0.08);
    this.velocity.add(this.acceleration);
    this.velocity.limit(3);
    this.position.add(this.velocity);
    if (this.tail.length > 8) this.tail = this.tail.slice(0, -1);
    else this.tail = [this.position.copy(), ...this.tail];
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
