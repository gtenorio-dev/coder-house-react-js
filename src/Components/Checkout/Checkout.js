import {
    addDoc,
    collection,
    doc,
    getDoc,
    Timestamp,
    updateDoc,
} from "firebase/firestore";
import React, { useContext, useState } from "react";
import { Card, Container, Form, Button } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { CartContext } from "./../../context/CartContext";
import { db } from "./../../firebase/config";

const Checkout = () => {
    const { cart, cartTotal, clearCart } = useContext(CartContext);
    const [orderId, setOrderId] = useState(null);
    const [values, setValues] = useState({
        email: "",
        name: "",
        phoneNumber: "",
    });

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };
    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate("/");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const order = {
            items: cart,
            total: cartTotal(),
            customer: { ...values },
            date: Timestamp.fromDate(new Date()),
        };

        cart.forEach((item) => {
            const docRef = doc(db, "products", item.id);
            getDoc(docRef)
                .then((doc) => {
                    console.log(doc.data().stock);
                    console.log(item.stock);

                    if (doc.data().stock >= item.quantity) {
                        updateDoc(docRef, {
                            stock: doc.data().stock - item.quantity,
                        });
                        addOrderToDB(order);
                    } else {
                        alert(`${item.title} is out of stock`);
                        clearCart();
                        navigateToHome();
                        // TODO IMPLEMENTAR "BATCH UPDATE"
                    }
                })
                .catch(() => alert("Error creating order"));
        });
    };

    const addOrderToDB = (order) => {
        const orderRef = collection(db, "orders");
        addDoc(orderRef, order).then((doc) => {
            console.log(doc.id);
            setOrderId(doc.id);
            clearCart();
        });
    };

    if (orderId) {
        return (
            <Container className="my-5 py-4 text-center">
                <span className="fs-2">
                    Your Order was created successfully!
                </span>
                <div className="d-flex justify-content-center align-items-center my-4">
                    <span>Order code </span>
                    <Card className="p-3 m-4">
                        <span style={{ color: "#b21bff" }} className="fs-4">
                            {orderId}
                        </span>
                    </Card>
                </div>
                <div className="my-5">
                    <Link to="/">
                        <Button variant="success" className="px-4 mt-4">
                            Go to shop
                        </Button>
                    </Link>
                </div>
            </Container>
        );
    }

    if (cart.length === 0) {
        return <Navigate to="/" />;
    }

    return (
        <Container>
            <Container className="my-5 text-center">
                <span style={{ fontSize: "2rem" }}>Checkout</span>
            </Container>
            <Card>
                <Form className="m-4" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            name="email"
                            value={values.email}
                            onChange={handleInputChange}
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            name="name"
                            value={values.name}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your phone number"
                            name="phoneNumber"
                            value={values.phoneNumber}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <div className="mt-4 text-end">
                        <Button
                            variant="primary"
                            type="submit"
                            className="px-4"
                        >
                            Buy
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    );
};

export default Checkout;
