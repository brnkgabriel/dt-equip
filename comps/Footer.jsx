import Link from "next/link"
const Footer = () => {
  return (
    <footer>
      <div>
        <a href="/sitemap.xml" className="btn">Sitemap</a>
      </div>
      <div className="copyright">
        <div className="symbol">©</div>
        <div className="txt">2022 DT-EQUIP. All Rights Reserved.</div>
      </div>
    </footer>
  );
}
 
export default Footer;