import { ShopContext } from "./ShopContext";
import { useContext } from "react";

const CartItems = ({ item }) => {
  const { cartItems, addToCart, deleteFromCart, updateCart } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={item.productImg} alt="" />
      <div className="description">
        <p>{item.productName}</p>
        <p>${item.price}</p>
        <div className="countHandler">
          <button onClick={() => addToCart(item.id)}>+</button>
          <input
            value={cartItems[item.id]}
            onChange={(e) => updateCart(Number(e.target.value), item.id)}
          />
          <button onClick={() => deleteFromCart(item.id)}>-</button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
