import styles from './Intro.module.css'
import casaImg from '../Imagenes/Img/casaImg.png'
import { useTranslation } from 'react-i18next' // Importar useTranslation

export default function Intro() {
  const { t } = useTranslation() // Usar el hook de traducción
  
  // Título: "La forma más <span>flexible</span> <br />de invertir."
  // Se usa dangerouslySetInnerHTML para incluir el <span>, ya que t() solo devuelve texto plano.
  const tituloHtml = t('intro.titulo_html', { 
    interpolation: { escapeValue: false } 
  })

  return (
    <section className={styles.intro}>
      <div className={styles.contenedor}>
        <div className={styles.imagen}>
          {<img 
            src={casaImg} 
            alt={t('intro.alt_imagen')} // Clave para alt
            className={styles.casaImg} 
          />}
        </div>

        <div className={styles.texto}>
          {/* Usamos dangerouslySetInnerHTML para el título que contiene <span> */}
          <h2 dangerouslySetInnerHTML={{ __html: tituloHtml }} />
          
          <p>
            {t('intro.descripcion')}
          </p>
          <button className={styles.boton}>
            <a 
              href="/contacto" // ⬅️ CAMBIO REALIZADO AQUÍ: apunta a la ruta de la página de contacto
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              {t('intro.boton')}
            </a>
          </button>
        </div>
      </div>
    </section>
  )
}