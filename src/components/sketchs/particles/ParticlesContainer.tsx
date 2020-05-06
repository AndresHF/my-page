import loadable from "@loadable/component";
import { useParticles } from "../../UI/hooks/useParticles";
import Particle from "./particle";
import ParticleSystem from "./particleSystem";

const ParticlesContainer: React.FC = ({}) => {
  let particleSystem: ParticleSystem | undefined;
  const { particlesAmount, collision, collider } = useParticles();

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth, window.innerHeight, p5.WEBGL)
      .parent(canvasParentRef);
    p5.strokeWeight(0.5);
    particleSystem = new ParticleSystem(p5, {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });

    particleSystem.setParticles(particlesAmount);
    particleSystem.collision = collision;
    p5.pointLight(255, 255, 255, p5.width / 2, p5.height / 2, 1000);

    if (collider)
      particleSystem.collider = new Particle(
        { width: 40, height: 40 },
        p5,
        {x: window.innerWidth / 2,y: window.innerHeight / 2},
        "black",
      );
  };

  const draw = (p5) => {
    p5.background(255, 100, 255, 0);
    p5.clear();
    p5.noStroke();
    particleSystem.update();
  };

  if (typeof window == "undefined") return null;
  const Sketch = loadable(() => import("react-p5"));

  return (
    <div className="sketch__container">
      <Sketch setup={setup} draw={draw} />;
    </div>
  );
};
export default ParticlesContainer;
