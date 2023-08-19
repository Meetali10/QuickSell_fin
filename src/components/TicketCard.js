import React from 'react';

const TicketCard = ({ ticket }) => {
  return (
    <div className="ticket-card">
      <p>{ticket.id}</p>
      <p>{ticket.title}</p>
      {ticket.tag.includes('Feature Request') && (
        <button className="feature-request-button">
          <span className="dot"></span> Feature Request
        </button>
      )}
    </div>
  );
};

export default TicketCard;
