import React from "react";
import c from "./nav.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={c.nav}>
      <div className={c.item}>
        <NavLink to="/content" activeClassName={c.active}>
          Организация
        </NavLink>
      </div>
      <div className={c.item}>
        <NavLink to="/menu" activeClassName={c.active}>
          Меню
        </NavLink>
      </div>
      <div className={c.item}>
        <NavLink to="/chat" activeClassName={c.active}>
          Чат
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
