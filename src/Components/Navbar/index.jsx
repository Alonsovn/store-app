import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeStyle = "underline underline-offset-4";

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">Start</NavLink>
        </li>
        <li>
          <NavLink
            to="/item1"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Item 1
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/item2"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            item 2
          </NavLink>
        </li>
      </ul>

      <ul className="flex items-center gap-3">
        <li className="text-black/60">test@gmail.com</li>
        <li>
          <NavLink
            to="/item-a"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Item A
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/item-b"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            item B
          </NavLink>
        </li>
        <li> 🛒 0</li>
      </ul>
    </nav>
  );
};

export default Navbar;
