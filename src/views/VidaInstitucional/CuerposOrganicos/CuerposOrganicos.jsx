import React from 'react'
import CuerpoDelegados from '../../../views/VidaInstitucional/CuerpoDelegados/CuerpoDelegados';
import BannerPortadas from '../../../components/reutilizables/bannerPortadas/BannerPortadas';
import AsambleaGeneral from '../AsambleaGeneral/AsambleaGeneral';
// Importa imagenes
import imgPortada from '../../../assets/images/vidaInstitucional/portadaVI.webp';

function CuerposOrganicos() {
  return (
   <>
   <BannerPortadas imagen={imgPortada} titulo="Cuerpos organicos" />
   <CuerpoDelegados />
   <AsambleaGeneral />
   </>
  )
}

export default CuerposOrganicos