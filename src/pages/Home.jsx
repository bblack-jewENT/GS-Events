import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Find your next event 🎫</h1>
        <input
          type="text"
          placeholder="Search events..."
          className="search-bar"
        />
      </section>
      <section className="featured-events">
        <h2>Featured Events</h2>
        <div className="events-grid">
          {/* Placeholder for event cards */}
          <div className="event-card">
            <img src="https://via.placeholder.com/300x200" alt="Event" />
            <h3>Sample Event 1</h3>
            <p>Date: 2023-12-01</p>
            <p>Location: City Hall</p>
            <button>Buy Ticket</button>
          </div>
          <div className="event-card">
            <img src="https://via.placeholder.com/300x200" alt="Event" />
            <h3>Sample Event 2</h3>
            <p>Date: 2023-12-02</p>
            <p>Location: Stadium</p>
            <button>Buy Ticket</button>
          </div>
        </div>
      </section>
      <section className="trending-brands">
        <h2>Trending Brands</h2>
        <div className="brands-grid">
          <div className="brand-card">Brand 1</div>
          <div className="brand-card">Brand 2</div>
        </div>
      </section>
    </div>
  );
};

export default Home;
