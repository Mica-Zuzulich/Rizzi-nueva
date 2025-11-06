import { useTranslation } from 'react-i18next'
import styles from './SobreAngela.module.css'
import Home_Imagen3 from '../Imagenes/Img/About_Imagen1.png'

export default function SobreAngela() {
  const { t } = useTranslation() // 🚩 Hook de traducción

  return (
    <section className={styles.sobreAngela}>
      <div className={styles.contenedor}>
        <div className={styles.imagen}>
          <img src={Home_Imagen3} alt={t('sobreAngela.alt_imagen')} />
        </div>

        <div className={styles.texto}>
          <h2>{t('sobreAngela.titulo')}</h2>
          <p>
            {t('sobreAngela.descripcion')}
          </p>
          <button className={styles.boton}>
            <a 
              href="/sobre-nosotros" // Ruta correcta para "Sobre Nosotros"
              style={{ color: 'inherit', textDecoration: 'none' }} 
            >
              {t('sobreAngela.boton')}
            </a>
          </button>
        </div>
      </div>
    </section>
  )
}