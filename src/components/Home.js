import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getProductforCart } from "../services/actions/Action";
function Home() {
  let dispatch = useDispatch();
  const productData = useSelector((state) => state.addToCart.allProduct);
  console.log(productData);
  const [products, setProducts] = useState();
  useEffect(() => {
    dispatch(getProductforCart());
  }, []);
  return (
    <div>
      <h1>Redux Store</h1>
      {productData !== undefined
        ? productData.map((product) => (
            <div key={product.id}>
              <img
                src={product.image}
                alt={product.image}
                style={{ width: "50px", height: "50px" }}
              />
              <span style={{ marginRight: "20px" }}>{product.name}</span>
              <span style={{ marginRight: "20px" }}>{product.price}</span>
              <button onClick={() => dispatch(addToCart(product))}>
                Add to cart
              </button>
            </div>
          ))
        : ""}
    </div>
  );
}

export default Home;
