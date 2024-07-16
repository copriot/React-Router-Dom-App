import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 bg-body-tertiary text-black mx-2 rounded">
      <p>&copy;2024 Company, Inc </p>
      <ul>
        <li>
          <Link to={"/"}>Anasayfa</Link>
        </li>
        <li>
          <a href="#">Hakkımzda</a>
        </li>
        <li>
          <a href="#">SSS</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
