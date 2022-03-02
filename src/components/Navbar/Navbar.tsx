import { Link } from "react-router-dom";
import "../../styles/style.scss";
const Navbar = () => {
    return(
        <div>
            <nav className="primary-nav">
                <Link to="/">Home</Link>
                <Link to="/">Home</Link>
                <Link to="/">Home</Link>
            </nav>
        </div>
    )
}

export default Navbar;