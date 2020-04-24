import { CardConfig } from "./cardCongif";
import Sketch from "react-p5/@types";
import SkillCard from "./SkillCard";

type CardContainerProps = {
  cards: Array<CardConfig>;
};

const CardContainer: React.FC<CardContainerProps> = ({ cards }) => {
  return (
    <div className="card__skill--container">
      {/* {cards.map((card) => (
        <SkillCard key={card.picture} config={card} />
      ))} */}
    </div>
  );
};
export default CardContainer;
