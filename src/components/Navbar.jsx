import { Link } from 'react-router-dom';
function Navbar(){
    return (
        <nav>
            <Link to="/">Dashboard</Link> |{" "}
            <Link to="/companies">Companies</Link> |{" "}
            <Link to="/experience">Experience</Link> |{" "}
            <Link to="/notes">Notes</Link> |{" "}
        </nav>  
    );
}
export default Navbar;