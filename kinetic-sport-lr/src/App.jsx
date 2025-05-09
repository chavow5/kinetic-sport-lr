import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contactos";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
