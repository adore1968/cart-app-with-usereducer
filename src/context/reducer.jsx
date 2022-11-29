const reducer = (state, action) => {
  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }

  if (action.type === "GET_CART") {
    return { ...state, cart: action.payload, loading: false };
  }

  if (action.type === "GET_TOTALS") {
    let { total, amount } = state.cart.reduce(
      (itemTotal, item) => {
        const { price, amount } = item;
        const priceTotal = price * amount;
        itemTotal.total += priceTotal;
        itemTotal.amount += amount;
        return itemTotal;
      },
      { total: 0, amount: 0 }
    );

    total = parseFloat(total.toFixed(2));

    return { ...state, total, amount };
  }

  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }

  if (action.type === "REMOVE_ITEM") {
    const newCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: newCart };
  }

  if (action.type === "INCREASE_AMOUNT") {
    const newCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    return { ...state, cart: newCart };
  }

  if (action.type === "DECREASE_AMOUNT") {
    const newCart = state.cart
      .map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      })
      .filter((item) => item.amount !== 0);
    return { ...state, cart: newCart };
  }
};

export default reducer;
