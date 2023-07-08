import React from "react";


import BG from "../../assets/img/1.jpg";
import "./Main.css";

export const Main = () => {
  return (
    <div className="main">
      <div className="main__shadow" />
      <img src={BG} className="main__cover" alt="main cover"  data-aos="fade" data-aos-duration="2000" />
      <div className="main__text">
        <div className="main__subtitle" data-aos="fade-down"
     data-aos-duration="2500">wedding</div>
        <div className="main__title"  data-aos="fade" data-aos-duration="3000" data-aos-delay="500">АРТЕМ & ДАРЬЯ</div>
        <div className="main__subtitle" data-aos="fade-up"
     data-aos-duration="2500">приглашение на свадьбу</div>
      </div>
    </div>
  );
};
