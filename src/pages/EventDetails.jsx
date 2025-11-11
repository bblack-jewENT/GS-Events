import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./EventDetails.css";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [ticketType, setTicketType] = useState("Regular");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Mock data
    const mockEvent = {
      id: 1,
      title: "Tech Meetup",
      date: "2023-12-01",
      location: "City Hall",
      description: "A great tech event",
      image: "https://via.placeholder.com/300x200",
      price: 50,
    };
    setEvent(mockEvent);
  }, [id]);

  const handlePurchase = () => {
    // Simulate purchase
    alert(`Purchased ${quantity} ${ticketType} ticket(s) for ${event.title}`);
  };

  if (!event) return <div>Loading...</div>;

  return (
    <div className="event-details">
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <p>{event.date}</p>
      <p>{event.location}</p>
      <p>{event.description}</p>
      <div className="ticket-selection">
        <label>
          Ticket Type:
          <select
            value={ticketType}
            onChange={(e) => setTicketType(e.target.value)}
          >
            <option value="Regular">Regular - ${event.price}</option>
            <option value="VIP">VIP - ${event.price * 2}</option>
          </select>
        </label>
        <label>
          Quantity:
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
        <p>
          Total: $
          {(ticketType === "VIP" ? event.price * 2 : event.price) * quantity}
        </p>
        <button onClick={handlePurchase}>Purchase Tickets</button>
      </div>
    </div>
  );
};

export default EventDetails;
