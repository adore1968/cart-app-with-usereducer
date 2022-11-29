import React from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

function App() {
  return (
    <div>
      <section>
        <header>
          <Navbar />
        </header>
        <Cart />
      </section>
    </div>
  );
}

export default App;
