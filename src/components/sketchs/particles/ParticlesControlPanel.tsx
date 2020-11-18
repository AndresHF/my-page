import { useParticles } from "../../UI/hooks/useParticles";
import { useResponsive } from "../../../hooks/useResponsive";
import Text from "../../typography/Text";
import { useState } from "react";

type ParticlesControlPanelProps = {};

const getMaxAmount = (responsiveBreakpoint: boolean) => {
  return (responsiveBreakpoint && 20) || 80;
};

const textStyles = {
  cursor: "pointer",
  marginRight: "2rem",
} as React.CSSProperties;

const ParticlesControlPanel: React.FC<ParticlesControlPanelProps> = ({ }) => {
  const { dispatch, collision, collider, particlesAmount } = useParticles();
  const { mdAndDown } = useResponsive();
  const maxAmount = getMaxAmount(mdAndDown);
  const [val, setVal] = useState("6");

  return (
    <div className="controlPanel">
      <Text
        style={textStyles}
        bold
        onClick={() => dispatch({ type: "SET_COLLIDER", value: !collider })}
      >
        {`${collider ? "Remove " : "Use"} collider`}
      </Text>
      <Text
        style={textStyles}
        bold
        onClick={() => dispatch({ type: "SET_COLLISION", value: !collision })}
      >
        {`${collision ? "Disable " : "Enable"} collision`}
      </Text>
      <Text
        style={textStyles}
        bold
        onClick={() => dispatch({ type: "SET_PARTICLES_AMOUNT", value: 0 })}
      >
        Remove particles
      </Text>
      <Text
        style={textStyles}
        bold
        onClick={() => dispatch({ type: "SET_PARTICLES_AMOUNT", value: 6 })}
      >
        Reset
      </Text>
      <input
        type="number"
        max={100}
        placeholder={`max ${maxAmount}`}
        value={val}
        onChange={(e) => {
          e.preventDefault();
          const val = e.target.value;
          setVal(val);
          const intVal = parseInt(val);
          const maxedValue = intVal > maxAmount ? maxAmount : intVal;
          if (!isNaN(maxedValue)) {
            dispatch({
              type: "SET_PARTICLES_AMOUNT",
              value: maxedValue,
            });
            setVal(`${maxedValue}`);
          }
        }}
      />
    </div>
  );
};
export default ParticlesControlPanel;
