import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importamos componentes parciales
import Header from './components/partials/Header/Header';
import Footer from './components/partials/Footer/Footer';
import SocialSidebar from './components/partials/SocialSidebar/SocialSidebar';

// Importamos vistas
import Home from './components/views/Home/Home';
import QuienesSomos from './components/views/QuienesSomos/QuienesSomos';
import Historia from './components/views/Historia/Historia';
import ConvenioColectivo from './components/views/ConvenioColectivo/ConvenioColectivo';
import Novedades from './components/views/Novedades/Novedades';
import NuestraLucha from './components/views/NuestraLucha/NuestraLucha'
import VidaInstitucional from './components/views/VidaInstitucional/VidaInstitucional'

import NotFound from './components/views/NotFound/NotFound'


function App() {
  return (
    <Router>
      {/* Header siempre visible */}
      <Header />

      {/* Contenido dinámico basado en la ruta */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/convenio-colectivo" element={<ConvenioColectivo />} />
          <Route path="/novedades" element={<Novedades />} />
          <Route path="/nuestra-lucha" element={<NuestraLucha />} />
          <Route path="/vida-institucional" element={<VidaInstitucional />} />
          
          <Route path="*" element={<NotFound />} />
          
        </Routes>
      </main>

      {/* SocialSidebar fijo  */}
      <SocialSidebar />

      {/* Footer siempre visible */}
      <Footer />
    </Router>
  );
}

export default App;
