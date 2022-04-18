import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import SpinnerComp from "../Spinner/SpinnerComp";
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true);

        const docRef = doc(db, "products", itemId);
        getDoc(docRef)
            .then((doc) => {
                setProduct({ id: doc.id, ...doc.data() });
            })
            .finally(() => setLoading(false));
    }, [itemId]);

    return (
        <Container>
            {loading ? (
                <div
                    className="d-flex justify-content-center my-auto align-items-end"
                    style={{ height: "45vh" }}
                >
                    <SpinnerComp />
                </div>
            ) : (
                <ItemDetail {...product} />
            )}
        </Container>
    );
};

export default ItemDetailContainer;
