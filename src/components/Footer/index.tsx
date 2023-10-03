import { Link } from "react-router-dom";
import logo from "../../icons/LOGO.svg";
import "./index.scss";
import { CiInstagram, CiMail } from "react-icons/ci";
import { SlPhone } from "react-icons/sl";
const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <h1>НАВИГАЦИЯ</h1>
        <div className="footer">
          <nav className="nav">
            <div className="nav__block">
              <Link to={"/"}>Кухни</Link>
              <Link to={"/"}>Спальни</Link>
              <Link to={"/"}>Гостинные</Link>
            </div>
            <div className="nav__block">
              <Link to={"/"}>Прихожие</Link>
              <Link to={"/"}>Офисная мебель</Link>
              <Link to={"/"}>Детская</Link>
            </div>
            <div className="nav__block">
              <Link to={"/"}>Шкафы</Link>
              <Link to={"/"}>Матрасы</Link>
              <Link to={"/"}>Мягкая мебель</Link>
            </div>
          </nav>
          <div className="footer__img">
            <img src={logo} alt="" />
            <Link to={"/"}>
              г. Анапа, Анапское шоссе, <br /> 30 Ж/К Черное море
            </Link>
          </div>
        </div>
        <div className="footer-middle">
          <div className="footer-middle__action">
            <Link to={"/"}>Акция</Link>
            <Link to={"/"}>Новинки</Link>
          </div>
          <div className="footer-middle__tel">
            <div>
              <SlPhone />
              <Link to={"/"}>8 (964) 89 99 119</Link>
            </div>
            <div>
              <CiInstagram />
              <Link to={"/"}>INSTAGRAM</Link>
            </div>
            <div>
              <CiMail />
              <Link to={"/"}>mebel_loft_anapa@mail.ru</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
