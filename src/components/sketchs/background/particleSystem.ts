import Particle from "./particle";
import p5 from "p5";
import { switchVelocity, getParticles } from "./utils";

export type WindowOffset = {
  x: number;
  y: number;
};

class ParticleSystem {
  particles: Array<Particle>;
  collision: boolean;
  p5: p5;
  collider: Particle;
  image: any;
  offset: WindowOffset;

  constructor(p5: p5, offset: WindowOffset) {
    this.particles = getParticles(6, 7, p5, offset);
    this.p5 = p5;
    this.collision = true;
    this.image = p5.loadImage("../../../pictures/meFace.png");
    this.offset = offset;
  }

  setParticles(amount: number) {
    const diff = amount - this.particles.length;
    if (diff > 0) {
      this.particles = [
        ...this.particles,
        ...getParticles(diff, 7, this.p5, this.offset),
      ];
    } else if (diff < 0) {
      this.particles = this.particles.slice(0, diff);
    }
  }

  checkColision(
    particleA: Particle,
    particleB: Particle,
    mousePosition?: { x: number; y: number }
  ) {
    let distance;
    if (mousePosition) {
      const { x, y } = mousePosition;

      const realParticlePos = this.p5.createVector(
        particleA.position.x + this.offset.x, 
        particleA.position.y + this.offset.y
      );
      const mousePos = this.p5.createVector(x, y);

      distance = realParticlePos.dist(mousePos) / 6;
    } else {
      distance = particleA.position.dist(particleB.position);
    }
    const collided =
      !particleA.collided && distance <= particleA.dimension.width;

    if (collided) {
      switchVelocity(particleA, particleB, this.p5);
      !this.collider && switchVelocity(particleB, particleA, this.p5);
      particleA.collided = !!this.collider;
      particleA.smallCollision = !this.collider;
      particleB.smallCollision = !this.collider;
    }
  }

  update() {
    const { mouseX, mouseY } = this.p5;
    this.particles.map((particle, i) => {
      particle.update(mouseX, mouseY);
      const otherParticles = [
        ...this.particles.slice(0, i),
        ...this.particles.slice(i + 1, this.particles.length),
      ];
      if (this.collider) {
        this.checkColision(particle, this.collider, { x: mouseX, y: mouseY });
      } else {
        !!this.collision && otherParticles.map((other) => this.checkColision(particle, other));
      }
      particle.draw();
    });
    !!this.collider && this.collider.drawCollider(mouseX, mouseY, this.image);
  }
}

export default ParticleSystem;
