import React, { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { Container } from "react-bootstrap";
import { getProducts } from "../../mocks/fakeAPI";
import { useParams } from "react-router-dom";
import SpinnerComp from "../Spinner/SpinnerComp";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const { categoryName } = useParams();

    useEffect(() => {
        setLoading(true);

        if (categoryName) {
            setProducts([]);
            getProducts
                .then((res) =>
                    setProducts(
                        res.filter((prod) => prod.category === categoryName)
                    )
                )
                .catch((err) => console.warn(err))
                .finally(() => setLoading(false));
        } else {
            getProducts
                .then((res) => setProducts(res))
                .catch((err) => console.warn(err))
                .finally(() => setLoading(false));
        }
        // console.log(products);
    }, [categoryName]);

    return (
        <Container>
            {loading && (
                <div
                    className="d-flex justify-content-center my-auto align-items-end"
                    style={{ height: "45vh" }}
                >
                    <SpinnerComp />
                </div>
            )}

            <ItemList products={products} />
        </Container>
    );
};

export default ItemListContainer;
