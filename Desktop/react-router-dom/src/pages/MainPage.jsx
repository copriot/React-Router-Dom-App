import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <h1>Hoşgeldiniz</h1>
      <img
        src="public/th.jpeg"
        style={{ maxHeight: "180px" }}
        className="w-100 img-fluid d-flex my-4"
      />
      <p>
        <Link to={"/ürünler"}>Ürünler sayfasında</Link>Yeni çıkan bütün
        kitaplara ulaşabilirsiniz...
      </p>
    </div>
  );
};

export default MainPage;
