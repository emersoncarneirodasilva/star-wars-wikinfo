import { useEffect, useState } from "react";
import swapi from "../../services/swapi";
import { useParams } from "react-router-dom";
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getIdFromUrl } from "../../helpers";
import LoadingSpinner from "../layout/LoadingSpinner";
import LinkItem from "../layout/LinkItem";

const PersonResults = () => {
  const { id } = useParams()
  const [person, setPerson] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    fetchPerson()
  }, [])

  const fetchPerson = async () => {
    const data = await swapi.getPerson(id)
    setPerson(data)
    setLoading(false)
  }

  if (!loading) {
    return (
      <Card className="my-4 dark-grey shadow">
        <Card.Header className="text-warning display-6">{person.name}</Card.Header>
        <Card.Body>
          <Card.Title className="mb-4">Atributos</Card.Title>
          <Row className="mb-3">
            <Col md={4}>
              <Card.Text><strong>Gênero</strong></Card.Text>
            </Col>
            <Col md={8}>
              <Card.Text>{person.gender}</Card.Text>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={4}>
              <Card.Text><strong>Nascimento</strong></Card.Text>
            </Col>
            <Col md={8}>
              <Card.Text>{person.birth_year}</Card.Text>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={4}>
              <Card.Text><strong>Altura</strong></Card.Text>
            </Col>
            <Col md={8}>
              <Card.Text>{person.height} cm</Card.Text>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={4}>
              <Card.Text><strong>Peso</strong></Card.Text>
            </Col>
            <Col md={8}>
              <Card.Text>{person.mass} kg</Card.Text>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={4}>
              <Card.Text><strong>Cor do Cabelo</strong></Card.Text>
            </Col>
            <Col md={8}>
              <Card.Text>{person.hair_color}</Card.Text>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={4}>
              <Card.Text><strong>Cor da Pele</strong></Card.Text>
            </Col>
            <Col md={8}>
              <Card.Text>{person.skin_color}</Card.Text>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={4}>
              <Card.Text><strong>Cor dos Olhos</strong></Card.Text>
            </Col>
            <Col md={8}>
              <Card.Text>{person.eye_color}</Card.Text>
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
                  person.films.map((film) => (
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

export default PersonResults;