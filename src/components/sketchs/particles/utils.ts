import Particle from "./particle";
import p5 from "p5";
import { WindowOffset } from "./particleSystem";

export const switchVelocity = (particleA: Particle, particleB: Particle, p5: p5) => {
    particleA.velocity = p5.createVector(
      particleA.velocity.x * -Math.random() * 30 - particleB.velocity.x,
      particleA.velocity.y * -Math.random() * 30 - particleB.velocity.y
    );
};


export const ACC_RATE = 0.1;

export const checkPos = (pos: number, mouse: number, acceleration: number): number => {
  if (pos <= mouse) return acceleration + ACC_RATE;
  if (pos >= mouse) return acceleration - ACC_RATE;
  return 0;
};

export const getParticles = (
  particlesAmount: number,
  radius: number,
  p5: p5,
  offset: WindowOffset
) => {
  let particles = new Array(particlesAmount);
  for (let i = 0; i < particlesAmount; i++) {
    particles[i] = new Particle(
      { width: radius, height: radius },
      p5,
      offset,
      colors[i % colors.length]
    );
  }
  return particles;
};

export const colors = [
  "red",
  "green",
  "blue",
  "purple",
  "orange",
  "goldenrod",
  "limegreen",
  "teal",
  "pink",
  "brown",
  "indigo",
  "cyan",
  "crismon",
  "darkred",
  "darkorange",
  "gold",
  "darkgreen",
  "paleturquoise",
  "darkcyan",
  "mediumblue",
  "mediumorchid",
  "lightslategray",
  "sienna"
];