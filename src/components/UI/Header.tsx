import { useParticles } from "./hooks/useParticles";
import ParticlesControlPanel from "../sketchs/particles/ParticlesControlPanel";

type HeaderProps = {
  route: string;
  style?: React.CSSProperties;
};

const Header: React.FC<HeaderProps> = ({ route, style, children }) => {
  return (
    <header style={style}>
      {(children && children) || <div>Default Header</div>}
    </header>
  );
};
export default Header;
