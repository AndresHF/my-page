import Layout from "../src/components/UI/Layout";
import "../src/styles/app.scss";
import AnimatedBackground from "../src/components/sketchs/background/AnimatedBackground";
import { useState, useEffect } from "react";
import { REACT_CARD_CONFIG } from "../src/components/cards/cardCongif";
import CardContainer from "../src/components/cards/CardContainer";

type HomeProps = {};

const SKILL_CARDS = [REACT_CARD_CONFIG];

const Home: React.FC<HomeProps> = ({}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return null;
  return (
    <div>
      <Layout title="home" background={<AnimatedBackground />}>
        <CardContainer cards={SKILL_CARDS} />
        {/* <Link href="/about" as={`${process.env.BACKEND_URL}/about`}>
        <a>About</a>
      </Link> */}
      </Layout>
    </div>
  );
};
export default Home;
