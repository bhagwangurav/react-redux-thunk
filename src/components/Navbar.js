import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Navbar() {
  let productCount = useSelector((state) => state.addToCart.length);
  return (
    <>
      <Link style={{ marginRight: "20px" }} to="/">
        Home
      </Link>
      <Link style={{ marginRight: "20px" }} to="/cart">
        Cart
      </Link>
      <span>Cart item: {productCount}</span>
    </>
  );
}

export default Navbar;
