import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  title: string;
};

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/icons/codeNinja.ico" />
      </Head>
      <Header route="home" />
      <main>
        <div className="container">{children}</div>
      </main>
      <Footer />
    </>
  );
};
export default Layout;
