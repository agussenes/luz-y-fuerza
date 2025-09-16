import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';




function Header() {

  const location = useLocation();
  

  useEffect(() => {
    const navbarCollapse = document.getElementById('navbarContenido');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
      navbarCollapse.classList.add('collapsing');
      setTimeout(() => {
        navbarCollapse.classList.remove('collapsing');
        navbarCollapse.classList.add('collapse');
      }, 300);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);




  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark container sticky-top">
        <div className="container-fluid">

          {/* LOGO */}
          <Link className="navbar-brand" to="/">
            <img src="/luz-y-fuerza/img/identidad/Logo-White.webp" alt="Logo sindicato de luz y fuerza" height="50" loading="lazy" />
          </Link>
          

          {/* Botón hamburguesa mobile */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContenido"
            aria-controls="navbarContenido" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Contenido del navbar */}
          <div className="collapse navbar-collapse" id="navbarContenido">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

              {/* Dropdown */}
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle btn btn-link"
                  id="dropdownMenu"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  type="button"
                >
                  El Sindicato
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu">
                  <li><Link className="dropdown-item" to="/quienes-somos">Quienes somos</Link></li>

                  <li><Link className="dropdown-item" to="/historia">Historia</Link></li>
                  <li><Link className="dropdown-item" to="/nuestra-lucha">Nuestra lucha</Link></li>

                </ul>
              </li>

              {/* Dropdown */}
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle btn btn-link"
                  id="dropdownMenuVI"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  type="button"
                >
                  Vida institucional
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuVI">
                  <li><Link className="dropdown-item" to="/autoridades">Autoridades</Link></li>
                  <li><Link className="dropdown-item" to="/cuerpos-organicos">Cuerpos organicos</Link></li>
                  <li><Link className="dropdown-item" to="/secretarias">Secretarías</Link></li>

                </ul>
              </li>



              {/* Enlaces normales */}
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle btn btn-link"
                  id="dropdownMenu"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  type="button"
                >
                  Afiliados
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu">
                  <li><Link className="dropdown-item" to="/propuestas-de-servicios">Propuesta de servicios</Link></li>
                  <li><Link className="dropdown-item" to="/actividades">Actividades</Link></li>
                  <li><Link className="dropdown-item" to="/convenio-colectivo">Convenio colectivo</Link></li>

                </ul>
              </li>

              

              <li className="nav-item">
                <Link className="nav-link" to="/contacto">Contacto</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="https://luzyfuerzacordobaelectrum.com.ar">Electrum</Link>
              </li>

            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
}

export default Header;
