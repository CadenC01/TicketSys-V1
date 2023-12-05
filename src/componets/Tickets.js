import React from "react";
import { useState, useEffect } from "react";

const Tickets = ({
  setTickets,
  tickets,
  issue,
  setIssue,
  subject,
  setSubject,
  makePost,
  fetchPosts,
}) => {
  function createTicket(e) {
    e.preventDefault();
    makePost();
    fetchPosts();
    alert("form submitted");
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <div id="tform">
        <form>
          <input
            id="tsubject"
            name="tsubject"
            placeholder="Enter subject"
            onChange={(e) => setSubject(e.target.value)}
          ></input>
          <input
            id="tissue"
            name="tissue"
            placeholder="Describe issue"
            onChange={(e) => setIssue(e.target.value)}
          ></input>
          <button type="submit" onClick={createTicket}>
            Submit
          </button>
        </form>
      </div>
      <div id="openTickets">
        {tickets.map((item) => (
          <div className="singleProductCont" key={item.id}>
            <h2>{item.subject}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <div id="closedTickets">
        Ticket
        <p>{}</p>
      </div>
    </div>
  );
};

export default Tickets;
