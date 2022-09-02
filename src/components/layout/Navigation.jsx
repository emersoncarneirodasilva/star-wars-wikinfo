import { Link, NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import PropTypes from "prop-types";

const Navigation = ({ title }) => {
  return (
    <Navbar variant="dark" expand="md" className="dark-grey shadow p-3 mb-5">
      <Container>
        <Navbar.Brand className="text-warning" as={Link} to="/">{title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/films">Filmes</Nav.Link>
            <Nav.Link as={NavLink} to="/people">Personagens</Nav.Link>
            <Nav.Link as={NavLink} to="/vehicles">Veículos</Nav.Link>
            <Nav.Link as={NavLink} to="/starships">Naves</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

Navigation.defaultProps = {
  title: "Star Wars Wikinfor"
};

Navigation.propTypes = {
  title: PropTypes.string
};

export default Navigation;