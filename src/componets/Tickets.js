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

  function createTicket(e) {
    e.preventDefault();
    makeTicket();
    fetchTickets(); 
    alert("form submitted");
  }

  useEffect(() => {
    fetchTickets();
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

                </div> );
                }
            })}
        </div>
      </div>
    </div>
  );
};

export default Tickets;
