
import Head from 'next/head'
const Header = ({ name, description, url }) => {
  return (
    
    <Head>
      <title>{name}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content="DT-Equip | Design, Develop & Animate" />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={"https://dt-equip.vercel.app/" + url} />
      <meta property="og:type" content="website" />
    </Head>
  );
}
 
export default Header;