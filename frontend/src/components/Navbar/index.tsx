import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
    return(
        <div className="navbar-container bg-primary">
            <Link to="/" >
            <p>Github API</p>
            </Link>
        </div>
    );    
}

export default Navbar;