import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {

  const location = useLocation();
  // ✅ Usamos la misma instancia de useLocation para evitar lecturas duplicadas
  const { pathname, hash } = location;

  // const HIDE_SLUG = "/cincuenta-años-agustin-tosco";
  const HIDE_SLUG = "/tosco-eterno";

  // const base = "/cincuenta-años-agustin-tosco";
  const base = "";

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

    
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        
        const header = document.querySelector('.navbar.sticky-top');
        const offset = header ? header.offsetHeight + 8 : 0;
        const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
        return;
      }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]); 

  // --- FIX: normalizo el pathname y comparo contra ambas variantes (decodificada y URL-encoded) ---
  const cleanPath = decodeURIComponent(pathname).replace(/\/+$/, ''); 
  const hideHeader ='/tosco-eterno'
    // cleanPath.endsWith(HIDE_SLUG) ||
    // pathname.replace(/\/+$/, '').endsWith(encodeURI(HIDE_SLUG));
  // -----------------------------------------------------------------------------------------------

  return !hideHeader ? (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark container sticky-top">
        <div className="container-fluid">

          {/* LOGO */}
          <Link className="navbar-brand" to="/">
            <img src="/img/identidad/Logo-White.webp" alt="Logo sindicato de luz y fuerza" height="50" loading="lazy" />
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
                  <li><Link className="dropdown-item" to="/quienes-somos">Quiénes somos</Link></li>

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
                  <li><Link className="dropdown-item" to="/cuerpos-organicos">Cuerpos orgánicos</Link></li>
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
                  <li><Link className="dropdown-item" to="/propuesta-de-servicios">Áreas de servicios</Link></li>
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
  ) : (
    <header className='cincuentaAnoTosco'>
      <nav className="navbar navbar-expand-lg navbar-dark container sticky-top">
        <div className="container-fluid">

          {/* LOGO */}
          <Link className="navbar-brand" to="/">
            <img src="/tosco-eterno/img/identidad/Logo-White.webp" alt="Logo sindicato de luz y fuerza" height="50" loading="lazy" />
          </Link>

          {/* Botón hamburguesa mobile */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContenido"
            aria-controls="navbarContenido" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Contenido del navbar */}
          <div className="collapse navbar-collapse" id="navbarContenido">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

              <li className="nav-item">
                {/* ✅ Siempre navego a la ruta base + hash, incluso si ya estoy en la misma página */}
                <Link className="nav-link" to={{ pathname: base, hash: "#conoce-su-historia" }}>Historia</Link>
              </li>

              <li className="nav-item">
                
                <Link className="nav-link" to={{ pathname: base, hash: "#descarga-tu-afiche" }}>Afiches</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={{ pathname: base, hash: "#semblanza" }}>Semblanza</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={{ pathname: base, hash: "#todas-las-actividades" }}>Agenda</Link>
              </li>

            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
}

export default Header;
