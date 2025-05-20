import { Link } from 'react-router-dom';
import './Header.css'; 

function Header() {
  return (
    <header className="custom-header">
      <nav className="nav-bar">
        <Link to="/" className="nav-link">Dashboard</Link>
        <Link to="/about" className="nav-link">About</Link>
      </nav>
    </header>
  );
}

export default Header;
