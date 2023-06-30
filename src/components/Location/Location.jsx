import React from "react";

import BG from "../../assets/img/1.jpg";
import "./Location.css";

export const Location = () => {
  return (
    <div className="location">
      <div className="location__image">
        <img src={BG} alt="location img" className="location__image-bg" />
      </div>
      <div className="location__content">
        <span className="location__content-title">МЕСТО</span>
        <span className="location__content-subtitle">The ШАТЕР</span>
        <p className="location__content-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ut
          est, ducimus illum temporibus, dicta excepturi officiis repellat illo
          harum rem fugiat quam saepe. Expedita explicabo vel ratione iure
          similique.
          <br />
          <br />
          Temporibus culpa perspiciatis explicabo, at dolor nihil consequatur a
          possimus nam delectus! Quas vel aliquid necessitatibus earum molestiae
          perspiciatis nam quasi deserunt explicabo, corporis quaerat dicta
          laborum repellat iure! Harum.
          <br />
          <br />
          Quisquam voluptatibus earum dignissimos nam, cumque alias deleniti
          laborum culpa natus totam quasi molestiae? Accusantium tenetur vero at
          earum illum numquam in et ipsum, ut beatae quae ex eos blanditiis!
        </p>
      </div>
      <div className="location__button">
        <button>Открыть карту</button>
      </div>
    </div>
  );
};
