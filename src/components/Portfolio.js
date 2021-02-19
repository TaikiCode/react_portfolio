import React from "react";
import ec from "../images/ec.png";
import todo from "../images/todo.png";
import coin_tracker from "../images/coin-tracker.png";
import sns from "../images/sns.png";
import portfolio from "../images/portfolio.png";
// REACT POPUPBOX
import "react-popupbox/dist/react-popupbox.css";
import { PopupboxContainer } from "react-popupbox";
import {
  openPopupboxEc,
  openPopupboxCoin,
  openPopupboxTodo,
  openPopupboxSns,
} from "../components/Popup";

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-4">Portfolio</h1>

        <div className="row justify-content-center mt-4">
          <div className="col-lg-6 p-0">
            <div className="card" onClick={openPopupboxEc}>
              <img
                className="portfolio-image"
                src={portfolio}
                alt="Portfolio Site"
              />
            </div>
          </div>
          <div className="col-lg-6 p-0">
            <div className="card" onClick={openPopupboxSns}>
              <img className="portfolio-image" src={sns} alt="Sns App" />
            </div>
          </div>
        </div>
        <div className="row justify-content-center mb-4">
          <div className="col-lg-4 p-0">
            <div className="card" onClick={openPopupboxEc}>
              <img className="portfolio-image" src={ec} alt="Ec Site" />
            </div>
          </div>
          <div className="col-lg-4 p-0">
            <div className="card" onClick={openPopupboxCoin}>
              <img
                className="portfolio-image"
                src={coin_tracker}
                alt="Coin_Trancker App"
              />
            </div>
          </div>
          <div className="col-lg-4 p-0">
            <div className="card" onClick={openPopupboxTodo}>
              <img className="portfolio-image" src={todo} alt="Todo App" />
            </div>
          </div>
        </div>
      </div>
      <PopupboxContainer />
    </div>
  );
};

export default Portfolio;
