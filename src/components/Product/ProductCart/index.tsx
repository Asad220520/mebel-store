import { CiHeart } from "react-icons/ci";
import { RiShoppingBasket2Line } from "react-icons/ri";

import "./index.scss";
// @ts-ignore
const ProductCart = ({ el }) => {
  return (
    <div id="productCart">
      <div className="productCart">
        <div className="icon">
          <CiHeart />
        </div>
        <img src={el.image} alt="" />
        <h1>{el.title}</h1>
        <p>{el.description}</p>
        <h3>{el.price}₽</h3>
        <div className="addBasket">
          <RiShoppingBasket2Line className="addBasket__icon" />
        </div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  );
};

export default ProductCart;
