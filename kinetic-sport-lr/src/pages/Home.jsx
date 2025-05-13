import Hero from "../components/Hero";
import About from "../components/About";
import Profesionales from "../components/Profesionales";
import Contactos from "../components/Contactos";
import Services from "../components/Services";
import Instagram from "../components/Instagram";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Profesionales />
      <Services />
      <Contactos />
      <Instagram />
    </main>
  );
};

export default Home;
