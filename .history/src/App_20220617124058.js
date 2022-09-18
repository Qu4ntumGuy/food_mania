import { Fragment, useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

function App(props) {
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
      <Header onClick={showCart} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
