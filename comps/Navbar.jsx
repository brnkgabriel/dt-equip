import Link from "next/link";
import Image from "next/image"

const Navbar = () => {
  return (
    <nav className="content">
      <div className="logo">
        <Link href="/"><a><Image width={105} height={20} src="/dt-equip-text-logo.png" alt="" /></a></Link>
      </div>
      <div className="links">
        <Link href="/"><a>Home</a></Link>
        <Link href="/design"><a>Design</a></Link>
        <Link href="/develop"><a>Develop</a></Link>
        <Link href="/animate"><a>Animate</a></Link>
        <Link href="/about"><a>About</a></Link>
      </div>
    </nav>
  );
}

export default Navbar;