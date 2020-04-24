import { CardConfig } from "./cardCongif";
import { useState } from "react";

type SkillCardProps = {
  config: CardConfig;
};

const getClassName = (className: string, flipped: boolean) => {
  return `${className}${(flipped && "--flipped") || ""}`;
};

const SkillCard: React.FC<SkillCardProps> = ({ config }) => {
  const { picture, skills } = config;
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="card__skill" onClick={() => setFlipped(!flipped)}>
      <div className="card__skill--container">
        <div className={getClassName("front", flipped)}>
          <img src={picture} className="card__skill--picture" />
        </div>
        <div className={getClassName("back", flipped)}>Back</div>
      </div>
      {/* <div className="card__skill--content">
        <button style={{ marginBottom: "2rem" }}>Select</button>
      </div> */}
    </div>
  );
};
export default SkillCard;
