import React from "react";

// import BG1 from "../../assets/img/15.jpg";
// import BG2 from "../../assets/img/16.jpg";
import "./Contacts.css";

export const Contacts = () => {
  return (
    <div className="contacts">
      <div className="contacts__title">КОНТАКТЫ</div>
      <div className="contacts__content">
        <div className="contacts__content__item">
          <div
            className="content__item__image"
            data-aos="fade"
            data-aos-duration="1500"
          >
            <img src="https://i.ibb.co/2YFnC8F/15.jpg" alt="man" />
          </div>
          <div className="content__item__title">
            <span>Артем</span>
          </div>
          <div className="content__item__desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            suscipit dignissimos dolore excepturi cupiditate itaque, eaque ad
            incidunt, vero explicabo ab ipsum. Dolorem suscipit eum quo hic et
            repudiandae ducimus.
          </div>
          <div className="content__item__contact">
            <span className="contact__phone">+7-995-418-09-85</span>
            <span className="contact__socials">
              whatsApp, TG, Viber, VK, Insta
            </span>
          </div>
        </div>
        <div className="contacts__content__item">
          <div
            className="content__item__image"
            data-aos="fade"
            data-aos-duration="2500"
            data-aos-delay="200"
          >
            <img src="https://i.ibb.co/h9k8jfG/16.jpg" alt="man" />
          </div>
          <div className="content__item__title">
            <span>Дарья</span>
          </div>
          <div className="content__item__desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            suscipit dignissimos dolore excepturi cupiditate itaque, eaque ad
            incidunt, vero explicabo ab ipsum. Dolorem suscipit eum quo hic et
            repudiandae ducimus.
          </div>
          <div className="content__item__contact">
            <span className="contact__phone">+7-988-492-50-24</span>
            <span className="contact__socials">
              whatsApp, TG, Viber, VK, Insta
            </span>
          </div>
        </div>
      </div>
      <div className="contacts__warning">
        <span>
          Просим дать ваш ответ о присутствии на мероприятии до 1 сентября
        </span>
      </div>
    </div>
  );
};
