import React, { useState } from "react";
import scss from "./Modal.module.scss";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";

export default function Modal({ isActive, setIsActive }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      number: number,
    };
    emailjs
      .send(
        "service_po935za",
        "template_h52orcg",
        { ...data },
        "0mSmsVBvqYpF4yuY7"
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
          <input
            required
            type="text"
            placeholder="Имя"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <PhoneInput
            onChange={(value) => setNumber(value)}
            value={number}
            name="number"
            country={"kg"}
            placeholder="+(999) 999-999"
            required
          />
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
        <input type="submit" value="Отправить"/>
      </form>
    </div>
  );
}
