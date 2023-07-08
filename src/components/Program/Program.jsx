import React from "react";

import BG from "../../assets/img/1.jpg";
import "./Program.css";
import { BgWithGradient } from "../BgWithGradient/BgWithGradient";

export const Program = () => {
  return (
    <div className="program">
      <BgWithGradient background={BG} gradient={"down"} />
      <div className="program__content">
        {/* заголовок и время */}
        <div className="content__title"  data-aos="fade-up"
     data-aos-duration="1000">ПРОГРАММА СВАДЬБЫ</div>
        <div className="content__subtitle"  data-aos="fade-up"
     data-aos-duration="1500">23 сентября, суббота</div>
        {/* этапы по времени */}
        <div className="content__item"  data-aos="fade"
     data-aos-duration="2000">
          <span className="content__item-time">16:30 - 17:00</span>
          <p className="content__item-title">Сбор гостей</p>
          <p className="content__item-desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
            tenetur quaerat consectetur! Minus possimus, nam, deserunt adipisci
            officia aperiam non iure maxime earum soluta aliquam ex est
            perferendis fugit tenetur.
          </p>
        </div>
        <div className="content__item"   data-aos="fade"
     data-aos-duration="2000">
          <span className="content__item-time">16:30 - 17:00</span>
          <p className="content__item-title">Сбор гостей</p>
          <p className="content__item-desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
            tenetur quaerat consectetur! Minus possimus, nam, deserunt adipisci
            officia aperiam non iure maxime earum soluta aliquam ex est
            perferendis fugit tenetur.
          </p>
        </div>
        <div className="content__item"   data-aos="fade"
     data-aos-duration="2000">
          <span className="content__item-time">16:30 - 17:00</span>
          <p className="content__item-title">Сбор гостей</p>
          <p className="content__item-desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
            tenetur quaerat consectetur! Minus possimus, nam, deserunt adipisci
            officia aperiam non iure maxime earum soluta aliquam ex est
            perferendis fugit tenetur.
          </p>
        </div>
      </div>
      <BgWithGradient background={BG} gradient={"up"} />
    </div>
  );
};
