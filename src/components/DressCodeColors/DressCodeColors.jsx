import React from "react";

import BG from "../../assets/img/1.jpg";
import "./DressCodeColors.css";

const DressCodeColors = () => {
  return (
    <div className="dresscode__colors">
      <div className="colors__block">
        <img src={BG} alt="color img" className="colors__block-img"  data-aos="zoom-in-left"
     data-aos-duration="1000" />
        <img src={BG} alt="color img" className="colors__block-img"  data-aos="zoom-in-right"
     data-aos-duration="2500" />
      </div>
      <div className="colors__block">
        <img src={BG} alt="color img" className="colors__block-img"  data-aos="zoom-in-left"
     data-aos-duration="2500" />
        <img src={BG} alt="color img" className="colors__block-img"  data-aos="zoom-in-right"
     data-aos-duration="1000"  />
      </div>
      <div className="colors__block">
        <img src={BG} alt="color img" className="colors__block-img"  data-aos="zoom-in-left"
     data-aos-duration="1000" />
        <img src={BG} alt="color img" className="colors__block-img"  data-aos="zoom-in-right"
     data-aos-duration="2500"  />
      </div>
    </div>
  );
};

export default DressCodeColors;
