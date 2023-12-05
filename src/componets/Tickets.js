
import React from "react";
import { useState } from "react";

const Tickets = () => {
    const [subject, setSubject] = useState("");
    const [issue, setIssue] = useState("");
    const [tickets,setTicket] = useState([])
    let arrTickets = {};

    const createTicket = async (e) =>{
        
        let ticket = {};
        ticket.subject = subject;
        ticket.issue = issue;
        arrTickets.add(ticket)
        e.preventDefault();
        console.log(ticket)
        console.log(arrTickets)
    }

    

    return (
        <div>
            
            <div id="tform">
                <form >
                    <input id="tsubject" name="tsubject" placeholder="Enter subject" onChange={(e) => setSubject(e.target.value)}></input>
                    <input id="tissue" name="tissue"  placeholder="Describe issue" onChange={(e) => setIssue(e.target.value)}></input>
                    <button type="submit" onClick={createTicket}>Submit</button>
                </form>
            </div>
            <div id="openTickets">

            </div>
            <div id="closedTickets">
                Ticket
                <p>{arrTickets[0]}</p>
            </div>
        </div>
    );
};

export default Tickets;