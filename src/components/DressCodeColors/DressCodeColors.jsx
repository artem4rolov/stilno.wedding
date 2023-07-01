import React from "react";

import BG from "../../assets/img/1.jpg";
import "./DressCodeColors.css";

const DressCodeColors = () => {
  return (
    <div className="dresscode__colors">
      <div className="colors__block">
        <img src={BG} alt="color img" className="colors__block-img" />
        <img src={BG} alt="color img" className="colors__block-img" />
      </div>
      <div className="colors__block">
        <img src={BG} alt="color img" className="colors__block-img" />
        <img src={BG} alt="color img" className="colors__block-img" />
      </div>
      <div className="colors__block">
        <img src={BG} alt="color img" className="colors__block-img" />
        <img src={BG} alt="color img" className="colors__block-img" />
      </div>
    </div>
  );
};

export default DressCodeColors;
