import {
    addDoc,
    collection,
    documentId,
    getDocs,
    query,
    Timestamp,
    where,
    writeBatch,
} from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { Card, Container, Form, Button } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import SpinnerComp from "../Spinner/SpinnerComp";
import { CartContext } from "./../../context/CartContext";
import { db } from "./../../firebase/config";

const Checkout = () => {
    const [loading, setLoading] = useState(false);
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        const order = {
            items: cart,
            total: cartTotal(),
            customer: { ...values },
            date: Timestamp.fromDate(new Date()),
        };

        const batch = writeBatch(db);
        const productsRef = collection(db, "products");
        const cartItemsIds = cart.map((item) => item.id);
        const q = query(productsRef, where(documentId(), "in", cartItemsIds));
        const products = await getDocs(q);

        const outOfStock = [];

        products.docs.forEach((doc) => {
            const itemInCart = cart.find((item) => item.id === doc.id);
            if (doc.data().stock >= itemInCart.quantity) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemInCart.quantity,
                });
            } else {
                outOfStock.push(itemInCart);
            }
        });

        if (outOfStock.length === 0) {
            await batch.commit();
            addOrderToDB(order);
        } else {
            // TODO CAMBIAR EL  MENSAJE DE ERROR.
            alert(`${outOfStock} is out of stock`);
            clearCart();
            navigateToHome();
        }
    };

    const addOrderToDB = (order) => {
        const orderRef = collection(db, "orders");
        addDoc(orderRef, order).then((doc) => {
            // console.log(doc.id);
            setOrderId(doc.id);
            setLoading(false);
            clearCart();
        });
    };

    if (orderId) {
        return (
            <Container
                className="my-5 py-4 text-center"
                style={{ maxWidth: "50rem" }}
            >
                <div className="my-5 p-1">
                    <span className="fs-2">
                        Your order was created successfully!
                    </span>
                </div>

                <div className="p-1">
                    <span className="fs-4">
                        You have 48 hours to complete the payment. Follow the
                        instructions that we send to your mail {values.email}
                    </span>
                </div>
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
                        <Button
                            variant="primary"
                            size="lg"
                            className="px-4 mt-4"
                        >
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

    if (loading) {
        return (
            <Container>
                <div
                    className="d-flex flex-column justify-content-center align-items-center my-auto align-items-end"
                    style={{ height: "40vh" }}
                >
                    <div className="fs-4 my-5 text-center">
                        <span>We are creating your order...</span>
                    </div>
                    <SpinnerComp />
                </div>
            </Container>
        );
    }

    return (
        <Container>
            <Container className="my-5 text-center">
                <span style={{ fontSize: "2rem" }}>Checkout</span>
            </Container>
            <Card style={{ maxWidth: "50rem" }} className="mx-auto">
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
                        <Form.Label>Name and Surname</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your name and surname"
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
