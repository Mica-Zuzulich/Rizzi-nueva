import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo_Rizzi_Color_Header from "../Imagenes/Logos/Logo_Rizzi_Color_Header.png";
import LanguageButton from "../LanguageButton"; // Botón para cambiar idioma
import { useTranslation } from 'react-i18next' // Importar useTranslation

export default function Navbar() {
  const { t } = useTranslation() // Usar el hook de traducción
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        {/* Logo clickeable */}
        <Link to="/" className={styles.logo}>
          <img
            src={Logo_Rizzi_Color_Header}
            alt="Rizzi Group - Home"
            className={styles.logoImg}
          />
        </Link>

        {/* Botón menú hamburguesa (solo visible en mobile) */}
        <button className={styles.menuBtn} onClick={toggleMenu}>
          ☰
        </button>

        {/* Menú de navegación */}
        <nav
          className={`${styles.nav} ${
            menuAbierto ? styles.navVisible : ""
          }`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.activo}` : styles.link
            }
            onClick={() => setMenuAbierto(false)}
          >
            {t('nav.home')}
          </NavLink>

          <NavLink
            to="/proyectos"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.activo}` : styles.link
            }
            onClick={() => setMenuAbierto(false)}
          >
            {t('nav.proyectos')}
          </NavLink>

          <NavLink
            to="/sobre-nosotros"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.activo}` : styles.link
            }
            onClick={() => setMenuAbierto(false)}
          >
            {t('nav.sobre')}
          </NavLink>

          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.activo}` : styles.link
            }
            onClick={() => setMenuAbierto(false)}
          >
            {t('nav.contacto')}
          </NavLink>

          <div className={styles.LanguageHamb}><LanguageButton /></div>

        </nav>

                  {/* Botón idioma también dentro del menú en mobile */}
          <div className={styles.LanguageCompu}><LanguageButton /></div>
      </div>
    </header>
  );
}
