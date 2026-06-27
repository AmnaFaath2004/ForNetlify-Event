import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { addCartItem } from "../Redux/productSlice";

function EventDetails({ cart, setCart }) {

    const { products } = useSelector((state) => state.productState)
    const { id } = useParams()
    console.log("id---------->", id);
    console.log("products---------->", products);


    const dispatch = useDispatch()
    
    const singleProduct = products.find(
        (ev) => ev.id === Number(id)
    );
    console.log("singleProduct------>", singleProduct);


    

    const handAddCart = () => {
        // setCart(cart + 1)
        dispatch(addCartItem(singleProduct))
    }


    return (
        <>
            <Container className="mt-5">
                <Card className="shadow p-4 border-0">
                    {singleProduct ? (<Row>
                        <Col md={5}>
                            <Card.Img
                                src={singleProduct?.productPhoto ?? null}
                                style={{
                                    height: "400px",
                                    objectFit: "cover"
                                }}
                            />
                        </Col>

                        <Col md={7}>
                            <Card.Body>
                                <h2>{singleProduct?.productName ?? ""}</h2>
                                <p>{singleProduct?.productDiscription ?? ""}</p>
                                <h3>${singleProduct?.productPrice ?? ""}</h3>
                                <Button
                                    variant="dark"
                                    onClick={() => handAddCart()}
                                >
                                    Add to Cart
                                </Button>
                            </Card.Body></Col>
                    </Row>) : (
                        <Row>
                            <Col className="text-center">
                                <h4>
                                    Product not found</h4></Col>
                        </Row>
                    )}


                </Card>
            </Container>
        </>
    )
}
export default EventDetails