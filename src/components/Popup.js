import "react-popupbox/dist/react-popupbox.css";
import { PopupboxManager } from "react-popupbox";
import gallery from "../images/gallery.png";
import typing_game from "../images/typing-game.png";
import coin_tracker from "../images/coin-tracker.png";
import sns from "../images/sns.png";
import portfolio from "../images/portfolio.png";


const openPopupboxGallery = () => {
  const content = (
    <>
      <h2 className="text-center font-italic">Gallery</h2>
      <hr />
      <div className="row">
        <div className="col-lg-6">
          <img className="portfolio-image-popupbox" src={gallery} alt="test01..." />
        </div>
        <div className="col-lg-6">
        <div className="my-3">
            <h4 className="popup-topic">説明</h4>
            <p className="popup-text">
              reactの外部ライブラリであるsimple-react-lightboxを利用して、ギャラリーサイトを作りました。
              画像はunsplash.comからランダムに取得しています。お洒落な写真をお楽しみください。
            </p>
          </div>
          <hr />
          <div className="my-3">
            <h4 className="popup-topic">使用言語など</h4>
            <p>React, simple-react-lightbox, Bootstrap4, css, unsplash（画像）</p>
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
                  window.open("https://github.com/TaikiCode/react_gallery")
                }
              >
                https://github.com/TaikiCode/react_gallery
              </a>
              <br />
              <b>demo : </b>
              {/* eslint-disable-next-line */}
              <a
                className="hyper-link"
                onClick={() =>
                  window.open("https://taikicode.github.io/react_gallery/")
                }
              >
                https://taikicode.github.io/react_gallery/
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  PopupboxManager.open({ content });
};

const openPopupboxTypingGame = () => {
  const content = (
    <>
      <h2 className="text-center font-italic">Typing Game</h2>
      <hr />
      <div className="row">
        <div className="col-lg-6">
          <img
            className="portfolio-image-popupbox"
            src={typing_game}
            alt="test01..."
          />
        </div>
        <div className="col-lg-6">
          <div className="my-3">
            <h4 className="popup-topic">説明</h4>
            <p className="popup-text">
              react-hooksのuseState,useEffectを理解するために、タイピングゲームを作りました。
              少しでも実用的なものにするために、正確にタイプできた単語とできなかった単語をすぐに確認できるようにしています。
              ぜひ挑戦してみてください。
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
                  window.open("https://github.com/TaikiCode/react_typing-game")
                }
              >
                https://github.com/TaikiCode/react_typing-game
              </a>
              <br />
              <b>demo : </b>
              {/* eslint-disable-next-line */}
              <a
                className="hyper-link"
                onClick={() =>
                  window.open("https://taikicode.github.io/react_typing-game/")
                }
              >
                https://taikicode.github.io/react_typing-game/
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
      <h2 className="text-center font-italic">Coin-Trackr</h2>
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


export { openPopupboxGallery, openPopupboxTypingGame, openPopupboxCoin, openPopupboxSns, openPopupboxPortfolio };
