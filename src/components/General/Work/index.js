import React from "react";
import cls from "../Work/style.module.css";

function Work() {
  return (
    <div className={cls.work}>
      <h2 className={cls.title}>My Work</h2>
      <p className={cls.titleText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quis{" "}
        <br />
        nesciunt architecto optio distinctio laborum illum?
      </p>
      <div className={cls.workCard}>
        <div className={cls.card}>
          <h3 className={cls.cardTitle}>Start School</h3>
          <p className={cls.cardHistory}>
            (2013) : Khorezm school number 2 <br />
            (2019) : Tashekent school number 8 <br />
            (2020) : Tashekent school number 330 <br />
            (2021) : Tashekent school number 8 <br />
          </p>
          <button className={cls.btn}>
            <a href="#" className={cls.cardLink}>
              Learn more...
            </a>
          </button>
        </div>
        <div className={cls.card}>
          <h3 className={cls.cardTitle}>Start IT</h3>
          <p className={cls.cardHistory}>
            (2022) : Aprel Target IT school <br />
            (2023) : Sentabr Soff Study <br /> <br /> <br />
          </p>
          <button className={cls.btn}>
            <a href="#" className={cls.cardLink}>
              Learn more...
            </a>
          </button>
        </div>
        <div className={cls.card}>
          <h3 className={cls.cardTitle}>Start Sport</h3>
          <p className={cls.cardHistory}>
            (2013) : October <br />
            (Coach) : Otabek Karimov <br />
            (2023) : January <br /> <br />
          </p>
          <button className={cls.btn}>
            <a href="#" className={cls.cardLink}>
              Learn more...
            </a>
          </button>
        </div>
        <div className={cls.card}>
          <h3 className={cls.cardTitle}>Start Work</h3>
          <p className={cls.cardHistory}>
            (2023) : March SMM manager <br />
            (2023) : Getour AvtoSalon Mobilograf <br />
            (2023) : Educational school Mentor <br />
          </p>
          <button className={cls.btn}>
            <a href="#" className={cls.cardLink}>
              Learn more...
            </a>
          </button>
        </div>
      </div>
      <div className={cls.workCard}></div>
    </div>
  );
}

export default Work;
