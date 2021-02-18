import "react-popupbox/dist/react-popupbox.css";
import { PopupboxManager } from "react-popupbox";
import ec from "../images/ec.png";
import todo from "../images/todo.png";
import coin_tracker from "../images/coin-tracker.png";
import sns from "../images/sns.png";

const openPopupboxEc = () => {
  const content = (
    <>
      <h2 className="text-center font-italic">ECサイト</h2>
      <hr />
      <div className="row">
        <div className="col-lg-6">
          <img className="portfolio-image-popupbox" src={ec} alt="test01..." />
        </div>
        <div className="col-lg-6">
          <div className="my-3">
            <h4 className="font-italic">使用言語など</h4>
            <p>HTML/CSS, JavaScript, Bootstrap4</p>
          </div>
          <hr />
          <div className="my-3">
            <h4 className="font-italic">ソースコード</h4>
            <div>
              <b>GitHub : </b>
              {/* eslint-disable-next-line */}
              <a
                className="hyper-link"
                onClick={() =>
                  window.open("https://github.com/TaikiCode/html_ec")
                }
              >
                https://github.com/TaikiCode/html_ec
              </a>
              <br />
              <b>demo : </b>
              {/* eslint-disable-next-line */}
              <a
                className="hyper-link"
                onClick={() =>
                  window.open("https://taikicode.github.io/html_ec/")
                }
              >
                https://taikicode.github.io/html_ec/
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  PopupboxManager.open({ content });
};

const openPopupboxTodo = () => {
  const content = (
    <>
      <h2 className="text-center font-italic">ToDo</h2>
      <hr />
      <div className="row">
        <div className="col-lg-6">
          <img
            className="portfolio-image-popupbox"
            src={todo}
            alt="test01..."
          />
        </div>
        <div className="col-lg-6">
          <div className="my-3">
            <h4 className="font-italic">使用言語など</h4>
            <p>HTML/CSS,JavaScript, Bootstrap4</p>
          </div>
          <hr />
          <div className="my-3">
            <h4 className="font-italic">ソースコード</h4>
            <div>
              <b>GitHub : </b>
              {/* eslint-disable-next-line */}
              <a
                className="hyper-link"
                onClick={() =>
                  window.open("https://github.com/TaikiCode/react_todo")
                }
              >
                https://github.com/TaikiCode/react_todo
              </a>
              <br />
              <b>demo : </b>
              {/* eslint-disable-next-line */}
              <a
                className="hyper-link"
                onClick={() =>
                  window.open("https://taikicode.github.io/react_todo/")
                }
              >
                https://taikicode.github.io/react_todo/
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  PopupboxManager.open({ content });
};

const openPopupboxCoin = () => {
  const content = (
    <>
      <h2 className="text-center font-italic">Coin-Tracker</h2>
      <hr />
      <div className="row">
        <div className="col-lg-6">
          <img
            className="portfolio-image-popupbox"
            src={coin_tracker}
            alt="test01..."
          />
        </div>
        <div className="col-lg-6">
          <div className="my-3">
            <h4 className="font-italic">使用言語など</h4>
            <p>React, Chart.js, axios, CoinGecko API, Bootstrap4</p>
          </div>
          <hr />
          <div className="my-3">
            <h4 className="font-italic">ソースコード</h4>
            <div>
              <b>GitHub : </b>
              {/* eslint-disable-next-line */}
              <a
                className="hyper-link"
                onClick={() =>
                  window.open("https://github.com/TaikiCode/react_coin-tracker")
                }
              >
                https://github.com/TaikiCode/react_coin-tracker
              </a>
              <br />
              <b>demo : </b>
              {/* eslint-disable-next-line */}
              <a
                className="hyper-link"
                onClick={() =>
                  window.open("https://taikicode.github.io/react_coin-tracker/")
                }
              >
                https://taikicode.github.io/react_coin-tracker/
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  PopupboxManager.open({ content });
};

const openPopupboxSns = () => {
  const content = (
    <>
      <h2 className="text-center font-italic">SNS</h2>
      <hr />
      <div className="row">
        <div className="col-lg-6">
          <img className="portfolio-image-popupbox" src={sns} alt="test01..." />
        </div>
        <div className="col-lg-6">
          <div className="my-3">
            <h4 className="font-italic">使用言語など</h4>
            <p>Django, HTML/CSS, Bootstrap4, Sqlite(開発), Postgresql(本番)</p>
          </div>
          <hr />
          <div className="my-3">
            <h4 className="font-italic">ソースコード</h4>
            <div>
              <b>GitHub : </b>
              {/* eslint-disable-next-line */}
              <a
                className="hyper-link"
                onClick={() =>
                  window.open("https://github.com/TaikiCode/django_sns")
                }
              >
                https://github.com/TaikiCode/django_sns
              </a>
              <br />
              <b>demo : </b>
              {/* eslint-disable-next-line */}
              <a
                className="hyper-link"
                onClick={() =>
                  window.open("https://taikicode.github.io/react_coin-tracker/")
                }
              >
                https://taikicode.github.io/react_coin-tracker/
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  PopupboxManager.open({ content });
};

export { openPopupboxEc, openPopupboxTodo, openPopupboxCoin, openPopupboxSns };
