import styles from './socioFinanciero.module.css'
import suntree from '../Imagenes/Logos/suntree.jpeg'
import { useTranslation } from 'react-i18next' // Importar useTranslation


export default function socioFinanciero() {
  const { t } = useTranslation();

  return (
    <section className={styles.socioFinanciero}>
      <div className={styles.partnerBox}>
        <div className={styles.partnerContent}>
          <div className={styles.partnerText}>
            <h2> <span>Sun Tree Finance</span></h2>
            <p>
              Compañía hipotecaria con sede en Davie, Florida, especializada en el origen y estructuración de préstamos comerciales y residenciales dentro de Estados Unidos.
            </p>
            <br />
            <p>En alianza con Sun Tree Finance, brindamos soluciones de financiamiento de hasta el 70% en propiedades residenciales, comerciales y de construcción. Incluye préstamos para extranjeros, líneas residenciales y productos respaldados por el valor del inmueble, sin requerir verificación de ingresos.</p>
          </div>

          <div className={styles.partnerImage}>
            <img src={suntree} alt="Sun Tree Finance" />
          </div>
        </div>

        <button 
          className={styles.partnerButton}
          onClick={() => window.open("https://www.suntreefinance.com", "_blank")}
        >
          Contactar
        </button>
      </div>
    </section>
  );
}