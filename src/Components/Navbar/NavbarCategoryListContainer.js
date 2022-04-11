import React, { useState, useEffect } from "react";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getCategories } from "../../mocks/fakeAPI";
import SpinnerComp from "../Spinner/SpinnerComp";

const NavbarCategoryListContainer = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    console.log(loading);

    useEffect(() => {
        setLoading(true);
        getCategories
            .then((res) => setCategories(res))
            .catch((err) => console.warn(err))
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
