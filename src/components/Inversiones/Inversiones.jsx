import styles from './Inversiones.module.css'
import imgInversiones from '../Imagenes/Img/imgInversiones.jpg'
import { useTranslation } from 'react-i18next' // Importar useTranslation

export default function Inversiones() {

  const { t } = useTranslation()

const tituloHtml = t('introProyectos.titulo_html', { 
    interpolation: { escapeValue: false } 
  })
  return (
    <section className={styles.inversiones}>
      <div className={styles.contenedor}>
        <div className={styles.texto}>
          <h2 dangerouslySetInnerHTML={{ __html: tituloHtml }} />
         <p>
            {t('introProyectos.descripcion')}
          </p>
           <button className={styles.boton}>
                    <a href="contacto" style={{ color: 'inherit', textDecoration: 'none' }}>{t('introProyectos.boton')}</a>
                  </button>
        </div>
        <div className={styles.imagen}>
          {<img className={styles.imgInversiones} src={imgInversiones} alt="Inversiones" />}
        </div>
      </div>
    </section>
  )
}
