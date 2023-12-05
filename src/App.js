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
  const [comment, setComment] = useState("");
  const [currentAdmin, setCurrentadmin] = useState("");

  const fetchTickets = async () => {
    try {
      const response = await fetch(
        `https://api-generator.retool.com/NS5900/ticketApi`
      );

      const result = await response.json();
      setTickets(result);
      return result;
    } catch (err) {
      console.error(err);
    }
  };

  const makeTicket = async () => {
    try {
      const response = await fetch(
        `https://api-generator.retool.com/NS5900/ticketApi`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            isOpen: true,
            Subject: subject,
            Description: issue,
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
// curl -X PATCH -H 'Content-Type: application/json' -d '{"key":"value"}' https://api-generator.retool.com/kltl7H/ticketApi/1
  const updateTicket = async (id,comment) => {
    try {
      const response = await fetch(
        `https://api-generator.retool.com/NS5900/ticketApi/${id}`,
        {
          method: "UPDATE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            comments: comment,
          }),
        }
      );
      const result = await response.json();
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
        <Route exact path="/" element={<Login setCurrentadmin={setCurrentadmin}/>} />
        <Route 
          exact 
          path="/Admin" 
          element={
            <Admin 
              setTickets={setTickets}
              tickets={tickets}
              issue={issue}
              setIssue={setIssue}
              subject={subject}
              setSubject={setSubject}
              fetchTickets={fetchTickets}
              makeTicket={makeTicket} 
              comment={comment}
              setComment={setComment}
              />
            } 
          />
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
              fetchTickets={fetchTickets}
              makeTicket={makeTicket}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
