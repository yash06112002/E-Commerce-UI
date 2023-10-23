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
            <img className="img" src="src\assets\1.jpg" />
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
