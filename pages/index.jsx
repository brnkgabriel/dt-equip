import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>DT-Equip | Design, Develop & Animate</title>
        <meta name="description" content="Migrate from concept to product through the design, develop & animate steps. On this platform you will learn graphics design, software development as well as 2D & 3D animation and wrap the knowledge in an application." />
        <meta property="og:title" content="DT-Equip | Design, Develop & Animate" />
        <meta property="og:description" content="Migrate from concept to product through the design, develop & animate steps. On this platform you will learn graphics design, software development as well as 2D & 3D animation and wrap the knowledge in an application." />
        <meta property="og:url" content="https://dt-equip.vercel.app/" />
        <meta property="og:type" content="website" />
      </Head>
      
      <Navbar />
      <h1>homepage</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, autem nam deserunt iste obcaecati dolor quidem placeat, quia eius reprehenderit repellat officiis ipsum sunt minus sed alias officia dolores recusandae.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut dolorum quibusdam totam similique quas quidem? Atque, soluta eaque! Sapiente deleniti voluptate possimus exercitationem, suscipit expedita illo magnam iure reprehenderit deserunt!</p>
      <Footer/>
    </div>
  )
}
