import loadable from "@loadable/component";
import Symbol from "./symbol";

const SYMBOLS_LENGTH = 120;

const MatrixRainContainer: React.FC = ({}) => {

  let symbols = [] as Array<Symbol>;
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth, window.innerHeight)
      .parent(canvasParentRef);
    p5.strokeWeight(0.8);
    p5.textSize(20);
    for(let i = 0; i < SYMBOLS_LENGTH; i++) {
        symbols[i] = new Symbol(p5);
    }
  };

  const draw = (p5) => {
    p5.clear();
    p5.background(0, 0, 0);
    symbols.forEach(s => {
        s.update(p5);
        s.draw(p5);
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