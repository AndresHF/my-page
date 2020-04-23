import Particle, { getParticles } from "./particle";
import p5 from "p5";

class ParticleSystem {
  particles: Array<Particle>;
  p5: p5;
  constructor(p5: p5) {
    this.particles = getParticles(6, 10, p5);
    this.p5 = p5;
  }

  checkColision(particleA: Particle, particleB: Particle) {
    const distance = particleA.position.dist(particleB.position);
    const collided = distance < particleA.dimension.width;

    if (collided) {
      particleA.velocity = this.p5.createVector(
        particleA.velocity.x * -Math.random() * 10 - particleB.velocity.x,
        particleA.velocity.y * -Math.random() * 10 - particleB.velocity.y
      );
    }
  }

  update() {
    this.particles.map((particle, i) => {
      particle.update(this.p5.mouseX, this.p5.mouseY);
      const otherParticles = [
        ...this.particles.slice(0, i),
        ...this.particles.slice(i + 1, this.particles.length),
      ];
      otherParticles.map((other) => this.checkColision(particle, other));

      particle.draw();
    });
  }
}

export default ParticleSystem;
