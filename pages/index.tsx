import Layout from "../src/components/UI/Layout";
import "../src/styles/app.scss";

import { useState, useEffect } from "react";
import { REACT_CARD_CONFIG } from "../src/components/cards/cardCongif";
import CardContainer from "../src/components/cards/CardContainer";
import MatrixRainContainer from "../src/components/sketchs/matrixRain/MatrixRainContainer";
import ParticleSystem from "../src/components/sketchs/particles/particleSystem";
import ParticlesContainer from "../src/components/sketchs/particles/ParticlesContainer";
import SketchPicker from "../src/components/sketchs/SketchPicker";
import ParticlesControlPanel from "../src/components/sketchs/particles/ParticlesControlPanel";
import CollapsableMenu from "../src/components/common/menu/CollapsableMenu";

type HomeProps = {};

const SKILL_CARDS = [REACT_CARD_CONFIG];
export type BACKGROUND_STATE = "PARTICLES" | "MATRIX";

const switchBackground = (state: BACKGROUND_STATE) => {
  switch (state) {
    case "MATRIX":
      return <MatrixRainContainer />;
    case "PARTICLES":
      return <ParticlesContainer />;
    default:
      return <MatrixRainContainer />;
  }
};

const Home: React.FC<HomeProps> = ({ }) => {
  const [loading, setLoading] = useState(true);
  const [backgroundState, setBackgroundState] = useState(
    "PARTICLES" as BACKGROUND_STATE
  );
  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return null;
  //<ParticlesContainer />
  return (
    <div>
      <Layout
        title="home"
        background={switchBackground(backgroundState)}
        header={
          <div className="header__container">
            {backgroundState === "PARTICLES" && (
              <CollapsableMenu menu={<ParticlesControlPanel />} />
            )}
            <SketchPicker
              onChange={(background: BACKGROUND_STATE) =>
                setBackgroundState(background)
              }
            />
          </div>
        }
      >
        {/* <CardContainer cards={SKILL_CARDS} /> */}
        {/* <Link href="/about" as={`${process.env.BACKEND_URL}/about`}>
        <a>About</a>
      </Link> */}
      </Layout>
    </div>
  );
};
export default Home;
