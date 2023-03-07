import { Logo, Luna, Sol } from "./Icons";
import './Navbar.css'

const Navbar = () => {

  return (
    <nav>
      <Logo />
      <div className="switch">
        <Sol />
        <label>
          <input type="checkbox" className="check-switch" hidden/>
          <span className="slider"></span>
        </label>
        <Luna />
      </div>
    </nav>
  )
}

export default Navbar;