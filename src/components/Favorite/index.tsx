import { useAppSelector } from "../../hooks/hooks";
import ProductCart from "../Product/ProductCart";
import "./index.scss";
const Favorite = () => {
  const { favorite } = useAppSelector((r) => r.favorite);
  console.log(favorite);

  return (
    <div id="favorite">
      <div className="container">
        <div className="favorite">
          {favorite.map((el) => (
            <ProductCart el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorite;
