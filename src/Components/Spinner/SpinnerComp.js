import React from "react";
import { Spinner } from "react-bootstrap";

const SpinnerComp = () => {
    return (
        <Spinner animation="border" role="status" style={{ color: "grey" }}>
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    );
};

export default SpinnerComp;
