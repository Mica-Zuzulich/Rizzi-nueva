import styles from './PorqueElegirnos.module.css'
import Home_IconoTick from '../Imagenes/Íconos/Home_IconoTick.png'
import { useTranslation } from 'react-i18next' // Importar useTranslation

export default function PorqueElegirnos() {
  const { t } = useTranslation() // Usar el hook de traducción

  // Definir la lista de razones a traducir y mapear
  const razones = [
    t('porqueElegirnos.razon1'),
    t('porqueElegirnos.razon2'),
    t('porqueElegirnos.razon3'),
    t('porqueElegirnos.razon4') 
  ]
  
  // Filtrar para evitar que se muestren elementos vacíos si no se definen todas las razones
  const listaRazones = razones.filter(razon => razon); 

  return (
    <section className={styles.porque}>
      <div className={styles.contenedor}>
        <div className={styles.texto}>
          {/* Título */}
          <h2>{t('porqueElegirnos.titulo')}</h2>
          
          <p>
           {/* La etiqueta <p> no debe contener <ul>, la lista debe ir directamente */}
           <ul>
            {listaRazones.map((razon, index) => (
              <li key={index}>
                <img 
                  src={Home_IconoTick} 
                  alt={t('porqueElegirnos.alt_icono')} 
                />
                {razon}
              </li>
            ))}
           </ul>
          </p>
        </div>
      </div>
    </section>
  )
}
