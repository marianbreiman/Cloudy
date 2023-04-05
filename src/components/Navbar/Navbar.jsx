import { CartWidget } from "../CartWidget/CartWidget";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";

export const Navbar = () => {
  return (
    <nav className="navbarContainer">
      <div className="navbar">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Logo_de_Tiendanube.svg/1620px-Logo_de_Tiendanube.svg.png"
            className="navbarLogo"
            alt="logo"
          />

        </a>
        <ul className="navLinksContainer">
          <li>
            <a href="/" className="navLinks">
              Categorias
            </a>
          </li>
          <li>
            <a href="/" className="navLinks">
              Productos
            </a>
          </li>
          <li>
            <a href="/" className="navLinks">
             Descuentos
            </a>
          </li>
          <li>
            <a href="/" className="navLinks">
              Contacto
            </a>
          </li>
        </ul>
        <div className="navbarOptionsContainer">
          <button className="btn">Sign in</button>
          <CartWidget />
          <HiOutlineBars3BottomRight className="navbarToggler faIcons" />
        </div>
      </div>
    </nav>
  );
};