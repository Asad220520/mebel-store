import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import { CiHeart, CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import delivery from "../../icons/delivery-icon.svg";
import phone from "../../icons/phone.svg";
import logo from "../../icons/LOGO.svg";
import kitchen from "../../icons/kitchen-icon.svg";
import bedroom from "../../icons/bedroom-icon.svg";
import livingroom from "../../icons/livingroom-icon.svg";
import closet from "../../icons/closet-icon.svg";
import office from "../../icons/office-icon.svg";
import childrensroom from "../../icons/childrensroom-icon.svg";
import etc from "../../icons/etc.svg";
const Header = () => {
  return (
    <div className="wrapper">
      <div id="header">
        <div className="container">
          <div className="header">
            <nav className="header__nav">
              <NavLink to="/">Главная</NavLink>
              <NavLink to="/">О нас</NavLink>
              <NavLink to="/">Контакты</NavLink>
            </nav>
            <div className="header__phone">
              <div className="header__link">
                <img src={phone} alt="" />
                <Link to={"tel:+996501597022"}>+996501597022</Link>
              </div>
              <div className="header__link">
                <img src={delivery} alt="" />
                <Link to={"/"}>Доставка</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="header-middle">
        <div className="container">
          <div className="header-middle">
            <div className="header-middle__icon">
              <RxHamburgerMenu className="iconburger" />
              <Link to={"/"}>
                <img src={logo} alt="" />
              </Link>
            </div>
            <div className="header-middle__search">
              <CiSearch className="search" />
              <input type="search" placeholder="Поиск" />
            </div>
            <div className="header-middle__bar">
              <CiHeart className="header-middle__icon" />

              <NavLink to={"/basket"}>
                <div className="header-middle__iconcart">
                  {/* {basket.length ? (
                    <sub className="subcart">{basket.length}</sub>
                  ) : null} */}
                  <CiShoppingCart className="header-middle__icon" />
                </div>
              </NavLink>
              <CiUser className="header-middle__icon" />
            </div>
          </div>
          <div className="header-middle__search2">
            <CiSearch className="search" />
            <input type="search" placeholder="Поиск" />
          </div>
        </div>
      </div>
      <div id="header-senior">
        <div className="container">
          <div className="header-senior">
            <NavLink to={"/"} className="header-senior__nav">
              <img src={kitchen} alt="" />
              <h1>Кухни</h1>
            </NavLink>
            <NavLink to={"/"} className="header-senior__nav">
              <img src={bedroom} alt="" />
              <h1>Спальни</h1>
            </NavLink>
            <NavLink to={"/"} className="header-senior__nav">
              <img src={livingroom} alt="" />
              <h1>Гостинные</h1>
            </NavLink>
            <NavLink to={"/"} className="header-senior__nav">
              <img src={closet} alt="" />
              <h1>Прихожие</h1>
            </NavLink>
            <NavLink to={"/"} className="header-senior__nav">
              <img src={office} alt="" />
              <h1>Офисная мебель</h1>
            </NavLink>
            <NavLink to={"/"} className="header-senior__nav">
              <img src={childrensroom} alt="" />
              <h1>Детская</h1>
            </NavLink>
            <NavLink to={"/"} className="header-senior__nav">
              <h1>Акция</h1>
            </NavLink>
            <NavLink to={"/"} className="header-senior__nav">
              <img src={etc} alt="" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
