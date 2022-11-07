import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Cart } from "../Context";

const Login = () => {
  const { getItems, emaillog, setEmail, passwordlog, setPassword, setIsLogin } =
    useContext(Cart);
  // const [emaillog, setEmail] = useState("");
  // const [passwordlog, setPassword] = useState("");
  // const [homecomp, setHomecomp] = useState(false);

  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log("getItems", getItems);
    if (!emaillog || !passwordlog) {
      alert("please fill all fields");
    }
    if (emaillog && passwordlog) {
      getItems.map((elm) => {
        if (emaillog === elm.email && passwordlog === elm.pwd) {
          navigate("/home/");
          // navigate(0);
          setEmail("");
          setPassword("");
          setIsLogin(true);
        } else {
          setError(true);
        }
      });
    }

    // if (!emaillog && !passwordlog) {
    //   alert("please fill all fields");
    // } else if (emaillog === gotemail && passwordlog === gotpwd) {
    //   console.log("successfull login");
    //   navigate("/home");
    // } else {
    //   alert("Incorrect email or passwxord pls check");
    // }
  };
  return (
    <>
      {/* <Header /> */}
      {/* {homecomp === false ? ( */}
      <div className="col-md-4 offset-md-4 bgblack form">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={emaillog}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={passwordlog}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="text-center">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>

      {error === true && (
        <div
          style={{
            color: "red",
            fontWeight: "bolder",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          {" "}
          Check email or pwd it is incorrect
        </div>
      )}
      {/* ) : (
        <Home />
      )} */}

      <p className="text-center mt-3 mb-3">
        <b>
          If you are not registered please &nbsp;&nbsp;
          <Link to="/register">Register</Link>&nbsp;&nbsp; here
        </b>
      </p>
    </>
  );
};

export default Login;
