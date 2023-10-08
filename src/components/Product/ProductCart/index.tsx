import { CiHeart } from "react-icons/ci";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { GoHeartFill } from "react-icons/go";
import { AiOutlineHeart } from "react-icons/ai";
import "./index.scss";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { addToBasket } from "../../../store/Reducers/basketSlice";
import { Itype } from "./../../../types";
import { useNavigate } from "react-router-dom";
import { addToFavorite } from "../../../store/Reducers/favoriteSlice";
interface IProductCart {
  el: Itype;
}
const ProductCart: React.FC<IProductCart> = ({ el }) => {
  const { basket } = useAppSelector((r) => r.basket);
  const { favorite } = useAppSelector((r) => r.favorite);
  let bask = basket.some((some) => some.item.id === el.id);
  let fav = favorite.some((fav) => fav.id === el.id);
  const dispatch = useAppDispatch();
  const nav = useNavigate();

  return (
    <div id="productCart">
      <div className="productCart">
        {fav ? (
          <div onClick={() => dispatch(addToFavorite(el))} className="icon">
            <GoHeartFill style={{ color: "red" }} />
          </div>
        ) : (
          <div onClick={() => dispatch(addToFavorite(el))} className="icon">
            <AiOutlineHeart />
          </div>
        )}
        <div>
          <img
            onClick={() => nav(`/detailCart/${el.id}`)}
            src={el.image}
            alt=""
          />
        </div>
        <h1>{el.title}</h1>
        <p>{el.description}</p>
        <h3>{el.price}₽</h3>
        <div className="addBasket">
          <RiShoppingBasket2Line className="addBasket__icon" />
        </div>
        {bask ? (
          <button onClick={() => nav("/basket")}>Добавлено</button>
        ) : (
          <button onClick={() => dispatch(addToBasket(el))}>
            Добавить в корзину
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCart;
