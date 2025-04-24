import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
// PAGINAS
import HomePage from './pages/HomePage';
import Contacto from './pages/Contacto';
import Aboutus from './pages/Aboutus';
import ViaPass from './pages/ViaPass';

const App = () => (
  <Router>
    {/* Header con sombra */}
    <Header />
    {/* Main con fondo gris claro y padding */}
    <main className="bg-gray-100 min-h-screen p-6">
      <div className="container mx-auto">
        {/* Rutas con diseño centrado */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/viapass" element={<ViaPass />} />
        </Routes>
      </div>
    </main>
    {/* Footer con fondo oscuro */}
    <Footer />
  </Router>
);

export default App;