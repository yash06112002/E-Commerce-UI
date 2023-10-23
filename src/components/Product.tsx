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
      <img src="src\assets\1.jpg" height={150} width={150} />

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
