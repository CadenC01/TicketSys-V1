import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [user, setUser] = useState(null);
    const [pass, setPass] = useState(null);
    
    const navigate = useNavigate();



    function checkAdmin(){ 
        console.log(user + " " + pass);
        if (user === "Admin" && pass === "1234") {
             navigate("/Admin");
         }else {
            console.log("ERROR")
         }
         
    }
    return (
        <div>
            <p>Login</p>
            <div>
                <form name="form" onSubmit={checkAdmin}>
                    <input id="user" placeholder="Enter Username" onChange={(e) => setUser(e.target.value)}></input>
                    <input placeholder="Enter Password" onChange={(e) => setPass(e.target.value)}></input>
                    <button>LOGIN</button>
                </form>
            </div>
        </div>

    );
};

export default Login;