import PropTypes from "prop-types";
import { Button, Card, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getIdFromUrl } from "../../helpers";

const VehiclesItem = ({ vehicle: { name, model, passengers, crew, url } }) => {
  return (
    <Col>
      <Card className="dark-grey shadow">
        <Card.Header className="text-warning">{name}</Card.Header>
        <Card.Body>
          <ListGroup variant="flush" className="mb-4 dark-theme rounded">
            <ListGroup.Item><strong>Modelo: </strong>{model}</ListGroup.Item>
            <ListGroup.Item><strong>Passageiros: </strong>{passengers}</ListGroup.Item>
            <ListGroup.Item><strong>Equipe Técnica: </strong>{crew}</ListGroup.Item>
          </ListGroup>
          <Button variant="outline-primary" as={Link} to={getIdFromUrl(url)}>Mais Informações</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

VehiclesItem.propTypes = {
  vehicles: PropTypes.object.isRequired
};

export default VehiclesItem;
