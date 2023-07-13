import { Fragment, useState } from "react";

import Header from "./components/Layouts/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [isCartModalShow, setIsCartModalShwon] = useState(false);

  const cartModalShowHandler = () => {
    setIsCartModalShwon(true);
  };

  const cartModalHideHandler = () => {
    setIsCartModalShwon(false);
  };

  return (
    <Fragment>
      {isCartModalShow && <Cart onClose={cartModalHideHandler} />}
      <Header onModalShow={cartModalShowHandler} />
      <Meals />
    </Fragment>
  );
}

export default App;
