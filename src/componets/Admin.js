import React from "react";
import { useEffect } from "react";

const Admin = ({tickets, fetchTickets,setComment,setisOpen,comment,isOpen,updateTicket,setId}) => {

    useEffect(() => {
        fetchTickets();
      }, [fetchTickets]);
    
    const update = async(e) =>{
        e.preventDefault();
        updateTicket();
        fetchTickets(); 
        alert("Ticket updated refresh page.")
        //window.location.reload(false);
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
                    <form onSubmit={update}>
                        <p>Comment: <input placeholder={item.Comments} onChange={(e) => setComment(e.target.value)}></input></p>
                        <p>Close Ticket: <input type="checkbox" onChange={ (e) => {console.log(e.target.value);setisOpen(false); setId(item.id)}}></input></p>
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