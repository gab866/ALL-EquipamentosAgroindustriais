import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <img src="/logoheader.png" alt="ALL Equipamentos Agroindustriais" />
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">Início</Link>
          <Link to="/catalogo" className="nav-link">Catálogo</Link>
          <a href="#sobre" className="nav-link">Sobre Nós</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;