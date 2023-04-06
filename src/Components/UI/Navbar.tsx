import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const CustomNavbar = function () {
  return (
    <Navbar bg="danger">
      <Container>
        <Navbar.Brand>
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/marvel-282124.png?f=webp&w=256"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="MarvelHeros logo"
          />
          <Link
            to="/MarvelHeros"
            className="text-light mx-3"
            style={{ textDecoration: "none", fontWeight: "700" }}
          >
            MarvelHeros
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
