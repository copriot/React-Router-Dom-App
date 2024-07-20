import {
  BrowserRouter as Saglayici,
  Routes as Yollar,
  Route as Yol,
} from "react-router-dom";
import api from "./utils/api";
import MainPage from "./pages/MainPage";
import BasketPage from "./pages/BasketPage";

function App() {
  return (
    <Saglayici>
      <Yollar>
        <Yol path="/" element={<MainPage />} />
        <Yol path="/sepet" element={<BasketPage />} />
      </Yollar>
    </Saglayici>
  );
}

export default App;
