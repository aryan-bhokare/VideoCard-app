import React from 'react';
import { Link, NavLink } from 'react-router-dom';



function Navbar() {
  return (
    <nav className="py-5 mb-5 flex justify-between dark:text-black">
      <h1 className="font-bold text-xl">VideoCards</h1>
        <ul className="flex items-center gap-5 px-3 md:flex-row">   
        <li>
          <NavLink to="/buckets" activeClassName="active">
            Buckets
          </NavLink>
        </li>
        <li>
          <NavLink to="/history" activeClassName="active">
            History
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
