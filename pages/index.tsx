import Layout from "../src/components/UI/Layout";
import "../src/styles/app.scss";
import AnimatedBackground from "../src/components/sketchs/background/AnimatedBackground";
import { useState, useEffect } from "react";

type HomeProps = {};

const Home: React.FC<HomeProps> = ({}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return null;
  console.log("WINDOW", window);
  return (
    <div>
      <Layout title="home" background={<AnimatedBackground />}>
        HOOOOOLAAA
        {/* <Link href="/about" as={`${process.env.BACKEND_URL}/about`}>
        <a>About</a>
      </Link> */}
      </Layout>
    </div>
  );
};
export default Home;
