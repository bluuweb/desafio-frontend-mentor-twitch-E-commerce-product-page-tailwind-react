import IndexHeader from "@/components/header/IndexHeader";
import IndexProduct from "./components/product/IndexProduct";

import CartProvider from "./context/CartContext";

const App = () => {
  return (
    <CartProvider>
      <IndexHeader />
      <IndexProduct />
    </CartProvider>
  );
};

export default App;
