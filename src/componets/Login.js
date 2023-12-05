import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState(null);
  const [pass, setPass] = useState(null);

  const navigate = useNavigate();

  function checkAdmin() {
    console.log(user + " " + pass);
    if (
      (user === "Admin1" && pass === "Admin1Logged") ||
      (user === "Admin2" && pass === "Admin2Logged") ||
      (user === "Admin3" && pass === "Admin3Logged")
    ) {
      navigate("/Admin");
    } else {
      alert("incorrect password or username");
    }
  }
  /*steve was here*/
  return (
    <div>
      <div>
        <form name="form" onSubmit={checkAdmin} id="loginForm">
          <input
            placeholder="Enter Username"
            onChange={(e) => setUser(e.target.value)}
          ></input>
          <input
            placeholder="Enter Password"
            onChange={(e) => setPass(e.target.value)}
          ></input>
          <button>LOGIN</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
