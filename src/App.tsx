import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Basket from "./components/Basket";
import Favorite from "./components/Favorite";
import DetailCart from "./pages/DetailCart";
import AuthRegistr from "./pages/auth-registr";
import AuthLogin from "./pages/auth-login";
import "./firebase";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/auth" element={<AuthRegistr />} />
          <Route path="/auth-login" element={<AuthLogin />} />
          <Route path="/detailCart/:idname" element={<DetailCart />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
