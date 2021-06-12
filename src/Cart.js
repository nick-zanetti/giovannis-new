import React, { useState } from "react";
import Modal from "./Modal";
import { connect } from "react-redux";
import removeCartItem from "./actionGenerators/removeCartItem";
import addModalItem from "./actionGenerators/addModalItem";
import { subtractTotal } from "./actionGenerators/changeTotal";

import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup, Col, Card, Button, Row } from "react-bootstrap";

const Cart = (props) => {
  const [show, setShow] = useState(false);
  const modalOpen = () => setShow(true);
  const modalClose = () => setShow(false);

  return (
    <div>
      <Card>
        <Card.Header>Your Order ({props.cartitems.length})</Card.Header>
        <ListGroup>
          {props.cartitems.map((item) => (
            <ListGroup.Item key={item.id}>
              <Row>
                <Col>
                  <p>{item.title}</p>
                  {item.mod1Add ? (
                    <small>
                      <p className="text-muted">{item.mod1}</p>
                    </small>
                  ) : (
                    <small></small>
                  )}
                  {item.mod2Add ? (
                    <small>
                      <p className="text-muted">{item.mod2}</p>
                    </small>
                  ) : (
                    <small></small>
                  )}
                </Col>
                <Col>
                  <Button
                    className="mx-1"
                    onClick={() => {
                      props.removeCartItem(item.id);
                      props.subtractTotal(item.price);
                    }}
                  >
                    X
                  </Button>
                  <Button
                    onClick={() => {
                      props.addModalItem(item);
                      modalOpen();
                    }}
                  >
                    Modify
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col>{"$" + item.price}</Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <Card.Body>
          <Col>Subtotal: ${Math.max(0, props.subtotal.toFixed(2))}</Col>
          <Col>
            <Card.Link href="/checkout">Checkout</Card.Link>
          </Col>
        </Card.Body>
      </Card>
      <Modal
        show={show}
        modalClose={modalClose}
        modalOpen={modalOpen}
        type="mod"
      />
    </div>
  );
};

const mapStateToProps = ({ modalitem, cartitems, subtotal }) => ({
  modalitem,
  cartitems,
  subtotal,
});

const mapDispatchToProps = (dispatch) => ({
  removeCartItem: (id) => dispatch(removeCartItem(id)),
  addModalItem: (item) => dispatch(addModalItem(item)),
  subtractTotal: (price) => dispatch(subtractTotal(price)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
