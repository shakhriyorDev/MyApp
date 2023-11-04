import React from "react";
import cls from "../Skills/style.module.css";
import skillImg from "../../../assets/img/skill.png";

function Skill() {
  return (
    <div className={cls.skillContainer}>
      <div className={cls.skillImgWrap}>
        <img src={skillImg} alt="" className={cls.skillImg} />
      </div>
      <div className={cls.skillContent}>
        <h2 className={cls.skillHeading}>My Skills</h2>
        <p className={cls.skillText}>
          Html , Css , Bootstrap , Flex and Grid boxes JavaScript , Dom , <br />
          Alghoritms , OOP React Native , Next Javasscript Admin Panel , <br />{" "}
          Crud , To-do List
        </p>
        <button className={cls.skillBtn}>
          <a className={cls.skillLink}>Read more</a>
        </button>
      </div>
    </div>
  );
}

export default Skill;
