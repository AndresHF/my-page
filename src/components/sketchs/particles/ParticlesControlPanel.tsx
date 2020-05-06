import { useParticles } from "../../UI/hooks/useParticles";

type ParticlesControlPanelProps = {

}


const ParticlesControlPanel: React.FC<ParticlesControlPanelProps> = ({}) => {
    const { dispatch, collision, collider } = useParticles();

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
            placeholder="N. particles (80)"
            onChange={(e) => {
              const val = parseInt(e.target.value) as number;
              if (!isNaN(val)) {
                dispatch({
                  type: "SET_PARTICLES_AMOUNT",
                  value: val > 80 ? 80 : val,
                });
              }
            }}
          />
        </div>
    );
}
export default ParticlesControlPanel