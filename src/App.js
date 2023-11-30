import React from "react";
import Tickets from "./componets/Tickets";
import Admin from "./componets/Admin";
import Login from "./componets/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {

  return (
    <>
        <Router>
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
        </Router>
    </>
);


}

export default App;
