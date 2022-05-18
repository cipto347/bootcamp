import styles from "./FooterStyle.module.scss";
import Dot from "../../../asset/landing/Ellipse 18.png";

function Footer() {
  return (
    <footer className={`lg:px-20 p-4 w-full h-20 bg-smoke ${styles.wrapper}`}>
      <div className={styles.left}>
        <span style={{ textDecoration: "none" }} className="label-1">
          Copyright © 2021 Kutanya
        </span>
      </div>
      <div className={styles.right}>
        <span style={{ textDecoration: "none" }} className="label-1 ">
          Privacy Policy
        </span>
        <div className={styles.round}>
          <img src={Dot} alt="" />
        </div>
        <span style={{ textDecoration: "none" }} className="label-1 ">
          Term of Use
        </span>
      </div>
    </footer>
  );
}

export default Footer;
