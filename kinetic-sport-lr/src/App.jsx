import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

// en app.jsx solo agregar la paginas

const App = () => {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Home />
      </main>
      <Footer />
    </>
  );
};

export default App;
