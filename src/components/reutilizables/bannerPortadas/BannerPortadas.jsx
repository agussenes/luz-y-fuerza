import './BannerPortadas.css';

function BannerPortadas({ imagen, titulo, isMobile = false, imgMobile, overLay = true }) {
  return (
    <section className="portada d-flex align-items-center justify-content-center text-center">
      <div className="bannerGif-img">
        {isMobile === true ? (
          <>
            <img src={imagen} alt={`Banner ${titulo}`} className='pc' />

            <img src={imgMobile} alt={`Banner ${titulo}`} className='mobile' />
          </>

        ) : (

          <img src={imagen} alt={`Banner ${titulo}`} />

        )}
        {overLay === true ? (
          <div className="overlay-text">
            <h1 className="text-uppercase fw-bold">{titulo}</h1>
          </div>
        ) : (
          <>
          </>

        )}

      </div>
    </section>
  );
}

export default BannerPortadas;
