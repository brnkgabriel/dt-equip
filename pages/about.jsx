
import Header from '../comps/Header'
import styles from '../styles/About.module.css'

const About = () => {
  const description = "Design, Develop & Animate"
  const name = "About - DTE"
  const url = "about"
  return (
    <div className={styles.container}>
      <Header name={name} description={description} url={url} />
      <h1>About</h1>
      <p>Get to know the team</p>
    </div>
  );
}
 
export default About;