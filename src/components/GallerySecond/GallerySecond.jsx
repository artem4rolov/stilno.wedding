import React from "react";

import BG1 from "../../assets/img/8.jpg";
import BG2 from "../../assets/img/9.jpg";
import BG3 from "../../assets/img/10.jpg";
import "./GallerySecond.css";

export const GallerySecond = () => {
  return (
    <div className="gallery">
      <div className="gallery__main">
        <img src={BG1} alt="first phot" className="gallery__photo-main" />
      </div>
      <div className="gallery__sub">
        <img src={BG2} alt="second phot" className="gallery__photo-sub" />
        <img src={BG3} alt="third phot" className="gallery__photo-sub" />
      </div>
    </div>
  );
};
