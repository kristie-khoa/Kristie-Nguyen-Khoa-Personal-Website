import { Link } from "react-router-dom";
import "../../StyleSheets/Logo.css";
function Logo({ blur }) {
  return (
    <Link
      to="/Kristie-Nguyen-Khoa-Personal-Website/"
      className={`header-logo ${blur ? "blur-logo" : ""}`}
    >
      <div className="logo">knk.</div>
      <div className="slogan">KRISTIE NGUYEN-KHOA</div>
    </Link>
  );
}

export default Logo;
