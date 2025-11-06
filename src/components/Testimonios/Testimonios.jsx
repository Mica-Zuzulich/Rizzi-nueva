import styles from './Testimonios.module.css'
import { useState } from 'react'
import Icono_FlechaIzq from '../Imagenes/Íconos/Icono_Flecha-04.png' 
import Icono_FlechaDer from '../Imagenes/Íconos/Icono_Flecha-05.png'
import Icono_Estrellas from '../Imagenes/Íconos/Icono_Estrellas.png'  

export default function Testimonios() {
  const [index, setIndex] = useState(0)

  const testimonios = [
    {
      texto: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate autem nostrum voluptatum officiis eos placeat, assumenda error voluptate iure. Quis qui, at explicabo hic a praesentium sint blanditiis! Consequatur, laborum.",
      autor: "Darlin Bought - Miami, FL"
    },
    {
      texto: "Excelente experiencia con el equipo de Rizzi Group... Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate autem nostrum voluptatum officiis eos placeat, assumenda error voluptate iure. Quis qui, at explicabo hic a praesentium sint blanditiis! Consequatur, laborum.",
      autor: "María Pérez - Buenos Aires, AR"
    }
  ]

  const siguiente = () => {
    setIndex((prev) => (prev + 1) % testimonios.length)
  }

  const anterior = () => {
    setIndex((prev) => (prev - 1 + testimonios.length) % testimonios.length)
  }

  return (
    <section className={styles.testimoniosSection}>
      <h2>Testimonios</h2>

      <div className={styles.testimonioCard}>
        <button onClick={anterior} className={styles.flecha}><img src={Icono_FlechaIzq} alt="" /></button>

        <div className={styles.testimonioContenido}>
          <img className={styles.Icono_Estrellas} src={Icono_Estrellas} alt="" />
          <p>{testimonios[index].texto}</p>
          <h4>{testimonios[index].autor}</h4>
        </div>

        <button onClick={siguiente} className={styles.flecha}><img src={Icono_FlechaDer} alt="" /></button>
      </div>
    </section>
  )
}
