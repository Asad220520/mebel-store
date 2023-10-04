import { RiDeleteBinLine } from "react-icons/ri";
import "./index.scss";
import { data } from "../../Data";
const Basket = () => {
  return (
    <div id="basket">
      <div className="container">
        {data.map((el) => (
          <div className="basket" key={el.id}>
            <div className="basket__cart">
              <img src={el.image} alt={el.title} />
              <h1>{el.title}</h1>
            </div>
            <div className="basket__actions">
              <div className="basket__quantity">
                <button>-</button>
                <span>{el.quantity}</span>
                <button>+</button>
              </div>
              <button>
                <RiDeleteBinLine />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Basket;
