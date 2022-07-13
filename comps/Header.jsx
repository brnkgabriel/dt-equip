
import Head from 'next/head'
const Header = ({ name, description, url }) => {
  return (

    <Head>
      <title>{name}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <meta name="title" content="DT-EQUIP" />
      <meta name="description" content={description} />
      <meta name="keywords" content="2D, 3D, Graphics, Design, Software, Development, Animation, Web" />
      <meta name="robots" content="index, follow" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="en-us" />
      <meta name="revisit-after" content="2 days" />
      <meta name="author" content="Olanrewaju Gabriel Ibironke" />

      <meta property="og:title" content="DT-EQUIP | Design, Develop & Animate" />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={"https://dt-equip.vercel.app/" + url} />
      <meta property="og:type" content="website" />

      
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="icon" href="/favicon.ico"/>
      <link rel="manifest" href="/manifest.json"/>
    </Head>
  );
}

export default Header;