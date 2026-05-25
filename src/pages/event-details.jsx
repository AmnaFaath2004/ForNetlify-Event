import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"

function EventDetails({events,cart,setCart}){
    const {id}=useParams()

    const singleEvent=events.find(
        (ev)=>ev.id===Number(id)
    );

    const handAddCart =()=>{
        setCart(cart+1)
    }
    return(
        <>
          <Container className="mt-5">
            <Card className="shadow p-4 border-0">
                <Row>
                    <Col md={5}>
                    <Card.Img
                    src={singleEvent?.image ?? null}
                    style={{
                        height:"400px",
                        objectFit:"cover"
                    }}
                    />
                    </Col>

                    <Col md={7}>
                    <Card.Body>
                        <h2>{singleEvent?.name ?? ""}</h2>
                        <p>{singleEvent?.description ?? ""}</p>
                        <h3>${singleEvent?.price ?? ""}</h3>
                        <Button variant="dark" 
                        onClick={handAddCart}>Add to Cart</Button>
                        </Card.Body></Col>
                </Row>

            </Card>
          </Container>
        </>
    )
}
export default EventDetails