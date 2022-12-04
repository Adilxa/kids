import React, { useState } from "react";
import scss from './Modal.module.scss'

export default function Modal({ isActive, setIsActive }) {
    const [active, setActive] = useState(false);
    return (
        <div className={isActive ? scss.modal_active : scss.modal} onClick={() => {
            setIsActive(false)
            setActive(false)
        }}>
            {
                active ? (
                    <div className={scss.active_wrapper} onClick={(e) => e.stopPropagation()}>
                        <div className={scss.active_content}>
                            <h1>Спасибо за заявку{")"} </h1>
                            <button>Получить бонус</button>
                            <div className={scss.figuries}>
                                <img className={scss.first} src="/images/Vectorfigure.svg" alt="img" />
                                <img className={scss.second} src="/images/Vectorfigure2.svg" alt="img" />
                                <img className={scss.third} src="/images/Vectorfigure3.svg" alt="img" />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={scss.content} onClick={(e) => e.stopPropagation()}>
                        <h1>Идём на вебинар{")"} </h1>
                        <div className={scss.inputs_container}>
                            <input type='text' placeholder="Имя" />
                            <input type='text' placeholder="Номер" />
                        </div>
                        <div className={scss.figuries}>
                            <img className={scss.first} src="/images/Vectorfigure.svg" alt="img" />
                            <img className={scss.second} src="/images/Vectorfigure2.svg" alt="img" />
                            <img className={scss.third} src="/images/Vectorfigure3.svg" alt="img" />
                        </div>
                        <button onClick={() => setActive(true)}>Записаться</button>
                    </div>
                )
            }
        </div >
    );
}
