import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className="menu">
      <ul>
        <li><Link to="/insertdata">Insert Data</Link></li>
        <li><Link to="/viewalldata">View All Data</Link></li>
        <li><Link to="/getrank">Get Rank</Link></li>
        <li><Link to="/updatescore">Update Score</Link></li>
        <li><Link to="/deleterecord">Delete Record</Link></li>
      </ul>
    </div>
  );
}

export default Menu;
