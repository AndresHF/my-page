import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import { ReactNodeLike } from "prop-types";

type LayoutProps = {
  title: string;
  background?: ReactNodeLike;
};

const Layout: React.FC<LayoutProps> = ({ title, background, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/icons/codeNinja.ico" />
      </Head>
      <Header route="home" />
      <main>
        {background}
        <div className="container">{children}</div>
      </main>
      <Footer />
    </>
  );
};
export default Layout;
