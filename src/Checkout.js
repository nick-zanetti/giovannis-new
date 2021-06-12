import React, { useState } from "react";
import { connect } from "react-redux";

import Cart from "./Cart";

import emailjs from "emailjs-com";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Form, Row, Col } from "react-bootstrap";

const Checkout = (props) => {
  const [validated, setValidated] = useState(false);

  function sendEmail(event) {
    console.log("Email function fired");
    emailjs
      .sendForm(
        "service_ghrughr",
        "template_7x9g94c",
        event.target,
        "user_r8Ay4FYsSXSkq1o4bGJtd"
      )
      .then(
        (result) => {
          console.log(result.text);
          redirect();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    if (form.checkValidity() === true) {
      event.preventDefault();
      sendEmail(event);
    }
  };

  const redirect = () => {
    window.location.href = "/success";
  };

  let order = props.cartitems.map(
    (item) => `<b>${item.title}</b>...${item.price} <br>`
  );

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>Checkout</h1>
            <h3>Delivery Address</h3>
            <Form
              noValidate
              validated={validated}
              onSubmit={(event) => {
                handleSubmit(event);
              }}
            >
              <Row>
                <Col>
                  <Row>
                    <Col>
                      <Form.Group controlId="formFirstName">
                        <Form.Label>First name</Form.Label>
                        <Form.Control required type="text" name="first_name" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="formLastName">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control required type="text" />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      required
                      type="email"
                      placeholder="you@provider.com"
                      name="email"
                    />
                  </Form.Group>
                  <Form.Group controlId="formAddress">
                    <Form.Label>Street Address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="123 Main St"
                      name="street"
                      required
                    />
                  </Form.Group>
                  <Row>
                    <Col>
                      <Form.Group controlId="formCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control required type="text" name="city" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="formState">
                        <Form.Label>State</Form.Label>
                        <Form.Control required as="select" name="state">
                          <option value="">N/A</option>
                          <option value="AK">Alaska</option>
                          <option value="AL">Alabama</option>
                          <option value="AR">Arkansas</option>
                          <option value="AZ">Arizona</option>
                          <option value="CA">California</option>
                          <option value="CO">Colorado</option>
                          <option value="CT">Connecticut</option>
                          <option value="DC">District of Columbia</option>
                          <option value="DE">Delaware</option>
                          <option value="FL">Florida</option>
                          <option value="GA">Georgia</option>
                          <option value="HI">Hawaii</option>
                          <option value="IA">Iowa</option>
                          <option value="ID">Idaho</option>
                          <option value="IL">Illinois</option>
                          <option value="IN">Indiana</option>
                          <option value="KS">Kansas</option>
                          <option value="KY">Kentucky</option>
                          <option value="LA">Louisiana</option>
                          <option value="MA">Massachusetts</option>
                          <option value="MD">Maryland</option>
                          <option value="ME">Maine</option>
                          <option value="MI">Michigan</option>
                          <option value="MN">Minnesota</option>
                          <option value="MO">Missouri</option>
                          <option value="MS">Mississippi</option>
                          <option value="MT">Montana</option>
                          <option value="NC">North Carolina</option>
                          <option value="ND">North Dakota</option>
                          <option value="NE">Nebraska</option>
                          <option value="NH">New Hampshire</option>
                          <option value="NJ">New Jersey</option>
                          <option value="NM">New Mexico</option>
                          <option value="NV">Nevada</option>
                          <option value="NY">New York</option>
                          <option value="OH">Ohio</option>
                          <option value="OK">Oklahoma</option>
                          <option value="OR">Oregon</option>
                          <option value="PA">Pennsylvania</option>
                          <option value="PR">Puerto Rico</option>
                          <option value="RI">Rhode Island</option>
                          <option value="SC">South Carolina</option>
                          <option value="SD">South Dakota</option>
                          <option value="TN">Tennessee</option>
                          <option value="TX">Texas</option>
                          <option value="UT">Utah</option>
                          <option value="VA">Virginia</option>
                          <option value="VT">Vermont</option>
                          <option value="WA">Washington</option>
                          <option value="WI">Wisconsin</option>
                          <option value="WV">West Virginia</option>
                          <option value="WY">Wyoming</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="formZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control required type="text" name="zip" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button variant="primary" type="submit" className="mb-2">
                    Submit
                  </Button>
                </Col>
              </Row>
              <textarea
                style={{ display: "none" }}
                name="items"
                defaultValue={order.join("")}
              />
            </Form>
          </Col>
          <Col>
            <Cart />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = ({ modalitem, cartitems, subtotal }) => ({
  modalitem,
  cartitems,
  subtotal,
});

export default connect(mapStateToProps)(Checkout);
