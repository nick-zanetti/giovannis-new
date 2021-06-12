import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

const Success = () => {
  return (
    <div>
      <Container>
        <h1>Thank You!</h1>
        <h3>You should receive an emailed receipt with your order shortly </h3>
      </Container>
    </div>
  );
};

export default Success;
