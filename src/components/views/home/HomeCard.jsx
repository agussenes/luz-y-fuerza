import { Link } from 'react-router-dom';

function HomeCard({ to, title, icon }) {
  return (
    <div className="col-12 col-sm-6 col-md-3">
      <Link to={to} className="card h-100 shadow-sm text-decoration-none text-dark border-0">
        <div className="card-body d-flex flex-column align-items-center justify-content-center">
          <i className={`bi bi-${icon} mb-3`} style={{ fontSize: '2.5rem' }}></i>
          <h5 className="card-title">{title}</h5>
        </div>
      </Link>
    </div>
  );
}

export default HomeCard;
