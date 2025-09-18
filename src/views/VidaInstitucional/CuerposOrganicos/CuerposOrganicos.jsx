import React from 'react'
import CuerpoDelegados from '../../../views/VidaInstitucional/CuerpoDelegados/CuerpoDelegados';
import BannerPortadas from '../../../components/reutilizables/bannerPortadas/BannerPortadas';
import AsambleaGeneral from '../AsambleaGeneral/AsambleaGeneral';
// Importa imagenes
import imgPortada from '../../../assets/images/portadaProvi.webp';

function CuerposOrganicos() {
  return (
   <>
   <BannerPortadas imagen={imgPortada} titulo="" />
   <CuerpoDelegados />
   <AsambleaGeneral />
   </>
  )
}

export default CuerposOrganicos