import Link from "next/link";
import Layout from "../src/components/UI/Layout";
import "../src/styles/app.scss";
export default () => (
  <div>
    <Layout title="home">
      CONTENT
      <Link href="/about" as={process.env.BACKEND_URL + "/about"}>
        <a>About</a>
      </Link>
    </Layout>
  </div>
);
