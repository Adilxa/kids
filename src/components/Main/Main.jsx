import React, { useState } from "react";
import Modal from "../modal/Modal";
import scss from "./main.module.scss";

export default function Main() {
  const [isActive, setIsActive] = useState(true);
  return (
    <div className={scss.main__container}>
      <div className={scss.img__blur}>
        <hr className={scss.first__hr} />
        <div className={scss.main__content}>
          <div className={scss.site__content}>
            <div className={scss.container}>
              <div className={scss.header}>
                <img src="./images/solid_logo.svg" alt="logo" />
                <h1>Бесплатный вебинар</h1>
              </div>
            </div>
            <main>
              <h1>Как начать свой путь в IT с ранних лет</h1>
              <h2>
                Развиваем интеллект вашего ребенка с помощью программирования
              </h2>
              <button onClick={() => setIsActive(true)}>Записаться на вебинар</button>
              <div className={scss.mask__group}>
                <img src="./images/kairat.svg" alt="mask_group" />
                <div className={scss.infO__content}>
                  <span>ментор</span> <br />
                  <span>Асылбеков Кайрат, опыт 2 года в программировании</span>
                </div>
              </div>
              <div className={scss.bonus__content}>
                <img src="./images/helper.svg" alt="helper" />
                <p>Запишитесь и получите бонус</p>
              </div>
            </main>
          </div>
        </div>
        <hr className={scss.second__hr} />
      </div>
      <Modal isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
}
