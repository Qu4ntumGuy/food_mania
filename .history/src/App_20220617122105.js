import { Fragment, useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCart = () => {
    setCartIsShown(true);
  };

  const hideCart = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      { cartIsShown && <Cart />}
      <Header onShowCart={showCart} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
