import { FaSignInAlt, FaUser } from "react-icons/fa";
import { CgGhostCharacter } from "react-icons/cg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <h1>Harry Potter App</h1>
        </Link>
      </div>
      <ul>
        <li className="flex space-x-42">
          <Link to="/characters">
            <CgGhostCharacter />
            Characters
          </Link>
        </li>
        <li>
          <Link to="/login">
            <FaSignInAlt />
            Login
          </Link>
        </li>
        <li>
          <Link to={"/register"}>
            <FaUser />
            Register
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
