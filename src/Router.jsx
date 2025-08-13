import {Routes, Route } from 'react-router-dom';


// Importamos vistas
import Home from './views/Home/Home';
import QuienesSomos from './views/QuienesSomos/QuienesSomos';
import Historia from './views/Historia/Historia';
import ConvenioColectivo from './views/ConvenioColectivo/ConvenioColectivo';
import Novedades from './views/Novedades/Novedades';
import NuestraLucha from './views/NuestraLucha/NuestraLucha';
import VidaInstitucional from './views/VidaInstitucional/VidaInstitucional';
import AsambleaGeneral from './views/VidaInstitucional/AsambleaGeneral/AsambleaGeneral';
import Secretarias from './views/VidaInstitucional/Secretaria/Secretaria';
import SecretariaDetalle from './views/VidaInstitucional/Secretaria/SecretariaDetalle';
import CuerpoDelegados from './views/VidaInstitucional/CuerpoDelegados/CuerpoDelegados';
import CuerpoGenDelegados from './views/VidaInstitucional/CuerpoDelegados/CuerpoGenDelegados/CuerpoGenDelegados';
import DelegadosDelegadas from './views/VidaInstitucional/CuerpoDelegados/DelegadosDelegadas/DelegadosDelegadas';
import DefendamosEpec from './views/NuestraLucha/defendamosEpec/DefendamosEpec';
import Contacto from './views/Contacto/Contacto';
import Beneficios from './views/Beneficios/Beneficios';
import BeneficiosEducativos from './views/Beneficios/BeneficiosEducativos';
import BeneficiosTurismo from './views/Beneficios/BeneficiosTurismo';
import BeneficiosJuridicos from './views/Beneficios/BeneficiosJuridicos';
import Actividades from './views/Actividades/Actividades';
import NotFound from './views/NotFound/NotFound';


function Router() {
  return (
    <>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/convenio-colectivo" element={<ConvenioColectivo />} />
          <Route path="/novedades" element={<Novedades />} />
          <Route path="/nuestra-lucha" element={<NuestraLucha />} />
          <Route path="/defendamos-epec" element={<DefendamosEpec />} />
          <Route path="/vida-institucional" element={<VidaInstitucional />} />
          <Route path='/asamblea-general' element={<AsambleaGeneral />} />
          <Route path='/secretarias' element={<Secretarias />} />
          <Route path='/secretarias/:id' element={<SecretariaDetalle />} />
          <Route path="/cuerpo-general-delegados" element={<CuerpoDelegados />} />
          <Route path="/delegados-generales" element={<CuerpoGenDelegados />} />
          <Route path="/delegados-delegadas" element={<DelegadosDelegadas />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/beneficios" element={<Beneficios />} />
          <Route path="/beneficios-turisticos" element={<BeneficiosTurismo />} />
          <Route path="/beneficios-educativos" element={<BeneficiosEducativos />} />
          <Route path="/beneficios-juridicos-y-de-asesoramiento" element={<BeneficiosJuridicos />} />
          <Route path="/actividades" element={<Actividades />} />



          <Route path="*" element={<NotFound />} />

        </Routes>

    </>
  );
}

export default Router;
