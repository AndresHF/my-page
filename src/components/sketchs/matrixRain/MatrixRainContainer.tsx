import loadable from "@loadable/component";
import Symbol from "./symbol";

const X_OFFSET = 30;

const MatrixRainContainer: React.FC = ({}) => {
  let symbols = [] as Array<Symbol>;
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth, window.innerHeight + 50).parent(
      canvasParentRef
    );
    p5.strokeWeight(2);
    p5.textSize(20);
    const mobileOffset = window.innerWidth < 500 ? 0 : 20;
    for (let i = 0; i < window.innerWidth / 31; i++) {
      symbols[i] = new Symbol(
        p5,
        mobileOffset === 0,
        mobileOffset + i * X_OFFSET
      );
    }
  };

  const draw = (p5) => {
    p5.clear();
    p5.background(0, 0, 0);
    symbols.forEach((s) => {
      s.update(p5);
    });
  };

  if (typeof window == "undefined") return null;
  const Sketch = loadable(() => import("react-p5"));

  return (
    <div className="sketch__container">
      <Sketch setup={setup} draw={draw} />;
    </div>
  );
};
export default MatrixRainContainer;
