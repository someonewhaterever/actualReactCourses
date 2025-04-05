import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Login from '../pages/Login';
import SearchBar from './SearchBar';
import logo from '../assets/logo/logo.svg';
function Header() {
  const navigate = useNavigate();

    return (
      <header className="header">
        <div className="header__body">
            <div className="header__body-inner container">
                <Link to = "/" className="logo">
                <img className="logo__image" 
                src={logo} 
                alt="" 
                width="166" height="30" 
                />
                </Link>

                <div className="header__overlay">
                  <nav className="header__menu">
                    <ul className="header__menu-list">
                      <li className="header__menu-item">
                      <Link to="/" className="header__menu-link">Home</Link>
                      </li>
                      <li className="header__menu-item">
                      <Link to="/about" className="header__menu-link">About</Link>
                      </li>
                      <li className="header__menu-item">
                      <Link to="/courses" className="header__menu-link">Courses</Link>
                      </li>
                      <li className="header__menu-item">
                      <Link to="/contact" className="header__menu-link">Contact</Link>
                      </li>
                    </ul>
                  </nav>

                  <div className="header__actions">
                    
                    <button 
                    type="button"
                    className="btn btn-auth"
                    aria-label="Sign In or Register"
                    onClick={() => navigate("/login")}
                    >
                      Login / Register
                    </button>
                    <div className="header__search-bar">
                      <SearchBar />
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </header>
    );
  }
  
  export default Header;
  