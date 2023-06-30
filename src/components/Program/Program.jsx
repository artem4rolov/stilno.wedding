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
        <div className="content__title">ПРОГРАММА СВАДЬБЫ</div>
        <div className="content__subtitle">23 сентября, суббота</div>
        {/* этапы по времени */}
        <div className="content__item">
          <span className="content__item-time">16:30 - 17:00</span>
          <p className="content__item-title">Сбор гостей</p>
          <p className="content__item-desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
            tenetur quaerat consectetur! Minus possimus, nam, deserunt adipisci
            officia aperiam non iure maxime earum soluta aliquam ex est
            perferendis fugit tenetur.
          </p>
        </div>
        <div className="content__item">
          <span className="content__item-time">16:30 - 17:00</span>
          <p className="content__item-title">Сбор гостей</p>
          <p className="content__item-desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
            tenetur quaerat consectetur! Minus possimus, nam, deserunt adipisci
            officia aperiam non iure maxime earum soluta aliquam ex est
            perferendis fugit tenetur.
          </p>
        </div>
        <div className="content__item">
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
