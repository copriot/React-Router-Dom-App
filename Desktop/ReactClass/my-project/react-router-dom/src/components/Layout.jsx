import React from "react";
import { NavLink, Outlet, useNavigate, Navigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  const user = {
    name: "Ahmet",
    type: "admin",
  };

  if (user.type !== "admin") {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="d-flex gap-5 p-4">
      <aside className="mt-2 d-flex flex-column bg-light p-3 rounded gap-3">
        <NavLink to={"/ekstra/kategoriler"}>Kategoriler</NavLink>
        <NavLink to={"/ekstra/kampanyalar"}>Kampanyalar</NavLink>
        <NavLink to={"/ekstra/ayarlar"}>Ayarlar</NavLink>
      </aside>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
