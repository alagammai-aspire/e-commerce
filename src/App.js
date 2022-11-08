import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Register from "./components/Register";
import "font-awesome/css/font-awesome.min.css";
import PrivateRoutes from "./utils/PrivateRoutes";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/home" element={<Home />} exact /> */}
          {/* <Route path="/cart" element={<Cart />} exact /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Login />} />

          <Route
            exact
            path="/home"
            element={
              // <PrivateRoutes>
              <Home />
              // </PrivateRoutes>
            }
          />
          <Route
            exact
            path="/cart"
            element={
              // <PrivateRoutes>
              <Cart />
              // {/* </PrivateRoutes> */}
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
