import React from "react";
import scss from "./thanks.module.scss";
import { Link } from "react-router-dom";

export default function Thx() {
  return (
    <div className={scss.back}>
      <div className={scss.active_wrapper} onClick={(e) => e.stopPropagation()}>
        <div className={scss.active_content}>
          <div className={scss.goBack}>
            <img width='20' height="20" src="/images/back.png" alt="" />
            <Link to="/">Назад</Link>
          </div>
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
    </div>
  );
}
