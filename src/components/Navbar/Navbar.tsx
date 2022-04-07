import { NavLink } from "react-router-dom";
import "../../styles/style.scss";
const Navbar = () => {
    return(
        <div>
            <nav className="primary-nav">
                <NavLink to="/" className={({isActive}) => isActive ? "nav-active" : ""}>Home</NavLink>
                <NavLink to="/about" className={({isActive}) => isActive ? "nav-active" : ""}>About</NavLink>
                <NavLink to="/profile" className={({isActive}) => isActive ? "nav-active" : ""}>Profile</NavLink>
            </nav>
        </div>
    )
}

export default Navbar;