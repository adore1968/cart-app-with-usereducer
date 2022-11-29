import React from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="min-h-screen bg-gray-800">
      <header>
        <Navbar />
      </header>
      <section className="px-5 sm:px-8 pb-5 sm:pb-8 pt-16 flex justify-center">
        <Cart />
      </section>
    </div>
  );
}

export default App;
