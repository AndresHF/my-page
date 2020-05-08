import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import { ReactNodeLike } from "prop-types";
import { ParticlesProvider } from "./hooks/useParticles";

type LayoutProps = {
  title: string;
  background?: ReactNodeLike;
  header?: ReactNodeLike;
  footer?: ReactNodeLike;
  disableHeader?: boolean;
};

const Layout: React.FC<LayoutProps> = ({
  title,
  background,
  header,
  disableHeader,
  children,
}) => {
  return (
    <ParticlesProvider>
      <Head>
        <title>{title}</title>
        <link
          rel="icon"
          href={`${process.env.BACKEND_URL}/icons/codeNinja.ico`}
        />
      </Head>
      {!disableHeader && header ? (
        <Header route="home" style={{ backgroundColor: "transparent" }}>
          {header}
        </Header>
      ) : (
        <Header route="home" />
      )}
      <main>
        {background}
        <div className="container">{children}</div>
      </main>
      <Footer />
    </ParticlesProvider>
  );
};
export default Layout;
