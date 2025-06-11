import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const [clickCount, setClickCount] = useState(0);
  const [hasClicked, setHasClicked] = useState(false);
  const navigate = useNavigate();
  const username = localStorage.getItem('username');

  useEffect(() => {
    if (!localStorage.getItem('isLoggedIn')) {
      navigate('/login');
    }
    // Check if user has already clicked
    const userClickStatus = localStorage.getItem(`clicked_${username}`);
    if (userClickStatus === 'true') {
      setHasClicked(true);
    }
    // Get the current click count
    const currentCount = localStorage.getItem('totalClicks') || '0';
    setClickCount(parseInt(currentCount));
  }, [navigate, username]);

  const handleClick = () => {
    if (!hasClicked) {
      const newCount = clickCount + 1;
      setClickCount(newCount);
      setHasClicked(true);
      localStorage.setItem('totalClicks', newCount.toString());
      localStorage.setItem(`clicked_${username}`, 'true');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h1>Welcome, {username}!</h1>
        <p className="welcome-message">You are successfully logged in.</p>
        
        <div className="click-counter">
          <h2>Global Click Counter</h2>
          <p className="count">Total Clicks: {clickCount}</p>
          <button 
            className={`click-button ${hasClicked ? 'disabled' : ''}`}
            onClick={handleClick}
            disabled={hasClicked}
          >
            {hasClicked ? 'Already Clicked' : 'Click Me!'}
          </button>
        </div>

        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard; 