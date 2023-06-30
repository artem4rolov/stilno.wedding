import React from "react";

import BG from "../../assets/img/1.jpg";
import "./InfoBlock.css";

export const InfoBlock = () => {
  return (
    <div className="infoblock">
      {/* текст */}
      <div className="infoblock__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eligendi
        quisquam, cupiditate, sunt error eius pariatur delectus voluptatibus
        minima beatae commodi sit doloribus a repellendus mollitia vitae
        officia, laudantium libero! Deleniti voluptatibus ab eaque beatae
        placeat tenetur quis, dicta quidem rerum vel ipsum ea labore, quo vitae
        ipsa incidunt iste!
        <br />
        <br />
        Repellendus esse laudantium veritatis laboriosam deserunt error quam,
        tenetur fugit? Reiciendis dolore a, cupiditate ad illo suscipit voluptas
        non quos necessitatibus delectus totam odio eveniet fuga est voluptate
        earum consectetur hic mollitia labore.
      </div>
      {/* основные моменты */}
      <div className="infoblock__item">
        <span className="infoblock__item-title">КТО</span>
        <p className="infoblock__item-desc-bold">самые дорогие</p>
        <p className="infoblock__item-desc">друзья и близкие</p>
      </div>
      <div className="infoblock__item">
        <span className="infoblock__item-title">ГДЕ</span>
        <p className="infoblock__item-desc-bold">The ШАТЕР</p>
        <p className="infoblock__item-desc">(адрес)</p>
      </div>
      <div className="infoblock__item">
        <span className="infoblock__item-title">КОГДА</span>
        <p className="infoblock__item-desc-bold">23 сентября 2023</p>
        <p className="infoblock__item-desc">суббота</p>
      </div>
      {/* галерея */}
      <div className="infoblock__gallery">
        <div className="gallery__item">
          <img src={BG} alt="gallery item" className="gallery__item-bg" />
        </div>
        <div className="gallery__item">
          <img src={BG} alt="gallery item" className="gallery__item-bg" />
        </div>
        <div className="gallery__item">
          <img src={BG} alt="gallery item" className="gallery__item-bg" />
        </div>
      </div>
    </div>
  );
};
