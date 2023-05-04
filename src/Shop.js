import Products from "./Products";
import Item from "./Item";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="shop">
      <div className="title">
        <h1>Tech Shop</h1>
      </div>
      <div className="products">
        {Products.map((product) => (
          <Item key={product.id} item={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
