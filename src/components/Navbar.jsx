import { useGlobalContext } from "../context/AppContext";

function Navbar() {
  const { amount } = useGlobalContext();

  return (
    <nav className="bg-gray-800 flex justify-between py-5 px-12 items-center">
      <h1 className="text-xl sm:text-2xl font-semibold">UseReducer</h1>
      <ul>
        <li className="text-lg sm:text-xl text-gray-200">
          <p className="flex gap-2 items-center">
            Amount:
            <span className="text-green-500">{amount}</span>
          </p>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
