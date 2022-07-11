import Link from "next/link"
import { useEffect } from "react"
import Header from "../comps/Header"
import { useRouter } from "next/router"

const NotFound = () => {
  const description = "Migrate from concept to product through the design, develop & animate steps. On this platform you will learn graphics design, software development as well as 2D & 3D animation and wrap the knowledge in an application."
  const name = "Not Found"
  const url = ""
  const router = useRouter()

  useEffect(() => {

    setTimeout(() => {
      router.push("/")
    }, 3000);
  }, [])

  return (
    <div className="not-found">
      <Header name={name} description={description} url={url} />
      <h1>Oooops...</h1>
      <h2>That page cannot be found</h2>
      <div className="back">
        <span>Go back to the</span>
        <Link href="/"><a>Homepage</a></Link>
      </div>
    </div>
  );
}
 
export default NotFound;