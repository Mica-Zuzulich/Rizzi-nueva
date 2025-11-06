import React from "react";
import styles from "./Footer.module.css";
import Logo_Rizzi_Color_Footer from '../../components/Imagenes/Logos/Logo_Capital.png'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Un miembro de:</p>
      {<img src={Logo_Rizzi_Color_Footer } alt="Logo" className={styles.logo} />}
    </footer>
  );
}
