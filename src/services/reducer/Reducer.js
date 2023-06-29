import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
const initialState = {
  allProduct: [],
  selectedProduct: []
};
const addToCart = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        selectedProduct: [...state.selectedProduct, action.payload]
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        selectedProduct: state.selectedProduct.filter(
          (item) => item.id !== action.payload
        )
      };
    case "SET_PRODUCT":
      return {
        ...state,
        allProduct: action.payload
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  addToCart
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
