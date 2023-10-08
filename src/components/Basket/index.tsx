import { RiDeleteBinLine } from "react-icons/ri";
import "./index.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  decreaseQuantity,
  detetToCart,
  increaseQuantity,
} from "../../store/Reducers/basketSlice";
const Basket = () => {
  const { basket } = useAppSelector((r) => r.basket);
  const dispatch = useAppDispatch();
  console.log(basket);
  const Quantity = basket.reduce((total, item) => total + item.quantity, 0);
  const Price = basket.reduce(
    (total, item) => total + item.quantity * item.item.price,
    0
  );

  return (
    <div id="basket">
      <h1>Quantity: {Quantity}</h1>
      <div className="container">
        {basket.map((el) => (
          <div className="basket" key={el.item.id}>
            <div className="basket__cart">
              <img src={el.item.image} alt={el.item.title} />
              <h1>{el.item.title}</h1>
            </div>
            <div className="basket__actions">
              <div className="basket__quantity">
                <button onClick={() => dispatch(decreaseQuantity(el.item))}>
                  -
                </button>
                <span>{el.quantity}</span>
                <button onClick={() => dispatch(increaseQuantity(el.item))}>
                  +
                </button>
              </div>
              <button onClick={() => dispatch(detetToCart(el.item))}>
                <RiDeleteBinLine />
              </button>
            </div>
          </div>
        ))}
        <div
          style={{ display: basket.length ? "flex" : "none" }}
          className="quantity"
        >
          <h2>
            Итоговая стоимость: <span>{Price}₽</span>
          </h2>
          <button>Оформить заказ</button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
