
import Header from '../comps/Header'
import styles from '../styles/About.module.css'

const About = () => {
  const description = "Migrate from concept to product through the design, develop & animate steps. On this platform you will learn graphics design, software development as well as 2D & 3D animation and wrap the knowledge in an application."
  const name = "About"
  const url = "about"
  return (
    <div className={styles.container}>
      <Header name={name} description={description} url={url} />
      <h1>About</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed culpa dolorem accusantium placeat illo cumque. Rerum dignissimos necessitatibus non impedit autem! Voluptate repudiandae doloremque distinctio asperiores eius, expedita debitis placeat.</p>
    </div>
  );
}
 
export default About;