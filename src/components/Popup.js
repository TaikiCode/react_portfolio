import "react-popupbox/dist/react-popupbox.css";
import { PopupboxManager } from "react-popupbox";
import ec from "../images/ec.png";
import todo from "../images/todo.png";
import coin_tracker from "../images/coin-tracker.png";
import sns from "../images/sns.png";
import portfolio from "../images/portfolio.png";


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
            <h4 className="popup-topic">説明</h4>
            <p className="popup-text">
              自分が初めて作成したサイトです。このサイト作成を通じてBootstrapの使い方を理解しました。
            </p>
          </div>
          <hr />
          <div className="my-3">
            <h4 className="popup-topic">使用言語など</h4>
            <p>HTML/CSS, JavaScript, Bootstrap4</p>
          </div>
          <hr />
          <div className="my-3">
            <h4 className="popup-topic">ソースコード</h4>
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
            <h4 className="popup-topic">説明</h4>
            <p className="popup-text">
              react-hooksのuseState,
              useEffectを理解するために、簡単なToDoアプリを作りました。実際のノートみたいなCSSデザインがお気に入りです。
            </p>
          </div>
          <hr />
          <div className="my-3">
            <h4 className="popup-topic">使用言語など</h4>
            <p>React, css</p>
          </div>
          <hr />
          <div className="my-3">
            <h4 className="popup-topic">ソースコード</h4>
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
            <h4 className="popup-topic">説明</h4>
            <p className="popup-text">
              コロナ禍でビットコインが市場最高値を3年ぶりに更新しました。
              またビットコインだけでなく、イーサリアムなど他の有望な仮想通貨も同様に高騰しています。
              これはそれらの有望な仮想通貨の値動きをリアルタイムで追跡するアプリです。
            </p>
          </div>
          <hr />
          <div className="my-3">
            <h4 className="popup-topic">使用言語など</h4>
            <p>
              React, react-router-dom, Chart.js, axios, CoinGecko API,
              Bootstrap4
            </p>
          </div>
          <hr />
          <div className="my-3">
            <h4 className="popup-topic">ソースコード</h4>
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
            <h4 className="popup-topic">説明</h4>
            <p className="popup-text">
              Djangoでフォロワー機能、投稿に対するコメント機能、いいね機能があるSNSを作成しました。
              signalを利用して自動的にプロフィールを作成したり、context_processorsで友達申請の通知を表示したりと、Djangoの機能を最大限利用しています。
              シンプルなデザインにこだわりました。
            </p>
          </div>
          <hr />
          <div className="my-3">
            <h4 className="popup-topic">使用言語など</h4>
            <p>Django, widget_tweaks, Sqlite(開発), Postgresql(本番), heroku, AWS S3, HTML/CSS, Bootstrap4,</p>
          </div>
          <hr />
          <div className="my-3">
            <h4 className="popup-topic">ソースコード</h4>
            <div>
              <b>GitHub : </b>
              {/* eslint-disable-next-line */}
              <a
                className="hyper-link"
                onClick={() =>
                  window.open("https://github.com/TaikiCode/django_sns_deploy")
                }
              >
                https://github.com/TaikiCode/django_sns_deploy
              </a>
              <br />
              <b>demo : </b>
              {/* eslint-disable-next-line */}
              <a
                className="hyper-link"
                onClick={() =>
                  window.open("https://django-simple-sns.herokuapp.com/")
                }
              >
                https://django-simple-sns.herokuapp.com/
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  PopupboxManager.open({ content });
};

const openPopupboxPortfolio = () => {
  const content = (
    <>
      <h2 className="text-center font-italic">Portfolio</h2>
      <hr />
      <div className="row">
        <div className="col-lg-6">
          <img className="portfolio-image-popupbox" src={portfolio} alt="test01..." />
        </div>
        <div className="col-lg-6">
          <div className="my-3">
            <h4 className="popup-topic">説明</h4>
            <p className="popup-text">
              Reactで作成した自分のポートフォリオサイトです。
              react-hook-formなどの便利な外部ライブラリをたくさん利用して作成しました。
            </p>
          </div>
          <hr />
          <div className="my-3">
            <h4 className="popup-topic">使用言語など</h4>
            <p>React, react-hook-form, react-popupbox, react-scroll, react-typed, emailjs-com, Bootstrap4</p>
          </div>
          <hr />
          <div className="my-3">
            <h4 className="popup-topic">ソースコード</h4>
            <div>
              <b>GitHub : </b>
              {/* eslint-disable-next-line */}
              <a
                className="hyper-link"
                onClick={() =>
                  window.open("https://github.com/TaikiCode/react_portfolio")
                }
              >
                https://github.com/TaikiCode/react_portfolio
              </a>
              <br />
              <b>demo : </b>
              {/* eslint-disable-next-line */}
              <a
                className="hyper-link"
                onClick={() =>
                  window.open("https://taikicode.github.io/react_portfolio/")
                }
              >
                https://taikicode.github.io/react_portfolio/
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  PopupboxManager.open({ content });
};


export { openPopupboxEc, openPopupboxTodo, openPopupboxCoin, openPopupboxSns, openPopupboxPortfolio };
