import React from "react";
import cls from "../Teacher/style.module.css";
import salim from "../../../assets/img/salim.JPEG";
import abutolib from "../../../assets/img/abutolib.JPEG";
import zufar from "../../../assets/img/zufar.JPEG";
import farrux from "../../../assets/img/farruh.JPEG";
import icon from "../../../assets/img/Icon.svg";

function Teacher() {
  return (
    <div className={cls.teacherContainer}>
      <h2 className={cls.teacherHeading}>My Teacher's</h2>
      <p className={cls.teacherTxt}>
        Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Eius
        inventore beatae recusandae autem, nihil quidem!
      </p>
      <div className={cls.cardWrap}>
        <div className={cls.card}>
          <img src={salim} className={cls.teacherImg} alt="" />
          <p className={cls.name}>Salimbek Karimbayev</p>
          <p className={cls.posittion}>Frontend Engineer</p>
          <img src={icon} alt="" className={cls.socialMedia} />
        </div>
        <div className={cls.card}>
          <img src={zufar} className={cls.teacherImg} alt="" />
          <p className={cls.name}>Zufar Abdurahmonov</p>
          <p className={cls.posittion}>Frontend Developer</p>
          <img src={icon} alt="" className={cls.socialMedia} />
        </div>
        <div className={cls.card}>
          <img src={abutolib} className={cls.teacherImg} alt="" />
          <p className={cls.name}>Abutolib Khakimjanov</p>
          <p className={cls.posittion}>English Mentor</p>
          <img src={icon} alt="" className={cls.socialMedia} />
        </div>
        <div className={cls.card}>
          <img src={farrux} className={cls.teacherImg} alt="" />
          <p className={cls.name}>Farrux Ma'rufjonov</p>
          <p className={cls.posittion}>Frontend Mentor</p>
          <img src={icon} alt="" className={cls.socialMedia} />
        </div>
      </div>
    </div>
  );
}

export default Teacher;
