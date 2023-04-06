import { Card } from "react-bootstrap";
import { Hero } from "../../interfaces/hero.interface";
import { nameLength } from "../../util/nameLength";

const HeroCard = function (props: { hero: Hero; onClick: () => void }) {
  const { hero } = props;
  const imageUrl = `${hero.thumbnail.path}.${hero.thumbnail.extension}`;
  return (
    <div onClick={props.onClick}>
      <Card style={{ cursor: "pointer" }}>
        <Card.Img
          variant="top"
          src={imageUrl}
          style={{ width: "100%", height: "200px" }}
        />
        <Card.Title className="mt-1 text-center">
          {nameLength(hero.name)}
        </Card.Title>
      </Card>
    </div>
  );
};

export default HeroCard;
