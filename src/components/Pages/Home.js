import React from "react";
import './PageStyles/Home.css';
import Pricing from "./Pricing";
import Solutions from "./Solutions";

function Home() {

  
  return (
    <div className="homepage">
      <header className="header">
        <h1>Green Energy Initiatives</h1>
      </header>

      <section className="hero">
        <h2>Empowering a Sustainable Future</h2>
        <p>Explore green energy solutions for a cleaner and more efficient tomorrow.</p>
        <button className="cta-button" ><a className="homepage-button-link" href="./Solutions">Learn More</a></button>
      </section>

      <section className="featured-solutions">
        <div className="solution-card">
          <h3>Solar Panels</h3>
          <p>Harness the power of the sun with solar energy solutions.</p>
          <a href="./Solutions">Learn More</a>
        </div>
        <div className="solution-card">
          <h3>Wind Turbines</h3>
          <p>Generate renewable energy with the force of the wind.</p>
          <a href="./Solutions">Learn More</a>
        </div>
        {/* Add more solution cards as needed */}
      </section>

      <section className="calculator-preview">
        <h2>Estimate Your Savings</h2>
        <p>Use our calculator to see how much you can save with green energy solutions.</p>
        <button className="cta-button"><a className="homepage-button-link" href="./Pricing">Calculate Now</a></button>
      </section>

      {/* Add more sections as needed */}
    </div>
  )
}

export default Home;
