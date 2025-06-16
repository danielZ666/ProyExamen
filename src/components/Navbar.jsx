import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <div className="navbar-nav">
          <Link className="nav-link" to="/">Principal</Link>
          <Link className="nav-link" to="/peliculas">Películas</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;