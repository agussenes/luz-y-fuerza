import SEO from '../../../seo/SEO';

function QuienesSomos() {
  return (
    <>
      <SEO
        title="Quienes Somos - Luz y Fuerza Córdoba"
        description="Bienvenidos al Sindicato de Luz y Fuerza de Córdoba. Noticias, beneficios y lucha sindical."
        url="https://tusitio.com/"
        image="https://tusitio.com/img/home-og-image.jpg"
      />

      <section className="home">
        <div className="container text-center py-5">
          <h1 className="display-4">Bienvenidos a Luz y Fuerza Córdoba</h1>
          <p className="lead">
            Defendiendo los derechos de los trabajadores de la energía desde siempre.
          </p>
        </div>
      </section>
    </>
  );
}

export default QuienesSomos;
