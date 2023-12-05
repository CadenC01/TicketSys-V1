import React from "react";
import {useEffect } from "react";

const Tickets = ({
  setTickets,
  tickets,
  issue,
  setIssue,
  subject,
  setSubject,
  makeTicket,
  fetchTickets,
}) => {

  const createTicket = async(e) => {
    e.preventDefault();
    makeTicket();
    fetchTickets(); 
    alert("Ticket created refresh page.")
    //window.location.reload(false); 
  }

  useEffect(() => {
    fetchTickets();
  }, [fetchTickets]);


  return (
    <div>
      <div id="tform">
        <form id="loginForm">
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
      <div id="ticketContain">
        <div id="openTickets">
        {tickets.map((item) => {
                if (item.isOpen) {
                    return(
                    <div className="singleTicket" key={item.id}>
                    <h2>{item.Subject}</h2>
                    <p>{item.Description}</p>
                </div> );
                }
            })}
        </div>
        <div id="closedTickets">
            {tickets.map((item) => {
                if (!item.isOpen) {
                    return(
                    <div className="singleTicket" key={item.id}>
                    <h2>{item.Subject}</h2>
                    <p>{item.Description}</p>
                    <p>{item.Comments}</p>
                    <p>Ticket Closed</p>

                </div> );
                }
            })}
        </div>
      </div>
    </div>
  );
};

export default Tickets;
