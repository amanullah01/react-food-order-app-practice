import { useState } from "react";

import Header from "./components/Layouts/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [isCartModalShow, setIsCartModalShwon] = useState(false);

  const cartModalShowHandler = () => {
    setIsCartModalShwon(true);
  };

  const cartModalHideHandler = () => {
    setIsCartModalShwon(false);
  };

  return (
    <CartProvider>
      {isCartModalShow && <Cart onClose={cartModalHideHandler} />}
      <Header onModalShow={cartModalShowHandler} />
      <Meals />
    </CartProvider>
  );
}

export default App;
