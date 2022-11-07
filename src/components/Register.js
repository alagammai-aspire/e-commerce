import React, { useState, useEffect } from "react";
// import Header from "./Header";
import { Link } from "react-router-dom";

const getLocalItems = () => {
  let localval = JSON.parse(localStorage.getItem("Items"));
  if (localval) {
    return JSON.parse(localStorage.getItem("Items"));
  } else {
    return [];
  }
};

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [storedata, setStoredata] = useState(getLocalItems());

  // useEffect(() => {
  //   const localval = JSON.parse(localStorage.getItem("Items"));
  //   if (localval) setStoredata(localval);
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name && !email && !password) {
      alert("please fill all fields");
    }
    const myobj = {
      email: email,
      pwd: password,
    };
    setStoredata([...storedata, myobj]);

    console.log(storedata);
    setEmail("");
    setName("");
    setPassword("");
  };

  useEffect(() => {
    localStorage.setItem("Items", JSON.stringify(storedata));
  }, [storedata]);

  return (
    <>
      {/* <Header /> */}
      <div className="col-md-4 offset-md-4 bggreen form regform">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="text-center">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
      <p className="text-center mt-3 mb-3">
        <b>
          If you are already registered please&nbsp;&nbsp;
          <Link to="/login">Login</Link>&nbsp;&nbsp; here
        </b>
      </p>
    </>
  );
};

export default Register;
