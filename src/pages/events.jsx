import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Events({events}){
    return(
        <>
        <Container className="mt-5">
  <h1 className="text-center mb-5">Our Events</h1>

  <Row>
    {events.map((services) => (
      <Col
        lg={4}
        md={6}
        sm={12}
        className="mb-4"
        key={services.id}
      >
        <Card
          className="shadom h-100 border-0"
          
        >
          <Card.Img
            variant="top"
            src={services.image}
            height="250px"
            style={{
              objectFit: "cover"
            }}
          />

          <Card.Body>
            <Card.Title>{services.name}</Card.Title>

            <Card.Text>
              {services.description}
            </Card.Text>

            <h5>${services.price}</h5>

            <Link to={`/Event-Details/${services.id}`}>
              <Button variant="dark">
                View Service
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</Container>
        
        </>
    )
}
export default Events



