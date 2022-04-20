import React, { useState, useEffect } from "react";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getCategories } from "../../mocks/fakeAPI";
import SpinnerComp from "../Spinner/SpinnerComp";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

const NavbarCategoryListContainer = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const categories = collection(db, "categories");
        getDocs(categories)
            .then((res) => {
                const categoryList = res.docs[0].data().categories;
                setCategories(categoryList);
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <NavDropdown
            title="Category"
            className="mx-4"
            id="navbarScrollingDropdown"
        >
            {loading && (
                <div className="d-flex justify-content-center my-auto align-items-end">
                    <SpinnerComp />
                </div>
            )}
            {categories.map((c) => (
                <NavDropdown.Item as={Link} to={`/category/${c}`} key={c}>
                    {c}
                </NavDropdown.Item>
            ))}
        </NavDropdown>
    );
};

export default NavbarCategoryListContainer;
