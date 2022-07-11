import Link from "next/link";
import Image from "next/image"

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/"><a><Image width={102} height={20} src="/dt-equip.svg" alt="" /></a></Link>
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