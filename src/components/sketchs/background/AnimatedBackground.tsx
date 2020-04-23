import loadable from "@loadable/component";
import ParticleSystem from "./particleSystem";

type AnimatedBackgroundProps = {};

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({}) => {
  let particleSystem;
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(
      canvasParentRef
    );
    p5.strokeWeight(0.5);
    particleSystem = new ParticleSystem(p5);
  };
  const draw = (p5) => {
    p5.background(255, 100, 255, 0);
    p5.clear();
    p5.noStroke();
    particleSystem.update(p5);
  };
  if (typeof window == "undefined") return null;

  const Sketch = loadable(() => import("react-p5"));
  return (
    <div className="sketchContainer">
      <Sketch setup={setup} draw={draw} />;
    </div>
  );
};
export default AnimatedBackground;
