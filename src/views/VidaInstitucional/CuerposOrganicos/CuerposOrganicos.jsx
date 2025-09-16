import React from 'react'
import CuerpoDelegados from '../../../views/VidaInstitucional/CuerpoDelegados/CuerpoDelegados';
import BannerPortadas from '../../../components/reutilizables/bannerPortadas/BannerPortadas';
import AsambleaGeneral from '../AsambleaGeneral/AsambleaGeneral';
// Importa imagenes
import imgPortada from '../../../assets/images/vidaInstitucional/bannerPortada.jpg';

function CuerposOrganicos() {
  return (
   <>
   <BannerPortadas imagen={imgPortada} titulo="Cuerpos Organicos" />
   <CuerpoDelegados />
   <AsambleaGeneral />
   </>
  )
}

export default CuerposOrganicos