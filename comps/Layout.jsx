import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <div className="content">
    <Head>
      <title>DT-Equip | Home</title>
      <meta name="description" content="Migrate from concept to product through the design, develop & animate steps. On this platform you will learn graphics design, software development as well as 2D & 3D animation and wrap the knowledge in an application." />
      <meta property="og:title" content="DT-Equip | Design, Develop & Animate" />
      <meta property="og:description" content="Migrate from concept to product through the design, develop & animate steps. On this platform you will learn graphics design, software development as well as 2D & 3D animation and wrap the knowledge in an application." />
      <meta property="og:url" content="https://dt-equip.vercel.app/" />
      <meta property="og:type" content="website" />
    </Head>
      <Navbar/>
      { children }
      <Footer/>
    </div>
  );
}
 
export default Layout;