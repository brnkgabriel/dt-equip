import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>DT-Equip</h1>
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/design"><a>Design</a></Link>
      <Link href="/develop"><a>Develop</a></Link>
      <Link href="/animate"><a>Animate</a></Link>
      <Link href="/about"><a>About</a></Link>
    </nav>
  );
}
 
export default Navbar;