import React, { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const AppContext = createContext();

const url = "https://course-api.com/react-useReducer-cart-project";

export function AppContextProvider({ children }) {
  const initalState = {
    loading: false,
    cart: [],
    total: 0,
    amount: 0,
  };

  const [state, dispatch] = useReducer(reducer, initalState);

  const fetchCart = async () => {
    dispatch({ type: "LOADING" });
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: "GET_CART", payload: data });
  };

  useEffect(() => {
    fetchCart();
  }, []);

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const increaseAmount = (id) => {
    dispatch({ type: "INCREASE_AMOUNT", payload: id });
  };

  const decreaseAmount = (id) => {
    dispatch({ type: "DECREASE_AMOUNT", payload: id });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increaseAmount,
        decreaseAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};
