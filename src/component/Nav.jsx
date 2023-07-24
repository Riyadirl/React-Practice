
import { NavLink } from 'react-router-dom';
import './Nav.css'; // Import the CSS file for styling

const Nav = () => {
    return (
        <nav className="nav-container">
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName="active">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeClassName="active">About</NavLink>
                </li>
                <li>
                    <NavLink to="/services" activeClassName="active">Services</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
