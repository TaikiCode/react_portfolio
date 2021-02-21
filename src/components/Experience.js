import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3 className="topic">サッカー少年</h3>
            <p className="font-italic">2010 ~ 2014</p>
            <p className="experience-text">
              小学5年生の頃、イナズマイレブンの影響でサッカーを始める。
              中学生になるとゴールキーパーとして市の選抜選手になるほど上達する。
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3 className="topic">引きこもり</h3>
            <p className="font-italic">2015 ~ 2017</p>
            <p className="experience-text">
              高校時代にオンラインゲームやYouTubeにハマりほぼ不登校になるが、
              偏差値40台の底辺高校だったのでなんとか卒業に成功する。
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3 className="topic">大学受験</h3>
            <p className="font-italic">2018 ~ 2019</p>
            <p className="experience-text">
              ふと上京したいと思い、浪人して１から受験勉強を開始する。
              自分の地頭レベルを知るために独学での勉強を決意し、無事第一志望の青山学院大学に合格する。
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3 className="topic">プログラミング</h3>
            <p className="font-italic">2019夏</p>
            <p className="experience-text">
              一番効率的に稼げそう、という軽い気持ちでプログラミングを始める。
              しかし、これまでほとんどパソコンを触ったことがなかったので簡単な操作に苦戦する。
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3 className="topic">短期インターン</h3>
            <p className="font-italic">2020 ~ 現在</p>
            <p className="experience-text">
              様々なイベントや短期インターンに参加。しかし、スキルがない自分にできることは少なく、無力さを痛感する。
              また、将来IT系で仕事をしようと決意し、本格的にプログラミングの勉強を開始する。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
