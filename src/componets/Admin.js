import React from "react";
import { useEffect } from "react";

const Admin = ({tickets, fetchTickets,comment,setComment}) => {

    useEffect(() => {
        fetchTickets();
      }, []);
    
    function updateTicket(e){
        e.preventDefault();
    };

    return (
        <div id="ticketContain">
        <div id="openTickets">
        {tickets.map((item) => {
                if (item.isOpen) {
                    return(
                    <div className="singleTicket" key={item.id}>
                    <h2>{item.Subject}</h2>
                    <p>{item.Description}</p>
                    <form onSubmit={updateTicket}>
                        <p>Comment: <input placeholder={item.Comments}></input></p>
                        <p>Close Ticket: <input type="checkbox"></input></p>
                        <button>Submit</button>
                    </form>
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
    );
};

export default Admin;