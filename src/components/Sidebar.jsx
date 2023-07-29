import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Import the CSS file

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar__menu">
        <li className="sidebar__menu-item">
          <Link to="/">Home</Link>
        </li>
        <li className="sidebar__menu-item">
          <Link to="/explore">Explore</Link>
        </li>
        <li className="sidebar__menu-item">
          <Link to="/playlist">Playlists</Link>
        </li>
        <li className="sidebar__menu-item">
          <Link to="/watch-later">Watch Later</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
