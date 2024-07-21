import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="navbar bg-body-tertiary text-dark">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 fs-3 h1">
          <Link to={"/"}>Kitap Takip</Link>
        </span>
        <nav className="d-flex gap-2">
          <NavLink to={"/"}>Anasayfa</NavLink>
          <NavLink to={"/ürünler"}>Ürünler</NavLink>
          <NavLink to={"/ekstra"}>Ekstra</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
