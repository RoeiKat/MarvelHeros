import { Series } from "../../../interfaces/Series/series.interface";
import { ListGroup } from "react-bootstrap";

const HeroSeries = function (props: { series: Series }) {
  const { series } = props;
  const randomComicsItems: number[] = [];

  for (let i = 0; i <= 2; i++) {
    let index = Math.floor(Math.random() * (series.items.length - 1));
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
      <h5>Series:</h5>
      {series && series.items.length ? (
        <div>
          <p>
            Performed in{" "}
            <span style={{ fontWeight: "600" }}>{series.available} </span>
            episodes
          </p>
          <ListGroup>
            {randomComicsItems.map((item) => (
              <ListGroup.Item key={item}>
                {series.items[item].name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      ) : (
        <p>Series Data not available</p>
      )}
    </div>
  );
};

export default HeroSeries;
