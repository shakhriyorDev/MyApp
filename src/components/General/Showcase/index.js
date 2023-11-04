import React from "react";
import cls from "../Showcase/style.module.css";
// import watchVideo from "../../../../public/watch.svg";
// watch.svg;
import MePhoto from "../../../assets/img/me.jpg";
import imgWatch from "../../../assets/img/watch.svg";
function Showcase() {
  return (
    <div className={cls.showcase}>
      <div className={cls.showcaseContent}>
        <h2 className={cls.showcaseHeading}>
          Shahriyor Mahmudov <br /> Sanjarovich
        </h2>
        <p className={cls.showcaseInfo}>Frontend Developer age 18 year.</p>
        <div className={cls.buttons}>
          <button className={cls.btn}>
            <a href="#" className={cls.btnLink}>
              Join Us
            </a>
          </button>
          <button className={cls.nextBtn}>
            <img src={imgWatch} alt="" />
            <a href="#" className={cls.nextBtnLink}>
              Watch video
            </a>
          </button>
        </div>
      </div>
      <div className={cls.showcaseImgWrap}>
        <img src={MePhoto} className={cls.showcaseImg} alt="" />
      </div>
    </div>
  );
}

export default Showcase;
