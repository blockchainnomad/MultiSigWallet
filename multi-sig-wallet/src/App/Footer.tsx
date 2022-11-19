import React from "react";
import styles from "./Footer.module.css";
import github from "../static/github-favicon.png";
import scp from "../static/scp-favicon.png";

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <div className={styles.component}>
      <img src={github} className={styles.image} alt="github" />
      <a href="https://github.com/blockchainnomad/MultiSigWallet" target="__blank">
        Code
      </a>
      <div className={styles.bar}>
      </div>
    </div>
  );
};

export default Footer;
