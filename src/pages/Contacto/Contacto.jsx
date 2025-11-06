import ContactoForm from '../../components/ContactoForm/ContactoForm'
import styles from './Contacto.module.css'
import Logo_Rizzi_Color_Footer from '../../components/Imagenes/Logos/Logo_Rizzi_Color_Footer.png'

export default function Contacto() {
  return (
    <>
      <section className={styles.contacto}>
        <div className={styles.contactoMargenes}>
        <h2>Contáctanos</h2>

        <div className={styles.formContainer}>
          <ContactoForm />

          <div className={styles.info}>
            {<div className={styles.logo}>
          <img src={Logo_Rizzi_Color_Footer} alt="Rizzi Group" className={styles.logoImg} />
          </div>}
            <h3>Angela Rizzi</h3>
            <p className={styles.certi}>Broker Associate <br /> GRI, CRS, TRC, REO Certified</p>
            <div className={styles.datos}>
            <p>101 Crandon Blvd. Suite 276 Key Biscayne FL 33149</p>
            <p>+1 786-853-9853</p>
            <p>angela@rizziinvestments.com</p>
            </div>
            
          </div>
        </div>
        </div>
      </section>
    </>
  )
}
