import { Link } from "react-router-dom";
import { useAuth } from "../auth";

const Nav=()=>{

  const auth=useAuth();

  return (
    <nav className="layout_nav">
    <div>
      <Link to="/">Home</Link>
      <Link to="/store">Store</Link>
      {
        !auth.user && <Link to="/login">Login</Link>
      }
    </div>
    </nav>
  );
}

export default Nav;