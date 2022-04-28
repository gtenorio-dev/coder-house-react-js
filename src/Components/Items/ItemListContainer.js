import React, { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import SpinnerComp from "../Spinner/SpinnerComp";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const { categoryName } = useParams();

    useEffect(() => {
        setProducts([]);
        setLoading(true);

        const productsRef = collection(db, "products");
        const q = categoryName
            ? query(productsRef, where("category", "==", categoryName))
            : productsRef;

        getDocs(q)
            .then((res) => {
                const items = res.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProducts(items);
            })
            .finally(() => setLoading(false));
    }, [categoryName]);

    return (
        <Container>
            {loading && (
                <div
                    className="d-flex justify-content-center my-auto align-items-end"
                    style={{ height: "40vh" }}
                >
                    <SpinnerComp />
                </div>
            )}

            <ItemList products={products} />
        </Container>
    );
};

export default ItemListContainer;
