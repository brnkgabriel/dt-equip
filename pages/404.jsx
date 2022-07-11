import Link from "next/link"
const NotFound = () => {
  return (
    <div className="not-found">
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