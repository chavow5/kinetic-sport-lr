// import React from 'react'; version +17
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
// PAGINAS
import HomePage from './pages/HomePage';
import Contacto from './pages/Contacto';
import Aboutus from './pages/Aboutus';
import ViaPass from './pages/ViaPass';

// import LoginPage from './pages/LoginPage';
// import RegistrarUser from './pages/RegistrarUser';
// import SistemaPeaje from './pages/SistemaPeaje';


const App = () => (
  <Router>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/viapass" element={<ViaPass />} />
        
        
        {/* <Route path="/login" element={<LoginPage />} /> */}
        {/* <Route path="/registrarusuario" element={<RegistrarUser />} /> */}
         {/* ocultar pagina, ver despues de login  */}
        {/* <Route path="/sistemapeaje" element={<SistemaPeaje />} />  */}
        {/* <Route
            path="/sistemapeaje"
            element={
              <AuthPage>
                <SistemaPeaje />
              </AuthPage>
            }
          /> */}

      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;
