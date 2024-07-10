export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state, item) => {
  //calculate the items price

  state.itemsPrice = addDecimals(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0),
  );

  //save the cart to localStorage
  localStorage.setItem("cart", JSON.stringify(state));
};
