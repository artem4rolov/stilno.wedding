import React from "react";

import BG from "../../assets/img/1.jpg";
import "./InfoBlock.css";

export const InfoBlock = () => {
  return (
    <div className="infoblock">
      {/* текст */}
      <div
        className="infoblock__text"
        data-aos="fade-up"
        data-aos-duration="2500"
      >
        Дорогие родственники и друзья, мы с удовольствием приглашаем Вас на наш
        свадебный вечер! На этом сайте Вы найдете всю необходимую подробную
        информацию о нашем событии, а также наши искренние пожелания для Вас.
        <br />
        <br />
        Мы будем счастливы разделить этот день с самыми близкими людьми, с
        нетерпением ждем Вас на нашей свадьбе!
      </div>
      {/* галерея */}
      <div className="infoblock__gallery">
        <div
          className="gallery__item"
          data-aos="zoom-in-left"
          data-aos-duration="500"
        >
          <img src={BG} alt="gallery item" className="gallery__item-bg" />
        </div>
        <div
          className="gallery__item"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <img src={BG} alt="gallery item" className="gallery__item-bg" />
        </div>
        <div
          className="gallery__item"
          data-aos="zoom-in-right"
          data-aos-duration="1500"
        >
          <img src={BG} alt="gallery item" className="gallery__item-bg" />
        </div>
      </div>
    </div>
  );
};
