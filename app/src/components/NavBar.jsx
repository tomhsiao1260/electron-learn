import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/">
          <button className="btn btn-ghost normal-case text-xl">
            Electron App
          </button>
        </Link>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li tabIndex={0}></li>
        </ul>
        <div className="dropdown dropdown-end"></div>
      </div>
    </div>
  );
};
