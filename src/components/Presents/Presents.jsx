import React from "react";

import BG from "../../assets/img/14.jpg";
import "./Presents.css";

export const Presents = () => {
  return (
    <div className="presents">
      <div className="presents__image">
        <img src={BG} alt="presents img" className="presents__image-bg" />
      </div>
      <div className="presents__content">
        <p
          className="presents__content-text"
          data-aos="fade"
          data-aos-duration="3000"
          data-aos-delay="200"
        >
          Дорогие родственники, друзья и коллеги, наше торжество носит
          современный европейский характер, при подготовке мероприятия мы
          полностью воздержались от классических традиций – на нем не будет
          выкупа, каравая, продажи торта и собираний на младенцев.
          <br />
          <br />
          Будьте спокойны, что Вас не ожидают дополнительные траты.
          <br />
          <br />
          Пожелания для гостей:
        </p>

        <span
          className="presents__content-title"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          ПОДАРКИ
        </span>
        <p
          className="presents__content-text"
          data-aos="fade"
          data-aos-duration="3000"
          data-aos-delay="200"
        >
          Дорогие гости, не ломайте голову над подарками! Ваши конверты помогут
          нам достичь своих целей и осуществить желания.
        </p>
        <span
          className="presents__content-title"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          ПОЗДРАВЛЕНИЯ
        </span>
        <p
          className="presents__content-text"
          data-aos="fade"
          data-aos-duration="3000"
          data-aos-delay="200"
        >
          На нашем празднике не будет обязательных поздравлений в микрофон и
          публичного дарения подарков. Вы можете сказать все теплые слова нам
          лично. А если Вы захотите произнести тост – сообщите ведущему, и он
          обязательно даст Вам слово в формате свободного микрофона.
          <br />
          <br />
          Мы будем благодарны, если Вы воздержитесь от криков «Горько!» на
          празднике.
        </p>
        <span
          className="presents__content-title"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          ЦВЕТЫ
        </span>
        <p
          className="presents__content-text"
          data-aos="fade"
          data-aos-duration="3000"
          data-aos-delay="200"
        >
          Очень просим Вас не дарить нам цветы и избавить себя от дополнительных
          расходов, т.к. мы не успеем насладиться их красотой до отъезда.
        </p>
      </div>
    </div>
  );
};
