import { Fragment } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import Card from "./components/UI/Card";

function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
