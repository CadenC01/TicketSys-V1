import React from "react";
import Tickets from "./componets/Tickets";
import Admin from "./componets/Admin";
import Login from "./componets/Login";
import Navbar from "./componets/Navbar";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [subject, setSubject] = useState("");
  const [issue, setIssue] = useState("");
  const [tickets, setTickets] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        `https://api-generator.retool.com/87f0k2/ticketData`
      );

      const result = await response.json();
      setTickets(result);
      console.log(tickets);
      return result;
    } catch (err) {
      console.error(err);
    }
  };

  const makePost = async () => {
    try {
      const response = await fetch(
        `https://api-generator.retool.com/87f0k2/ticketData`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            isOpen: true,
            subject: subject,
            description: issue,
          }),
        }
      );
      const result = await response.json();
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div>
        {" "}
        <Navbar />{" "}
      </div>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/Admin" element={<Admin />} />
        <Route
          exact
          path="/Tickets"
          element={
            <Tickets
              setTickets={setTickets}
              tickets={tickets}
              issue={issue}
              setIssue={setIssue}
              subject={subject}
              setSubject={setSubject}
              makePost={makePost}
              fetchPosts={fetchPosts}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
