import { Link, useNavigate } from "react-router-dom";
import Logo from "../images/express-resume-high-resolution-logo.png"

function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="p-3 font-medium text-lg bg-[#f7d4f298] justify-around items-center flex flex-row">
        <div>
          <Link to={"/"}>
            
            <img src={Logo} alt="" className="w-[70px]"/>
          </Link>
        </div>
        <div>
          <ul className="flex flex-row space-x-12 mt-2">
          <button onClick={() => navigate("/resume")}>Resume Templates</button>
          <button onClick={() => navigate("/CV")}>CV Templates</button>
          <Link to='/myresume' className="nav-link active me-4" style={{textDecoration:'none',}} >My Resume</Link>
            <li>Contact Us</li>
            
            <button onClick={() => navigate("/Signin")}>Sign in</button>
          </ul>
        </div>
       
      </div>
      
      
    </div>
  );
}
export default Navbar;
