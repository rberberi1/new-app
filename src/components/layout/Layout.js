import './layout.css';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';

const Layout = props => {
  return (
    <div className="layout">
      <Nav/>
      {props.children}
      <Footer/>
    </div>
  );
};

export default Layout;