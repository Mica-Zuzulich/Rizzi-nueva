import styles from './Proyectos.module.css';
//import Proyectos_Imagen_Hero from '../Imagenes/Img/Proyectos_Imagen_Hero.jpg'; // imagen

export default function ProyectosIntro() {
  return (
    <section 
      className={styles.intro} 
      //style={{ backgroundImage: `url(${Proyectos_Imagen_Hero})` }}
    >
      <h1>Comenzá una experiencia <br /> internacional.</h1>
      <p>
        Rizzi Group cuenta con una amplia variedad de propiedades y proyectos en diversas partes del mundo.
      </p>
    </section>
  );
}
