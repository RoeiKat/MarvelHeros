import { Comics } from "../../../interfaces/Comics/comics.interface";
import { ListGroup } from "react-bootstrap";

const HeroComics = function (props: { comics: Comics }) {
  const { comics } = props;
  const randomComicsItems: number[] = [];

  for (let i = 0; i <= 2; i++) {
    let index = Math.floor(Math.random() * (comics.items.length - 1));
    if (
      index === randomComicsItems[0] ||
      index === randomComicsItems[1] ||
      index === randomComicsItems[2]
    )
      continue;
    else {
      randomComicsItems.push(index);
    }
  }

  return (
    <div>
      <h5>Comics:</h5>
      {comics && comics.items.length ? (
        <div>
          <p>
            Seen in{" "}
            <span style={{ fontWeight: "600" }}>{comics.available} </span>
            comics books
          </p>
          <ListGroup>
            {randomComicsItems.map((item) => (
              <ListGroup.Item key={item}>
                {comics.items[item].name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      ) : (
        <p>Comics Data not available</p>
      )}
    </div>
  );
};
export default HeroComics;
