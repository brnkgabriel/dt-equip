
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"
import Header from '../comps/Header'
import { api } from "../api/config"
import Util from "./api/util"

export const getStaticProps = async () => {

  const res = await fetch(api)
  const text = await res.text()

  const sIdx = text.indexOf("([")
  const eIdx = text.indexOf("])")

  const str = text.substring(sIdx + 1, eIdx + 1)
  const util = new Util()
  let data = JSON.parse(str).map(str => util.str2Obj(str))

  return {
    props: { data }
  }
}

export default function Home({ data }) {
  const description = "Design, Develop & Animate"
  const name = "Home - DTE"
  const url = ""
  return (
    <div className="content">
      <div>
        <Header name={name} description={description} url={url} />
        <h1 className={styles.title}>Design, Develop & Animate</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, autem nam deserunt iste obcaecati dolor quidem placeat, quia eius reprehenderit repellat officiis ipsum sunt minus sed alias officia dolores recusandae.</p>
        <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut dolorum quibusdam totam similique quas quidem? Atque, soluta eaque! Sapiente deleniti voluptate possimus exercitationem, suscipit expedita illo magnam iure reprehenderit deserunt!</p>
        <div className={styles.animate}>
          <Link href="/animate"><a className="btn">Checkout the animation process</a></Link>
        </div>
      </div>
    </div>
  )
}
