import { Events } from "../../../interfaces/Events/events.interface";
import { ListGroup } from "react-bootstrap";
const HeroEvents = function (props: { events: Events }) {
  const { events } = props;
  const randomComicsItems: number[] = [];

  for (let i = 0; i <= 2; i++) {
    let index = Math.floor(Math.random() * (events.items.length - 1));
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
      <h5>Events:</h5>
      {events && events.items.length ? (
        <div>
          <p>
            Took place in{" "}
            <span style={{ fontWeight: "600" }}>{events.available} </span>
            events
          </p>
          <ListGroup>
            {randomComicsItems.map((item) => (
              <ListGroup.Item key={item}>
                {events.items[item].name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      ) : (
        <p>Events Data not available</p>
      )}
    </div>
  );
};

export default HeroEvents;
