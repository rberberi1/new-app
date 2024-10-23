import { Link } from "react-router-dom";

const Nav=()=>{
  return (
    <nav className="layout_nav">
    <div>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/store">Store</Link>
    </div>
    </nav>
  );
}

export default Nav;