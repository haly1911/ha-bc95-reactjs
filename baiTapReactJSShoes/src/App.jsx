import { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import shoesData from "./data.json";
import ProductDetail from "./components/ProductDetail";
import Footer from "./components/Footer";

function App() {
  const [productDetail, setProductDetail] = useState(null);
  const handleOpenPrdDetail = (shoes) => {
    setProductDetail(shoes);
  };
  const handleClosePrdDetail = () => {
    setProductDetail(null);
  };
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <ProductList data={shoesData} handleOpenPrdDetail={handleOpenPrdDetail} />
      {productDetail && <ProductDetail key={productDetail.id} shoes={productDetail} handleClosePrdDetail={handleClosePrdDetail} />}
      <Footer />
    </div>
  );
}

export default App;
