import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to the World of DevOps</h1>
        <p className="subtitle">Bridging the gap between development and operations</p>
      </div>
      
      <div className="content-section">
        <div className="card">
          <h2>What is DevOps?</h2>
          <p>DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to shorten the development lifecycle and provide continuous delivery with high software quality.</p>
        </div>

        <div className="card">
          <h2>Impact on Software Industry</h2>
          <ul>
            <li>Faster time to market</li>
            <li>Improved collaboration between teams</li>
            <li>Higher quality software releases</li>
            <li>Increased automation and efficiency</li>
            <li>Better customer satisfaction</li>
          </ul>
        </div>

        <div className="card">
          <h2>Key Benefits</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h3>Speed</h3>
              <p>Rapid delivery of features and updates</p>
            </div>
            <div className="benefit-item">
              <h3>Reliability</h3>
              <p>Consistent and stable deployments</p>
            </div>
            <div className="benefit-item">
              <h3>Scale</h3>
              <p>Efficiently manage complex systems</p>
            </div>
            <div className="benefit-item">
              <h3>Security</h3>
              <p>Built-in security practices</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 