import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../src/components/Header";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import ProductsPage from "./pages/ProductsPage";
import Footer from "./components/Footer";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/ürünler" element={<ProductsPage />} />
        <Route path="ürünler/ürün/:id" element={<DetailPage />} />
        <Route path="/ekstra" element={<Layout />}>
          <Route path="kategoriler" element={<h1>Kategoriler</h1>} />
          <Route path="kampanyalar" element={<h1>Kampanyalar</h1>} />
          <Route path="ayarlar" element={<h1>Ayarlar</h1>} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
