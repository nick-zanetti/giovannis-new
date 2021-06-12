import React from "react";
import addCartItem from "./actionGenerators/addCartItem";
import removeCartItem from "./actionGenerators/removeCartItem";

import { setMod1, setMod2 } from "./actionGenerators/setMods";
import { addTotal } from "./actionGenerators/changeTotal";

import { connect } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";

const OrderModal = (props) => {
  return (
    <Modal show={props.show} onHide={props.modalClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.modalitem.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.modalitem.description}</Modal.Body>
      <Modal.Body>
        <input
          type="checkbox"
          checked={props.modalitem.mod1Add}
          onChange={() => {
            props.setMod1(props.modalitem);
          }}
        />
        <span className="mx-1">{props.modalitem.mod1}</span>
        <input
          type="checkbox"
          checked={props.modalitem.mod2Add}
          onChange={() => {
            props.setMod2(props.modalitem);
          }}
        />
        <span className="mx-1">{props.modalitem.mod2}</span>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.modalClose}>Close</Button>
        {props.type === "mod" ? (
          <Button
            onClick={() => {
              props.removeCartItem(props.modalitem.id);
              props.addCartItem(props.modalitem);
              props.modalClose();
            }}
          >
            Update
          </Button>
        ) : (
          <Button
            onClick={() => {
              props.addCartItem(props.modalitem);
              props.addTotal(props.modalitem.price);
              props.modalClose();
            }}
          >
            Add to cart
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = ({ modalitem, cartitems, subtotal }) => ({
  modalitem,
  cartitems,
  subtotal,
});

const mapDispatchToProps = (dispatch) => ({
  addCartItem: (item) => dispatch(addCartItem(item)),
  removeCartItem: (item) => dispatch(removeCartItem(item)),
  setMod1: (item) => dispatch(setMod1(item)),
  setMod2: (item) => dispatch(setMod2(item)),
  addTotal: (price) => dispatch(addTotal(price)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderModal);
