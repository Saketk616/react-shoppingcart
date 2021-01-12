import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";

const CartItem = ({ product, addInCart }) => {
  return (
    <Card className="mt-2 mb-1">
      <CardImg top height="160" width="100%" src={product.smallImage} />
      <CardBody className="text-center">
        <CardTitle className="m-0 text-primary">
          <h4 style={{ textTransform: "capitalize" }}>{product.productName}</h4>
        </CardTitle>
        <CardText className="m-0 text-secondary">
          Price: Rs {product.productPrice}
        </CardText>
        <Button onClick={() => addInCart(product)} color="success">
          Buy Now
        </Button>
      </CardBody>
    </Card>
  );
};

export default CartItem;
