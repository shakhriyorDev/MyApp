import React from "react";
import cls from "../Family/style.module.css";
import FamImg from "../../../assets/img/family.png";

function Family() {
  return (
    <div className={cls.familyContainer}>
      <div className={cls.familyContent}>
        <h2 className={cls.familyHeading}>About my Family</h2>
        <p className={cls.familyTxt}>
          We are 4 people in the family, these are my father, mother, sister and
          me <br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Unde obcaecati <br /> cumque temporibus tempora, suscipit explicabo
          iure praesentium quis <br /> doloremque laudantium?
        </p>
        <button className={cls.skillBtn}>
          <a className={cls.skillLink}>Read more</a>
        </button>
      </div>
      <div className={cls.familyImgWrap}>
        <img src={FamImg} className={cls.familyImg} alt="" />
      </div>
    </div>
  );
}

export default Family;
