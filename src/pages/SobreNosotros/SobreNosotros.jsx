import { useState } from 'react'
import Contacto from '../Contacto/Contacto'
import styles from './SobreNosotros.module.css'
import Testimonios from '../../components/Testimonios/Testimonios'
import About_Imagen1 from '../../components/Imagenes/Img/Home_Imagen3.jpg';
import About_Imagen2 from '../../components/Imagenes/Img/adrian1.jpg';
import About_Imagen3 from '../../components/Imagenes/Img/Karol1.jpeg';

// import angelaImg from '../../assets/angela.jpg'
// import adrianImg from '../../assets/adrian.jpg'
// import karolImg from '../../assets/karol.jpg'
// import visionImg from '../../assets/fondoVision.jpg'
import LogoCert1 from '../../components/Imagenes/Logos/logo1.png';
import LogoCert2 from '../../components/Imagenes/Logos/logo2.png';
import LogoCert3 from '../../components/Imagenes/Logos/logo3.png';
import LogoCert4 from '../../components/Imagenes/Logos/logo4.png';
import LogoCert5 from '../../components/Imagenes/Logos/logo5.png';
import LogoCert6 from '../../components/Imagenes/Logos/logo6.png';
import LogoCert7 from '../../components/Imagenes/Logos/logo7.png';
import LogoCert8 from '../../components/Imagenes/Logos/logo8.png';

import LogoPremio1 from '../../components/Imagenes/Logos/Logo_Premios1.png'; 
import LogoPremio2 from '../../components/Imagenes/Logos/Logo_Premios2.png'; 
import LogoPremio3 from '../../components/Imagenes/Logos/Logo_Premios3.jpeg'; 
import LogoPremio4 from '../../components/Imagenes/Logos/Logo_Premios4.png';
import LogoPremio5 from '../../components/Imagenes/Logos/Logo_Premios5.png';
import LogoPremio6 from '../../components/Imagenes/Logos/Logo_Premios6.png'; 

export default function SobreNosotros() {
  // 🧠 Lista de testimonios
  const testimonios = [
    {
      texto:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip hendrerit in vulputate velit esse molestie consequat.',
      autor: 'Darlin Bought - Miami, FL',
    },
    {
      texto:
        'El equipo de Rizzi Group fue increíble. Me acompañaron en cada paso de mi inversión. ¡Altamente recomendados!',
      autor: 'Carlos Pérez - Buenos Aires, Argentina',
    },
    {
      texto:
        'Gracias a Angela y su equipo, encontré la propiedad ideal para mi familia. Profesionalismo y calidez humana.',
      autor: 'Sofía Torres - Orlando, FL',
    },
  ]

  // Estado para manejar el testimonio actual
  const [indice, setIndice] = useState(0)

  const handleNext = () => {
    setIndice((prev) => (prev + 1) % testimonios.length)
  }

  const handlePrev = () => {
    setIndice((prev) => (prev - 1 + testimonios.length) % testimonios.length)
  }

  return (
    <>
      {/* Banner inicial */}
      <section className={styles.bannerSobre}>
        <h1>Nuestro Equipo <br />de trabajo.</h1>
        <p>
          Rizzi y su equipo multidisciplinario van desde abogados, contadores y sus asesores todos
          bilingües y desde diferentes puntos adentro y afuera de USA para asegurar que todo
          interesado es atendido de manera personal y por un equipo orientado al buen servicio.
        </p>
      </section>

      {/* Perfil de Angela */}
      <section className={styles.perfilAngela}>
        <div className={styles.container}>
          <div  className={styles.imagen} >{<img src={About_Imagen1} alt="Angela Rizzi"/>}</div>
          <div className={styles.texto}>
            <h2>Angela Rizzi</h2>
            <h3>Nuestra Líder</h3>
            <p>
              Angela Rizzi es una broker asociada con más de 24 años de experiencia asesorando
              inversionistas y dueños de casa a alcanzar su sueño. Rizzi trabajó como asesor
              financiero en New York Life Insurance Company, además de gestionar sus propias
              galerías de arte y sus inversiones en real estate. <br />
              Es una súperhost de Airbnb y con su equipo seleccionan proyectos estudiados y
              analizados en donde ganen todos escogiendo así flexibilidad, retorno, comodidad e
              inversiones fáciles y seguras así como este resort en Orlando que permite a todos
              tener un título de propiedad.
            </p>
            <a
             href="https://cal.com/rizzi-group/asesoria-con-angela-rizzi"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.botonZoom}
              >
               Asesorate con ella vía Zoom
              </a>
          </div>
        </div>
      </section>

      {/* Perfil de Adrian */}
      <section className={styles.perfilAngela}>
        <div className={styles.container}>
          <div  className={styles.imagen} >{<img src={About_Imagen2} alt="Adrian López" className={styles.imagen} />}</div>
          <div className={styles.texto}>
            <h2>Adrian López</h2>
            <h3>Vendedor/Asesor</h3>
            <p>
              Adrián López, desde Argentina, aporta al equipo su experiencia en ventas y
              asesoramiento en desarrollo de ideas. Con años de experiencia en diversos sectores,
              hoy se suma a Rizzi Group para ser ese enlace local en Argentina, entendiendo como
              pocos las dificultades de la inversión en el extranjero y la necesidad de proteger el
              ahorro en una economía siempre cambiante.
            </p>
             <a
                href="https://cal.com/rizzi-group/asesoria-con-adrian-rizzi"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.botonZoom}
              >
                Asesorate con él vía Zoom
              </a>
          </div>
        </div>
      </section>

      {/* Perfil de Karol */}
      <section className={styles.perfilAngela}>
        <div className={styles.container}>
          <div  className={styles.imagen} >{<img src={About_Imagen3} alt="Karol Diaz" className={styles.imagen} />}</div>
          <div className={styles.texto}>
            <h2>Karol Diaz</h2>
            <h3>Atención al cliente</h3>
            <p>
              Desde Austin Texas, Karol se suma al equipo de Rizzi como vendedora, emprendedora y
              experta en atención al cliente, con amplia experiencia en el campo.
            </p>
               <a
                href="https://cal.com/rizzi-group/asesoria-con-karol-rizzi"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.botonZoom}
              >
                Asesorate con ella vía Zoom
              </a>           </div>
        </div>
      </section>

      {/* Visión y Misión */}
      <section className={styles.visionMisionUnica}>
        <div className={styles.overlay}>
          <div className={styles.textos}>
            <div className={styles.textoBloque}>
              <h2>Nuestra Visión.</h2>
              <p>
                En Rizzi Group, nos consideramos líderes indiscutibles en el mercado
                inmobiliario, con más de 25 años de experiencia y dedicación inquebrantables. Nuestra visión es impactar positivamente la vida de nuestros
                clientes, ofreciendo soluciones a medida y un servicio excepcional que
                trasciende las expectativas convencionales. Nos comprometemos a ser la
                opción preferida de quienes buscan resultados confiables y asesoramiento
                experto para hacer realidad sus sueños inmobiliarios, tanto a nivel nacional
                como internacional.
              </p>
            </div>

            <div className={styles.textoBloque}>
              <h2>Nuestra Misión.</h2>
              <p>
                Nuestra misión, como Rizzi Group, es simple pero contundente: ayudar a las
                personas a encontrar el hogar perfecto y a realizar inversiones inmobiliarias
                sólidas, guiados por nuestra experiencia, integridad y pasión por el servicio
                al cliente. Nos esforzamos por establecer relaciones de confianza a largo
                plazo con cada cliente, brindando asesoramiento experto, transparencia en
                todas las transacciones y un compromiso inquebrantable con su
                satisfacción. A través de un enfoque profesional y centrado en el cliente,
                buscamos no solo cumplir, sino superar constantemente sus expectativas,
                elevando así el estándar de excelencia en el sector inmobiliario a nivel
                nacional e internacional.
              </p>
            </div>
          </div>
        </div>
      </section>
      
{/* 🥇 Certificaciones */}
<section className={styles.certificacionesSection}>
  <div className={styles.containerCertificaciones}>
    <h2>Certificaciones</h2>

    <div className={styles.certificacionesGrid}>
      {/* Logos */}
      <div className={styles.certificacionesLogos}>
      <img src={LogoCert1} alt="REO Certified" />
      <img src={LogoCert2} alt="CRI Certificate" />
      <img src={LogoCert3} alt="TRC Certified" />
      <img src={LogoCert4} alt="CRS Certified" />
      <img src={LogoCert5} alt="National Association of Realtors" />
      <img src={LogoCert6} alt="Staying Course Certified" />
     <img src={LogoCert7} alt="IFREC Real Estate Schools" />
     <img src={LogoCert8} alt="IFREC Real Estate Schools" />
    </div>

      {/* Lista de certificaciones */}
      <div className={styles.textoCertificaciones}>
        <ul>
          <li>Especialista global en bienes raíces.</li>
          <li>Asesora de estrategia de precios.</li>
          <li>Especialista en ventas cortas.</li>
          <li>Certificación comercial y de inversión.</li>
          <li>Miembro activo de la Academia de Inversionistas de Raúl Luna.</li>
          <li>Especialista en alquileres a corto plazo Airbnb y Vrbo en Key Biscayne y Colombia.</li>
          <li>MasterMind World Tony Robbins.</li>
          <li>Miembro activo de Rotary International.</li>
        </ul>
      </div>
    </div>
  </div>
</section>


     {/* 🏆 Premios y Honores */}
<section className={styles.premiosHonoresSection}>
  <div className={styles.container}>
    <h2>Premios y Honores</h2>

    <div className={styles.honoresGrid}>
      <div className={styles.gridContainerInner}>
            
      <div className={styles.honorItem}>
        <img src={LogoPremio1} alt="Premio 1" /> 
        
      </div>

      <div className={styles.honorItem}>
       <img src={LogoPremio2} alt="Premio 2" />
        
      </div>

      <div className={styles.honorItem}>
         <img src={LogoPremio3} alt="Premio 3" />
       
      </div>

      <div className={styles.honorItem}>
         <img src={LogoPremio4} alt="Premio 4" />
        
      </div>

      <div className={styles.honorItem}>
         <img src={LogoPremio5} alt="Premio 5" /> 
       
      </div>

      <div className={styles.honorItem}>
       <img src={LogoPremio6} alt="Premio 6"/>
        
      </div>
      <div className={`${styles.honorItem} ${styles.secundario}`}>
        <img src={LogoPremio1} alt="Premio 1" /> 
        
      </div>

      <div className={`${styles.honorItem} ${styles.secundario}`}>
       <img src={LogoPremio2} alt="Premio 2" />
        
      </div>

      <div className={`${styles.honorItem} ${styles.secundario}`}>
         <img src={LogoPremio3} alt="Premio 3" />
       
      </div>

      <div className={`${styles.honorItem} ${styles.secundario}`}>
         <img src={LogoPremio4} alt="Premio 4" />
        
      </div>

      <div className={`${styles.honorItem} ${styles.secundario}`}>
         <img src={LogoPremio5} alt="Premio 5" /> 
       
      </div>

      <div className={`${styles.honorItem} ${styles.secundario}`}>
       <img src={LogoPremio6} alt="Premio 6"/>
        
      </div>
    </div>
    </div>
  </div>
</section>

     <Testimonios />

      {/* Contacto al final */}
      <Contacto />

    </>
  )
}
