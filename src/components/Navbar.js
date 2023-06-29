import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Navbar() {
  let productCount = useSelector((state) => state.addToCart.selectedProduct);
  return (
    <>
      <Link style={{ marginRight: "20px" }} to="/">
        Home
      </Link>
      <Link style={{ marginRight: "20px" }} to="/cart">
        Cart
      </Link>
      <span>Cart item: {productCount.length}</span>
    </>
  );
}

export default Navbar;
