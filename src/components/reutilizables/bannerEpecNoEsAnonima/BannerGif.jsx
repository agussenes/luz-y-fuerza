import { Link } from 'react-router-dom';
import gifBanner from '../../../assets/images/home/bannerEpecNoEsAnonima/bannerGifEpec.gif';
import './BannerGif.css';

function BannerGif() {
  return (
    <section className="container contenedorGif bannerGif-img">
      <Link to="https://luzyfuerzacordoba.com.ar/epec-no-es-anonima/" className="w-100 d-block text-center">
        <img src={gifBanner} alt="Banner animado de epec no es anonima" className="img-fluid" />
      </Link>
    </section>
  );
}

export default BannerGif;
