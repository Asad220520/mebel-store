import { useParams } from "react-router-dom";
import { data } from "../../Data/index";
import "./index.scss";
import { addToFavorite } from "../../store/Reducers/favoriteSlice";
import { GoHeartFill } from "react-icons/go";
import { AiOutlineHeart } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
const DetailCart = () => {
  const dispatch = useAppDispatch();
  const { favorite } = useAppSelector((r) => r.favorite);
  const { idname } = useParams<{ idname: string }>();
  const el = data.find((find) => find.id === (idname ? +idname : undefined));

  if (idname === undefined || el === undefined) {
    return <div>Product not found</div>;
  }
  let fav = favorite.some((fav) => fav.id === el.id);
  return (
    <div id="detailCart">
      <div className="container">
        <h1>Главная / Гостинные / Мягкая мебель / Диваны</h1>
        <div className="detailCart">
          <div className="detailCart__img">
            <img src={el.image} alt="" />
          </div>
          <div className="detailCart__text">
            <h1>{el.title}</h1>
            <div className="detailCart__text-price">
              <span>{el.price}₽</span>
              <button>Купить</button>
              <div>
                {fav ? (
                  <div
                    onClick={() => dispatch(addToFavorite(el))}
                    className="icon"
                  >
                    <GoHeartFill style={{ color: "red" }} />
                  </div>
                ) : (
                  <div
                    onClick={() => dispatch(addToFavorite(el))}
                    className="icon"
                  >
                    <AiOutlineHeart />
                  </div>
                )}
                Добавить в желаемое
              </div>
            </div>
            <h4>Описание</h4>
            <p>{el.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCart;
