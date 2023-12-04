import React from "react";
import Tickets from "./componets/Tickets";
import Admin from "./componets/Admin";
import Login from "./componets/Login";
import Navbar from "./componets/Navbar";
import {
  Routes,
  Route,
} from "react-router-dom";



function App() {

  return (
    <div>
        <div> <Navbar /> </div>
            <Routes>
                <Route
                    exact
                    path="/"
                    element={<Login />}
                />
                <Route
                    exact
                    path="/Admin"
                    element={<Admin />}
                />
                <Route
                    exact
                    path="/Tickets"
                    element={<Tickets />}
                />
            </Routes>
        
    </div>
);


}

export default App;
