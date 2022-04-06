import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Button, Container } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, cartTotal, clearCart, removeCartItem } =
    useContext(CartContext);

  console.log(cart);

  return (
    <Container className="m-5">
      <h3>Your cart</h3>
      <hr />

      {cart.map((prod) => (
        <div key={prod.id}>
          {/* Image width 10rem */}
          <h5>{prod.title}</h5>
          <p>Quantity: {prod.quantity}</p>
          <h5>price: ${prod.price}</h5>
          <Button className="my-4 " variant="danger" onClick={() => removeCartItem(prod.id)}>
            <FontAwesomeIcon icon={faTrashCan} />
          </Button>
          <hr />
        </div>
      ))}

      <h4>Total price: ${cartTotal()}</h4>

      <Button className="my-4 " variant="outline-danger" onClick={clearCart}>
        Clean cart
      </Button>
    </Container>
  );
};

export default Cart;
