import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h1>Aradığınız Sayfa bulunamadı</h1>
      <p>
        Böyle bir sayfa bulunamıyor.Ana sayfaya dönüp başka birşey
        arayabilirsiniz.
      </p>
      <Link to={"/"}>Anasayfaya dön</Link>
    </div>
  );
};

export default NotFoundPage;
