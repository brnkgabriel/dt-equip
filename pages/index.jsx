
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"
import Header from '../comps/Header'

export default function Home() {
  const description = "Migrate from concept to product through the design, develop & animate steps. On this platform you will learn graphics design, software development as well as 2D & 3D animation and wrap the knowledge in an application."
  const name = "Home"
  const url = ""
  return (
    <div>
      <Header name={name} description={description} url={url} />
      <h1  className={styles.title}>homepage</h1>
      <p  className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, autem nam deserunt iste obcaecati dolor quidem placeat, quia eius reprehenderit repellat officiis ipsum sunt minus sed alias officia dolores recusandae.</p>
      <p  className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut dolorum quibusdam totam similique quas quidem? Atque, soluta eaque! Sapiente deleniti voluptate possimus exercitationem, suscipit expedita illo magnam iure reprehenderit deserunt!</p>
      <div className={styles.animate}>
        <Link href="/animate"><a className="btn">Checkout the animation process</a></Link>
      </div>
    </div>
  )
}
