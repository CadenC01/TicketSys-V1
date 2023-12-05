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
  const [isOpen, setisOpen] = useState(null);
  const [Id, setId] = useState("");

  const fetchTickets = async () => {
    try {
      const response = await fetch(
        `https://api-generator.retool.com/YS0Ke3/ticketApi`
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
        `https://api-generator.retool.com/YS0Ke3/ticketApi`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            isOpen: true,
            Subject: subject,
            Description: issue,
            comment: null
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
  const updateTicket = async () => {
    try {
      const response = await fetch(
        `https://api-generator.retool.com/YS0Ke3/ticketApi/${Id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Comments: comment,
            isOpen: isOpen,

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
              isOpen={isOpen}
              setisOpen={setisOpen}
              updateTicket={updateTicket}
              setId={setId}
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
