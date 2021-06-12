import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";
import menuImage from "./assets/gios-menu.png";


const Menu = () => {
  return (
    <div className="menu-container">
      <Image className="menu-image" src={menuImage} fluid />
    </div>
  );
};

export default Menu;
