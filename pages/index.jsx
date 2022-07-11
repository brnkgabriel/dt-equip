import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"

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
      
      <h1  className={styles.title}>homepage</h1>
      <p  className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, autem nam deserunt iste obcaecati dolor quidem placeat, quia eius reprehenderit repellat officiis ipsum sunt minus sed alias officia dolores recusandae.</p>
      <p  className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut dolorum quibusdam totam similique quas quidem? Atque, soluta eaque! Sapiente deleniti voluptate possimus exercitationem, suscipit expedita illo magnam iure reprehenderit deserunt!</p>
      <div className={styles.animate}>
        <Link href="/animate"><a className="btn">Checkout the animation process</a></Link>
      </div>
    </div>
  )
}
