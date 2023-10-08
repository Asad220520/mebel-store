import { NavLink } from "react-router-dom";
import "./index.scss";
import SignUp from "../PageCart/SignUp";
const AuthRegistr = () => {
  return (
    <div id="authRegistr">
      <div className="container">
        <div className="authRegistr">
          <SignUp />
          <NavLink to={"/auth-login"}>login</NavLink>
        </div>
      </div>
    </div>
  );
};

export default AuthRegistr;
