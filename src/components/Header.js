import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div id="home" className="header-wrapper">
      <div className="main-info">
        <h1 className="font-weight-bold font-italic">Taiki Okura</h1>
        <div className="typed-wrapper mt-4">
          <Typed
            className="typed-text"
            strings={[
              "Web Design.",
              "Web Development.",
              "Artificial Intelligence.",
              "Data science.",
            ]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
