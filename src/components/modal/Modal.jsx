import React, { useState } from "react";
import scss from "./Modal.module.scss";
import emailjs from "emailjs-com";

export default function Modal({ isActive, setIsActive }) {
  const [active, setActive] = useState(false);
  const [isWait, setWait] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_j1oraxn",
        "template_ci1ldfe",
        e.target,
        "zudsa3IG-MCCSbV4h"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            setActive(true)
            setWait(false)
          }
        },
        (error) => {}
      )
      .finally(
        setWait(true)
      )
    e.target.reset();
  };
  return (
    <div
      className={isActive ? scss.modal_active : scss.modal}
      onClick={() => {
        setIsActive(false);
        setActive(false);
      }}
    >
      {active ? (
        <div
          className={scss.active_wrapper}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={scss.active_content}>
            <h1>Спасибо за заявку{")"} </h1>
            <button>
              <a href="https://t.me/+KXfffINC7HxmMGI6" target="_blanck">
                {" "}
                Получить бонус
              </a>
            </button>
            <div className={scss.figuries}>
              <img
                className={scss.first}
                src="/images/Vectorfigure.svg"
                alt="img"
              />
              <img
                className={scss.second}
                src="/images/Vectorfigure2.svg"
                alt="img"
              />
              <img
                className={scss.third}
                src="/images/Vectorfigure3.svg"
                alt="img"
              />
            </div>
          </div>
        </div>
      ) : (
        <form
          onSubmit={sendEmail}
          className={scss.content}
          onClick={(e) => e.stopPropagation()}
        >
          <h1>Идём на вебинар{")"} </h1>
          {
            isWait ? <img src="https://aaravwebsolutions.com/images/loader.gif" alt="loading"/> : <div className={scss.inputs_container}>
            <input required type="text" placeholder="Имя" name="name" />
            <input required type="number" placeholder="Номер" name="number" />
          </div>
          }
          <div className={scss.figuries}>
            <img
              className={scss.first}
              src="/images/Vectorfigure.svg"
              alt="img"
            />
            <img
              className={scss.second}
              src="/images/Vectorfigure2.svg"
              alt="img"
            />
            <img
              className={scss.third}
              src="/images/Vectorfigure3.svg"
              alt="img"
            />
          </div>
          <input type="submit" />
        </form>
      )}
    </div>
  );
}
