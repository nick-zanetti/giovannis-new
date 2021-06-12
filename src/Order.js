import React from "react";
import { connect } from "react-redux";

import Cart from "./Cart";
import Modal from "./Modal";
import addModalItem from "./actionGenerators/addModalItem";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Col, Row } from "react-bootstrap";

class Order extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      mainitems: [
        {
          title: "Spagetti and Meatballs",
          description:
            "Our finest spagetti made with homemade meatballs and sauce.",
          mod1: "Extra sauce",
          mod2: "Bread",
          mod1Add: false,
          mod2Add: false,
          price: 12.99,
        },
        {
          title: "Squid Ink Pasta",
          description:
            "Rich squid ink sauce on thin noodles with cherry tomatoes",
          mod1: "No tomatoes",
          mod2: "Extra sauce",
          mod1Add: false,
          mod2Add: false,
          price: 7.99,
        },
        {
          title: "Lasagna",
          description: "Layered lasagna with different meats and cheeses",
          mod1: "Extra meat",
          mod2: "Extra cheese",
          mod1Add: false,
          mod2Add: false,
          price: 13.99,
        },
        {
          title: "Margherita Pizza",
          description:
            "Fire roasted pizza with rich tomatoes and melted cheese",
          mod1: "Add pesto sauce",
          mod2: "Extra cheese",
          mod1Add: false,
          mod2Add: false,
          price: 8.99,
        },
        {
          title: "Mushroom Risotto",
          description: "Creamy, tender Risotto with mushrooms and spinach",
          mod1: "Extra mushrooms",
          mod2: "Add parmesean cheese",
          mod1Add: false,
          mod2Add: false,
          price: 11.99,
        },
      ],
      dessertitems: [
        {
          title: "Tiramisu",
          description: "Rich coffee flavored layered cake",
          mod1: "ice cream",
          mod2: "serve in bowl",
          mod1Add: false,
          mod2Add: false,
          price: 11.99,
        },
        {
          title: "Cannoli",
          description: "Tube-shaped pastry of fried dough",
          mod1: "extra filling",
          mod2: "smaller size",
          mod1Add: false,
          mod2Add: false,
          price: 4.99,
        },
      ],
      appitems: [
        {
          title: "Cheese Board",
          description: "Variety of hard and soft cheeses with wheat cracker",
          mod1: "Add sausage",
          mod2: "Add grapes",
          mod1Add: false,
          mod2Add: false,
          price: 7.99,
        },
        {
          title: "Stuffed Olives",
          description: "Olives filled with choice of cheese",
          mod1: "Feta cheese stuffing",
          mod2: "Blue cheese stuffing",
          mod1Add: false,
          mod2Add: false,
          price: 4.99,
        },
        {
          title: "Bread Basket",
          description: "Warm basket of fresh baked Italian bread",
          mod1: "Olive and vinegar",
          mod2: "Extra butter",
          mod1Add: false,
          mod2Add: false,
          price: 4.99,
        },
      ],
    };
  }

  modalClose = () => {
    this.setState({ showModal: false });
  };

  modalOpen = () => {
    this.setState({ showModal: true });
  };

  renderMenuSection = (section) => {
    return section.map((item, index) => (
      <div
        className="order-card"
        key={index}
        onClick={() => {
          this.modalOpen();
          this.props.addModalItem(item);
        }}
      >
        <Card className="mb-3 ">
          <Card.Body className="order-card">
            <Card.Title>{item.title}</Card.Title>
            <Card.Text className="text-muted">{item.description}</Card.Text>
            <Card.Text className="text-muted">{item.price}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    ));
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col lg={7}>
              <h3>Appetizers</h3>
              <div>{this.renderMenuSection(this.state.appitems)}</div>
              <h3>Mains</h3>
              <div>{this.renderMenuSection(this.state.mainitems)}</div>
              <h3>Desserts</h3>
              <div>{this.renderMenuSection(this.state.dessertitems)}</div>
            </Col>
            <Col>
              <Cart />
            </Col>
            <Modal
              show={this.state.showModal}
              modalClose={this.modalClose}
              modalOpen={this.modalOpen}
            />
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = ({ modalitem, cartitems }) => ({
  modalitem,
  cartitems,
});

const mapDispatchToProps = (dispatch) => ({
  addModalItem: (item) => dispatch(addModalItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
