import { Hero } from "../../interfaces/hero.interface";
import { Modal } from "react-bootstrap";

import HeroComics from "./HeroInfo/HeroComics";
import HeroSeries from "./HeroInfo/HeroSeries";
import HeroDescription from "./HeroInfo/HeroDescription";
import HeroEvents from "./HeroInfo/HeroEvents";

const HeroModal = function (props: {
  hero: Hero | null;
  show: boolean;
  closeModal: () => void;
}) {
  const { hero, show, closeModal } = props;
  if (!hero) return <div />;
  const { comics, series, events, urls } = hero;
  const imageUrl = `${hero.thumbnail.path}.${hero.thumbnail.extension}`;
  return (
    <Modal show={show} onHide={closeModal} className="modal-xl">
      <Modal.Header closeButton className="mx-4">
        <div className="col-12 text-center">
          <Modal.Title>{hero.name}</Modal.Title>
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-column flex-lg-row">
          <div className="col-12 col-md-12 col-lg-7 col-xl-4 d-flex justify-content-center">
            <img src={imageUrl} style={{ height: "400px", maxWidth: "90%" }} />
          </div>
          <div className="col-12 col-md-12 col-lg-5 col-xl-8 mt-3">
            <div className="d-flex flex-column">
              <div>
                <HeroDescription description={hero.description} />
              </div>
              <div className="d-flex flex-column flex-lg-row">
                <div className="col-12 col-lg-4 mt-1">
                  <HeroComics comics={comics} />
                </div>
                <div className="col-12 col-lg-4 mx-1 mt-1">
                  <HeroSeries series={series} />
                </div>
                <div className="col-12 col-lg-4 mt-1">
                  <HeroEvents events={events} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="col-12 text-center">Data provided by MARVEL ©</div>
      </Modal.Footer>
    </Modal>
  );
};

export default HeroModal;
