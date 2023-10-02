import { useGlobalContext } from "../context/AppContext";
import Item from "./Item";
import Loading from "./Loading";

function Cart() {
  const { cart, loading, total, clearCart, fetchCart } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (cart.length < 1) {
    return (
      <div className="text-center">
        <h1
          className="mb-5 text-3xl sm:text-4xl
font-bold"
        >
          The cart is empty
        </h1>
        <button
          className="text-lg sm:text-xl border border-red-600 py-2 px-4 rounded hover:bg-red-500 transition-colors ease-in inline-block uppercase"
          onClick={() => fetchCart()}
        >
          Refresh?
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-center text-3xl sm:text-4xl font-bold">Your Bag</h2>
      <div className="my-5 flex flex-col gap-5">
        {cart.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </div>
      <div className="flex justify-between items-center pt-5 border-t">
        <p className="text-xl sm:text-2xl font-medium">Total</p>
        <p className="text-lg sm:text-xl text-gray-200">${total}</p>
      </div>
      <div className="text-center mt-5">
        <button
          onClick={() => clearCart()}
          className="uppercase text-lg sm:text-xl border border-red-600 py-2 px-4 rounded hover:bg-red-500 transition-colors ease-in inline-block"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
