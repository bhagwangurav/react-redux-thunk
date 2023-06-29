import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../services/actions/Action";
function Cart() {
  let selectedProduct = useSelector((state) => state.addToCart.selectedProduct);
  let dispatch = useDispatch();
  return (
    <>
      <h1>Cart</h1>
      {selectedProduct.map((product) => (
        <div key={product.id}>
          <img
            src={product.image}
            alt={product.image}
            style={{ width: "50px", height: "50px" }}
          />
          <span style={{ marginRight: "20px" }}>{product.name}</span>
          <span style={{ marginRight: "20px" }}>{product.price}</span>
          <button onClick={() => dispatch(removeFromCart(product.id))}>
            Remove from cart
          </button>
        </div>
      ))}
    </>
  );
}

export default Cart;
