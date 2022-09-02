import { useEffect, useState } from "react";
import swapi from "../../services/swapi";
import { useParams } from "react-router-dom";
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getIdFromUrl } from "../../helpers";
import LoadingSpinner from "../layout/LoadingSpinner";
import LinkItem from "../layout/LinkItem";

const StarshipResults = () => {
  const { id } = useParams()
  const [starship, setStarship] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    fetchStarship()
  }, [])

  const fetchStarship = async () => {
    const data = await swapi.getStarship(id)
    setStarship(data)
    setLoading(false)
  }

  if (!loading) {
    return (
      <Card className="my-4 dark-grey shadow">
        <Card.Header className="text-warning display-6">{starship.name}</Card.Header>
        <Card.Body>
          <Card.Title className="mb-4">Atributos</Card.Title>
          <Row className="mb-3">
            <Col md={4}>
              <Card.Text><strong>Modelo</strong></Card.Text>
            </Col>
            <Col md={8}>
              <Card.Text>{starship.model}</Card.Text>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={4}>
              <Card.Text><strong>Passageiros</strong></Card.Text>
            </Col>
            <Col md={8}>
              <Card.Text>{starship.passengers}</Card.Text>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={4}>
              <Card.Text><strong>Capacidade de Carga</strong></Card.Text>
            </Col>
            <Col md={8}>
              <Card.Text>{starship.cargo_capacity} </Card.Text>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={4}>
              <Card.Text><strong>Comprimento</strong></Card.Text>
            </Col>
            <Col md={8}>
              <Card.Text>{starship.length} </Card.Text>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={4}>
              <Card.Text><strong>Fabricante</strong></Card.Text>
            </Col>
            <Col md={8}>
              <Card.Text>{starship.manufacturer}</Card.Text>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={4}>
              <Card.Text><strong>Equipe Técnica</strong></Card.Text>
            </Col>
            <Col md={8}>
              <Card.Text>{starship.crew}</Card.Text>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={4}>
              <Card.Text><strong>Velocidade máxima de Atmosfera</strong></Card.Text>
            </Col>
            <Col md={8}>
              <Card.Text>{starship.max_atmosphering_speed}</Card.Text>
            </Col>
          </Row>
          <Card.Title className="mb-4 mt-5">Links</Card.Title>
          <Row className="mb-3">
            <Col md={4}>
              <Card.Text><strong>Filmes</strong></Card.Text>
            </Col>
            <Col md={8}>
              <ListGroup>
                {
                  starship.films.map((film) =>
                  (
                    <LinkItem key={getIdFromUrl(film)} category={film} label="Filme" resource="films" />
                  ))
                }
              </ListGroup>
            </Col>
          </Row>
          <Button variant="secondary" onClick={() => navigate(-1)}>« Voltar</Button>
        </Card.Body>
      </Card>
    )
  } else {
    return (
      <LoadingSpinner />
    );
  };
};

export default StarshipResults;