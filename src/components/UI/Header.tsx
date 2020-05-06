import { useParticles } from "./hooks/useParticles";
import ParticlesControlPanel from "../sketchs/particles/ParticlesControlPanel";

type HeaderProps = {
  route: string;
};

const Header: React.FC<HeaderProps> = ({ route, children }) => {

  return (
    <header>
      {children && children || (
        <div>Default Header</div>
      )}
    </header>
  );
};
export default Header;
