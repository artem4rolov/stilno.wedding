import React from "react";
import BG from "../../assets/img/1.jpg";
import "./Main.css";

export const Main = () => {
  return (
    <div className="main">
      <div className="main__shadow" />
      <img src={BG} className="main__cover" alt="main cover" />
      <div className="main__text">
        <div className="main__subtitle">wedding</div>
        <div className="main__title">АРТЕМ & ДАРЬЯ</div>
        <div className="main__subtitle">приглашение на свадьбу</div>
      </div>
    </div>
  );
};
