import styles from './IntroProyectos.module.css'
import casaImg from '../Imagenes/Img/mundi.png'
import { useTranslation } from 'react-i18next' // Importar useTranslation

export default function IntroProyectos() {
  const { t } = useTranslation() // Usar el hook de traducción
  
  // Título: "La forma más <span>flexible</span> <br />de invertir."
  // Se usa dangerouslySetInnerHTML para incluir el <span>, ya que t() solo devuelve texto plano.
  const tituloHtml = t('introProyectos.titulo_html', { 
    interpolation: { escapeValue: false } 
  })

  return (
    <section className={styles.introProyectos}>
      <div className={styles.contenedor}>

        <div className={styles.texto}>
          {/* Usamos dangerouslySetInnerHTML para el título que contiene <span> */}
          <h2 dangerouslySetInnerHTML={{ __html: tituloHtml }} />
          
          <p>
            {t('introProyectos.descripcion')}
          </p>
          <button className={styles.boton}>
            <a 
              href="/contacto" // ⬅️ CAMBIO REALIZADO AQUÍ: apunta a la ruta de la página de contacto
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              {t('introProyectos.boton')}
            </a>
          </button>
        </div>

          <div className={styles.imagen}>
            {<img 
              src={casaImg} 
              alt={t('introProyectos.alt_imagen')} // Clave para alt
              className={styles.casaImg} 
            />}
          </div>
      </div>
    </section>
  )
}