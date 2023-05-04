import { useContext } from "react";
import { ShopContext } from "./ShopContext";

const Item = ({ item }) => {
  const { cartItems, addToCart, deleteFromCart } = useContext(ShopContext);
  const cartItemAmount = cartItems[item.id];
  return (
    <div className="item">
      <img src={item.productImg} alt="" />
      <div className="description">
        <p>
          <b> {item.productName} </b>
        </p>
        <p>${item.price}</p>
      </div>
      <button className="addcart" onClick={() => addToCart(item.id)}>
        Add to Cart
        {cartItemAmount > 0 && <> (+{cartItemAmount})</>}
      </button>
    </div>
  );
};

export default Item;
