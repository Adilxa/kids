import React from "react";
import scss from "./Modal.module.scss";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";

export default function Modal({ isActive, setIsActive }) {
  const navigate = useNavigate();
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
            navigate("/thx");
          }
        },
        (error) => {}
      )
      .finally(navigate("/thx"));
    e.target.reset();
  };
  return (
    <div
      className={isActive ? scss.modal_active : scss.modal}
      onClick={() => {
        setIsActive(false);
      }}
    >
      <form
        onSubmit={sendEmail}
        className={scss.content}
        onClick={(e) => e.stopPropagation()}
      >
        <h1>Идём на вебинар{")"} </h1>
        <div className={scss.inputs_container}>
          <input required type="text" placeholder="Имя" name="name" />
          <input required type="number" placeholder="+996" name="number" />
        </div>
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
    </div>
  );
}
