import { Link } from "react-router-dom";
import { Product } from "../data";
import "../styles/Trends.scss";

const Trends = ({
  trendingData,
  popularData,
}: {
  trendingData: Product[];
  popularData: Product[];
}) => {
  return (
    <div className="trends">
      <p className="sec">Latest Trends</p>
      <div className="trend">
        {trendingData.map((product) => (
          <div className="product" key={product.id}>
            <img
              className="img"
              src="https://images.unsplash.com/photo-1697660116747-1d0cf61a0c2e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D"
            />
            <Link
              className="link"
              to={"/products?category=" + product.category}
            >
              {product.title}
            </Link>
          </div>
        ))}
      </div>
      <p className="sec">Popular Suggestions</p>
      <div className="suggestions">
        {popularData.map((product) => (
          <div key={product.id}>
            <Link
              className="link"
              to={"/products?category=" + product.category}
            >
              {product.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trends;
