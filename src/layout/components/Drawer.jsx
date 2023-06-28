import { NavLink } from "react-router-dom";
import "./Drawer.css";

function Drawer() {
  return (
    <div className="drawer-container">
      <nav>
        <ul>
          <li>
            <NavLink>
              <img src="/icon-zen.svg" alt="icon-zen" />
            </NavLink>
          </li>
          <li>
            <NavLink>
              <img src="/icon-swim.svg" alt="icon-swim" />
            </NavLink>
          </li>
          <li>
            <NavLink>
              <img src="/icon-ride.svg" alt="icon-bike" />
            </NavLink>
          </li>
          <li>
            <NavLink>
              <img src="/icon-fit.svg" alt="icon-fit" />
            </NavLink>
          </li>
        </ul>
      </nav>
      <p>Copyright, SportSee 2020</p>
    </div>
  );
}

export default Drawer;
