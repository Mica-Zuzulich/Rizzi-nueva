import ProyectosIntro from '../../components/Proyectos/Proyectos';
import ProyectosCards from '../../components/Proyectos/ProyectosCards';
import ContactoForm from '../../pages/Contacto/Contacto';
import IntroProyectos from '../../components/IntroProyectos/IntroProyectos';

export default function ProyectosPage() {
  return (
    <>
      <ProyectosIntro />
      <IntroProyectos />
      <ProyectosCards />   {/*  banners */}

      <ContactoForm />

   
    </>
  );
}
