//context yapılarına abone olmamızı sağlayan hook
import React, { useContext } from "react";
//abone olunan context bileşeni
import { ProductContext } from "../context/ProductContext";
const MainPage = () => {
  //ürünler contextine abone ol
  const context = useContext(ProductContext);
  console.log(context);
  return <div>MainPage</div>;
};

export default MainPage;
