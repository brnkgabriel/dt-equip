import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="main">
      <div className="featured-bg"></div>
      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default Layout;