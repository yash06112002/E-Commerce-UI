import { useState } from "react";
import { Product } from "../data";

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
      style={{
        height: "270px",
        width: "150px",
        gap: "10px",
        padding: "10px",
        position: "relative",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src="src\assets\1.jpg" height={150} width={150} />

      <p>{item.title}</p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "25px",
          // gap: "5px",
          justifyContent: "space-around",
        }}
      >
        {/* <p style={{ textDecoration: "line-through", color: "grey" }}>
          Rs. {Number(item.price) - 100 > 0 ? Number(item.price) - 100 : 50}
        </p> */}
        <p>Rs. {Number(item.price)}</p>

        {wishlistChoice && (
          <p
            style={{
              color: "red",
              fontSize: "24px",
            }}
            onClick={() => {
              toggleWishlistChoice();
            }}
          >
            ❤
          </p>
        )}
        {!wishlistChoice && (
          <p
            onClick={() => {
              toggleWishlistChoice();
            }}
          >
            ❤
          </p>
        )}
        {isHover && (
          <p
            style={{
              position: "absolute",
              marginTop: "20px",
              bottom: "5px",
              backgroundColor: "rgb(0, 0, 255, 0.5)",
              color: "white",
              height: "30px",
              lineHeight: "30px",
              width: "150px",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            View Product
          </p>
        )}
      </div>
    </div>
  );
};

export default Product;
