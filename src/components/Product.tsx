import { useState } from "react";
import { Product } from "../data";
import "../styles/Product.scss";

const Product = ({ item }: { item: Product }) => {
  const [wishlistChoice, setWishlistChoice] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const toggleWishlistChoice = () => {
    setWishlistChoice((prev) => !prev);
  };
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <div
      className="card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src="https://images.unsplash.com/photo-1697660116747-1d0cf61a0c2e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D"
        height={200}
        width={150}
      />

      <p>{item.title}</p>
      <div className="info">
        <p
          className="oldPrice"
          style={{ textDecoration: "line-through", color: "grey" }}
        >
          Rs. {Number(item.price) - 100 > 0 ? Number(item.price) - 100 : 50}
        </p>
        <p className="price">Rs. {Number(item.price)}</p>

        {wishlistChoice && (
          <button
            className="wishlistOn"
            onClick={() => {
              toggleWishlistChoice();
            }}
          >
            ❤
          </button>
        )}
        {!wishlistChoice && (
          <button
            className="wishlistOff"
            onClick={() => {
              toggleWishlistChoice();
            }}
          >
            ❤
          </button>
        )}
        {isHover && <button className="viewButton">View Product</button>}
      </div>
    </div>
  );
};

export default Product;
