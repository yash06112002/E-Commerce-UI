import { useEffect, useState } from "react";
import { categories, data } from "../data";
import Product from "./Product";
import "../styles/Products.scss";
// import { Link } from "react-router-dom";

const Products = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const category = searchParams.get("category");
  const price_limit = searchParams.get("price");

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const filterProducts = () => {
    let curr_data = data;

    if (category) {
      curr_data = curr_data.filter((item) => item.category === category);
    }
    if (price_limit) {
      curr_data = curr_data.filter(
        (item) => Number(item.price) <= Number(price_limit)
      );
    }
    console.log(curr_data, category, price_limit);
    setFilteredProducts([...curr_data]);
  };
  useEffect(() => {
    filterProducts();
  }, []);

  return (
    <div className="results">
      <div className="filters">
        <h3>Search Results</h3>
        <div>
          <p className="heading">CATEGORIES</p>
          {categories.map((category) => (
            <div style={{ display: "flex" }} key={category}>
              <a className="link" href={"/products?category=" + category}>
                {category}
              </a>
            </div>
          ))}
        </div>
        <div>
          <p className="heading">PRICE RANGE</p>

          <div style={{ display: "flex" }}>
            <a className="link" href={"/products?price=100"}>
              Less than 100
            </a>
          </div>
          <div style={{ display: "flex" }}>
            <a className="link" href={"/products?price=200"}>
              Less than 200
            </a>
          </div>
        </div>
      </div>
      <div className="products">
        {filteredProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
