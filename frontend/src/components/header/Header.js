import React from "react";
import Logo from "../../assets/landings-logo.svg";
import "./styles.css";

const Header = () => {
  return (
    <div className="background">
      <img src={Logo} alt="landings logo" />
    </div>
  );
};

export default Header;
