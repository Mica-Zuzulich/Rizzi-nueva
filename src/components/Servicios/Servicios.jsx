import styles from './Servicios.module.css'
import Icono1 from '../../components/Imagenes/Íconos/home_inversion_inmobiliaria.png'; 
import Icono2 from '../../components/Imagenes/Íconos/home_alcance_internacional.png'; 
import Icono3 from '../../components/Imagenes/Íconos/home_asesoramiento_legal.png'; 
import Icono4 from '../../components/Imagenes/Íconos/home_prestamos.png';
import { useTranslation } from 'react-i18next' // Importar useTranslation

export default function Servicios() {

   const { t } = useTranslation() // Usar el hook de traducción

  return (
    <section className={styles.servicios}>
      <h2>{t('servicios.titulo')}</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          {/* Usamos LogoPremio1 como placeholder temporal */}
          <img src={Icono1} alt="Propiedades" className={styles.cardImg} />
          <h3>{t('servicios.servicio1')}</h3>
          <p>{t('servicios.descripcion1')}</p>
                    <button></button>
        </div>
        <div className={styles.card}>
          {/* Usamos LogoPremio1 como placeholder temporal */}
          <img src={Icono2} alt="Inversiones Internacionales" className={styles.cardImg} />
          <h3>{t('servicios.servicio2')}</h3>
          <p>{t('servicios.descripcion2')}</p>
                    <button></button>
        </div>
        <div className={styles.card}>
          {/* Usamos LogoPremio1 como placeholder temporal */}
          <img src={Icono3} alt="Propiedades en Miami" className={styles.cardImg} />
          <h3>{t('servicios.servicio3')}</h3>
          <p>{t('servicios.descripcion3')}</p>
                    <button></button>
        </div>
        <div className={styles.card}>
          {/* Usamos LogoPremio1 como placeholder temporal */}
          <img src={Icono4} alt="Inversión Inmobiliaria" className={styles.cardImg} />
          <h3>{t('servicios.servicio4')}</h3>
          <p>{t('servicios.descripcion4')}</p>
                    <button className={styles.botonPrestamo}>{t('servicios.boton')}</button>

        </div>
      </div>
    </section>
  )
}