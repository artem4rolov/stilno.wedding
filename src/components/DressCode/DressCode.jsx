import React from "react";

import BG from "../../assets/img/1.jpg";
import "./DressCode.css";

export const DressCode = () => {
  return (
    <div className="dresscode">
      <div className="dresscode__bg">
        <div className="dresscode__modal">
          <div className="modal__content">
            <span className="modal__title"  data-aos="fade-down"
     data-aos-duration="1500">ДРЕСС-КОД</span>
            <p className="modal__text"  data-aos="fade"
     data-aos-duration="2000">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
              optio sit ullam facilis eius dolore animi exercitationem, placeat,
              delectus alias, id quae. Exercitationem aliquid amet facere porro
              suscipit quia cupiditate!
              <br />
              <br />
              Ex, aut qui. Amet doloremque consequatur voluptatibus sit
              voluptatum delectus, aspernatur repellat corrupti rem eligendi,
              cum saepe esse debitis optio! Dicta deleniti quidem quos eum
              temporibus eos modi molestias consectetur!
              <br />
              <br />
              Cupiditate, reiciendis eos! Cum possimus repellat dolor enim.
              Voluptatum aliquam eligendi totam saepe. Explicabo nemo nobis,
              quisquam aliquam, ipsa nisi inventore numquam libero quas repellat
              vero quis quo eveniet quod.
            </p>
          </div>
        </div>
        <img src={BG} alt=""  data-aos="fade"
     data-aos-duration="3000" />
      </div>
    </div>
  );
};
