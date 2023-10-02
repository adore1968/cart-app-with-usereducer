import React from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

function App() {
  return (
    <main>
      <header className="mb-12">
        <Navbar />
      </header>
      <section className="container mx-auto">
        <Cart />
      </section>
    </main>
  );
}

export default App;
