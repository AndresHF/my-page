import { useParticles } from "../../UI/hooks/useParticles";
import { useResponsive } from "../../../hooks/useResponsive";

type ParticlesControlPanelProps = {};

const getMaxAmount = (responsiveBreakpoint: boolean) => {
  return (responsiveBreakpoint && 20) || 80;
};

const ParticlesControlPanel: React.FC<ParticlesControlPanelProps> = ({}) => {
  const { dispatch, collision, collider, particlesAmount } = useParticles();
  const { mdAndDown } = useResponsive();
  const maxAmount = getMaxAmount(mdAndDown);

  return (
    <div className="controlPanel">
      <button
        onClick={() => dispatch({ type: "SET_COLLIDER", value: !collider })}
      >
        {`${collider ? "Remove " : "Use"} collider`}
      </button>
      <button
        onClick={() => dispatch({ type: "SET_COLLISION", value: !collision })}
      >
        {`${collision ? "Disable " : "Enable"} collision`}
      </button>
      <button
        onClick={() => dispatch({ type: "SET_PARTICLES_AMOUNT", value: 0 })}
      >
        Remove particles
      </button>
      <button
        onClick={() => dispatch({ type: "SET_PARTICLES_AMOUNT", value: 6 })}
      >
        Reset
      </button>
      <input
        type="number"
        max={100}
        placeholder={`N. particles (${maxAmount})`}
        value={particlesAmount}
        onChange={(e) => {
          const val = parseInt(e.target.value) as number;
          if (!isNaN(val)) {
            dispatch({
              type: "SET_PARTICLES_AMOUNT",
              value: val > maxAmount ? maxAmount : val,
            });
          }
        }}
      />
    </div>
  );
};
export default ParticlesControlPanel;
