import React from "react";
import { Spinner } from "react-bootstrap";

const SpinnerComp = () => {
  return (
    <div
      className="d-flex justify-content-center my-auto align-items-end"
      style={{ height: "45vh" }}
    >
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default SpinnerComp;
