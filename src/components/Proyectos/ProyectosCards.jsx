import styles from './Proyectos.module.css'

export default function ProyectosBanners() {
  return (
    <section className={styles.banners}>
      <div className={`${styles.banner} ${styles.miami}`}>
        {/* Imagen de fondo (Miami) */}
          <div className={styles.contentUno}>
            <h2>Orlando, Florida</h2>
          </div>

        <div className={styles.content}>
          <h2>Resort de lujo en Orlando</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          </p>
          <div className={styles.buttons}>
            <button>Saber más</button>
          </div>
        </div>
      </div>

      <div className={`${styles.banner} ${styles.panama}`}>
                {/* Imagen de fondo (Miami) */}
          <div className={styles.contentUno}>
            <h2>Ciudad de Panamá</h2>
          </div>

        <div className={styles.content}>
          <h2>Ciudad de Panamá</h2>
          <p>
            Inversiones seguras y rentables en un mercado en crecimiento, con
            beneficios fiscales para extranjeros.
          </p>
          <button>Saber más</button>
        </div>
      </div>

      <div className={`${styles.banner} ${styles.lisboa}`}>
      {/* Imagen de fondo (Miami) */}

      <div className={styles.contentUno}>
          <h2>Lisboa, Portugal</h2>
        </div>

        <div className={styles.content}>
          <h2>Lisboa, Portugal</h2>
          <p>
            Una ciudad de oportunidades, estilo y cultura. Invertí en uno de los
            destinos más atractivos de Europa.
          </p>
          <button>Saber más</button>
        </div>
      </div>

      <section className={styles.creaTuFuturo}>
      {/* Imagen de fondo (Miami) */}

    <h2>Creá tu futuro.</h2>
      </section>
    </section>
  )
}
