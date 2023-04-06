import { Hero } from "../../interfaces/hero.interface";
import { Modal } from "react-bootstrap";

const HeroModal = function (props: {
  hero: Hero | null;
  show: boolean;
  closeModal: () => void;
}) {
  const { hero, show, closeModal } = props;
  if (!hero) return <div />;
  const imageUrl = `${hero.thumbnail.path}.${hero.thumbnail.extension}`;
  return (
    <Modal show={show} onHide={closeModal}>
      <Modal.Header closeButton className="text-center">
        <Modal.Title className="text-center">{hero.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={imageUrl} style={{ width: "100%", height: "300px" }} />
        <div className="mt-1 p-2 border top">
          <h5>Description:</h5>
          <p>
            {hero.description
              ? hero.description
              : "There is no description available for this hero"}
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default HeroModal;
