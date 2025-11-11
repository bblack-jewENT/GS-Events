import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Events.css";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    // Mock data for events
    const mockEvents = [
      {
        id: 1,
        title: "Tech Meetup",
        date: "2023-12-01",
        location: "City Hall",
        category: "Tech",
        description: "A great tech event",
        image: "https://via.placeholder.com/300x200",
        price: 50,
      },
      {
        id: 2,
        title: "Music Concert",
        date: "2023-12-02",
        location: "Stadium",
        category: "Music",
        description: "Amazing concert",
        image: "https://via.placeholder.com/300x200",
        price: 100,
      },
      // Add more events
    ];
    setEvents(mockEvents);
    setFilteredEvents(mockEvents);
  }, []);

  useEffect(() => {
    let filtered = events.filter(
      (event) =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (category) {
      filtered = filtered.filter((event) => event.category === category);
    }
    setFilteredEvents(filtered);
  }, [searchTerm, category, events]);

  return (
    <div className="events">
      <h1>Events</h1>
      <div className="filters">
        <input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Tech">Tech</option>
          <option value="Music">Music</option>
          <option value="Art">Art</option>
          <option value="Food">Food</option>
        </select>
      </div>
      <div className="events-grid">
        {filteredEvents.map((event) => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.title} />
            <h3>{event.title}</h3>
            <p>{event.date}</p>
            <p>{event.location}</p>
            <p>{event.description}</p>
            <Link to={`/event/${event.id}`}>
              <button>Buy Ticket</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
