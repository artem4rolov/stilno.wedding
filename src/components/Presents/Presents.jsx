import React from "react";

import BG from "../../assets/img/1.jpg";
import "./Presents.css";

export const Presents = () => {
  return (
    <div className="presents">
      <div className="presents__image">
        <img src={BG} alt="presents img" className="presents__image-bg" />
      </div>
      <div className="presents__content">
        <span className="presents__content-title">ПОДАРКИ</span>
        <span className="presents__content-subtitle">ПОДАРКИ</span>
        <p className="presents__content-text">
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
    </div>
  );
};
