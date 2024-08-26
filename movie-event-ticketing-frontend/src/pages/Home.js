import React from 'react';
import './Home.css';
import movieImage from './movie.jpg';
import concertimage from './liveconcert.jpg';
import theatreimage from './theatreimage.jpg';

const Home = () => {
  return (
    <div>
      <div className="hero">
        <h1>Welcome to EventMaster</h1>
        <p>Your gateway to the best movies and live shows.</p>
        <button>Explore Now</button>
      </div>

      <div className="featured-events">
        <div className="event-card">
        <img src={movieImage} alt="Event 1" />
          <h3>Movie Premiere: Blockbuster</h3>
          <p>Catch the latest blockbuster in theaters now!</p>
          <button>Get Tickets</button>
        </div>

        <div className="event-card">
          <img src={concertimage} alt="Event 2" />
          <h3>Live Concert: The Rockstars</h3>
          <p>Experience the thrill of live music!</p>
          <button>Get Tickets</button>
        </div>

        <div className="event-card">
          <img src={theatreimage} alt="Event 3" />
          <h3>Theater Play: The Classics</h3>
          <p>Immerse yourself in timeless stories.</p>
          <button>Get Tickets</button>
        </div>
      </div>
    </div>
  );
};

export default Home;