import React from "react";

import BG1 from "../../assets/img/2.jpg";
import BG2 from "../../assets/img/3.jpg";
import BG3 from "../../assets/img/4.jpg";
import "./GalleryFirst.css";

export const GalleryFirst = () => {
  return (
    <div className="gallery">
      <div className="gallery__sub">
        <img src={BG1} alt="second phot" className="gallery__photo-sub" />
        <img src={BG2} alt="third phot" className="gallery__photo-sub" />
      </div>
      <div className="gallery__main">
        <img src={BG3} alt="first phot" className="gallery__photo-main" />
      </div>
    </div>
  );
};
