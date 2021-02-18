import React from "react";
import ec from "../images/ec.png";
import todo from "../images/todo.png";
import coin_tracker from "../images/coin-tracker.png";
import sns from "../images/sns.png";
// REACT POPUPBOX
import "react-popupbox/dist/react-popupbox.css";
import { PopupboxContainer } from "react-popupbox";
import {
  openPopupboxEc,
  openPopupboxCoin,
  openPopupboxTodo,
  openPopupboxSns,
} from "../components/PopupConfig";

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-4">Portfolio</h1>
        <div className="row text-center my-5">
          <div className="col-lg-3 col-md-6">
            <div className="card shadow-lg" onClick={openPopupboxEc}>
              <img className="portfolio-image" src={ec} alt="todo app..." />
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="card shadow-lg" onClick={openPopupboxTodo}>
              <img
                className="portfolio-image"
                src={todo}
                alt="todo app..."
              />
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="card shadow-lg" onClick={openPopupboxCoin}>
              <div className="card-image">
                <img
                  className="portfolio-image"
                  src={coin_tracker}
                  alt="todo app..."
                />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card shadow-lg" onClick={openPopupboxSns}>
              <div className="card-image">
                <img className="portfolio-image" src={sns} alt="todo app..." />
              </div>
            </div>
          </div>
        </div>
      </div>
      <PopupboxContainer />
    </div>
  );
};

export default Portfolio;
