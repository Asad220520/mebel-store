import { data } from "../../Data";
import ProductCart from "./ProductCart";
import "./index.scss";
const Product = () => {
  return (
    <div id="product">
      <div className="container">
        <h1>Хиты продаж</h1>
        <div className="product">
          {data.map((el) => (
            <ProductCart el={el} key={el.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
