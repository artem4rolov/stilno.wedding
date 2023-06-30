import React from "react";

import BG from "../../assets/img/1.jpg";
import "./Gallery.css";

export const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery__main">
        <img src={BG} alt="first phot" className="gallery__photo-main" />
      </div>
      <div className="gallery__sub">
        <img src={BG} alt="second phot" className="gallery__photo-sub" />
        <img src={BG} alt="third phot" className="gallery__photo-sub" />
      </div>
    </div>
  );
};
