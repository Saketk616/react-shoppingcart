import React from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  CardHeader,
  CardBody,
  Card,
  CardFooter,
  Col,
  Row,
} from "reactstrap";

const Cart = ({cartItem, buyNow, removeItem}) => {
    let amount = 0;


    cartItem.forEach(item => {
        amount = parseFloat(amount) + parseFloat(item.productPrice)
    })

    return(
        <Container fluid>
            <h1 className="text-success">Your Cart</h1>
            <ListGroup >
                {cartItem.map(item =>(
                    <ListGroupItem  key={item.id}>
                        <Row>
                            <Col>
                            <img 
                            height={80}
                            src={item.tinyImage}
                            />
                            </Col>
                            <Col className="text-center">
                                <div className="text-primary">
                                   <h5 style={{textTransform: 'capitalize'}}>{item.productName}</h5> 
                                </div>
                                <span className="mr-2 text-secondary">Price: Rs {item.productPrice}</span>
                                <Button color="danger" onClick={() => removeItem(item)}>Remove</Button>
                            </Col>
                        </Row>
                    </ListGroupItem>
                ))}
            </ListGroup>
            {/* If Everything is Empty  */}
            {
                cartItem.length >= 1 ? (
                    <Card className="text-center mt-3">
                        <CardHeader>
                            Grand Total
                        </CardHeader>
                        <CardBody>
                            Your amount for {cartItem.length} product is Rs {amount} only
                        </CardBody>
                        <CardFooter>
                            <Button color="success" onClick={buyNow}>Pay Here</Button>
                        </CardFooter>
                    </Card>
                ):(
                    <h1 className="text-warning"> Cart is Empty</h1>
                )
            }
        </Container>
    )
}

export default Cart;