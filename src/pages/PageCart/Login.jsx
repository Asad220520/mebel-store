// import { useAppDispatch } from "../hooks/hooks";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from "./Form";

const Login = () => {
  // const dispatch = useAppDispatch();
  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(console.log())
      .catch(console.error());
  };
  return (
    <div id="login">
      <div className="login">
        <Form title="sign-in" handleClick={handleLogin} />
      </div>
    </div>
  );
};

export default Login;
