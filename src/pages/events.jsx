import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Events() {

  const {products} = useSelector((state)=>state.productState)
  
  
  return (
    <>
      <Container className="mt-5">
        <h1 className="text-center mb-5">Our Events</h1>

        <Row>
          {products.map((product) => (
            <Col
              lg={4}
              md={6}
              sm={12}
              className="mb-4"
              key={product.id}
            >
              <Card
                className="shadom h-100 border-0"

              >
                <Card.Img
                  variant="top"
                  src={product.productPhoto}
                  height="250px"
                  style={{
                    objectFit: "cover"
                  }}
                />

                <Card.Body>
                  <Card.Title>{product.productName}</Card.Title>

                  <Card.Text>
                    {product.productDescription}
                  </Card.Text>

                  <h5>${product.productPrice}</h5>

                  <Link to={`/Event-Details/${product.id}`}>
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



