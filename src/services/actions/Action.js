export const addToCart = (data) => {
  return {
    type: "ADD_TO_CART",
    payload: data
  };
};

export const removeFromCart = (id) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: id
  };
};

export const getProductforCart = () => {
  return async (dispatch, getState) => {
    const fetchData = await fetch("https://fakestoreapi.com/products");
    const data = await fetchData.json();
    dispatch({
      type: "SET_PRODUCT",
      payload: data
    });
  };
};
