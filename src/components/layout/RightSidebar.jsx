import React from "react";
import { Link } from "react-router-dom";

const RightSidebar = () => (
  <div className="right">
    <ul>
      <li>
        <Link>Notifications</Link>
      </li>
      <li>
        <Link>Events</Link>
      </li>
      <li>
        <Link>Saved Posts</Link>
      </li>
      <li>
        <Link>Advertisements</Link>
      </li>
      <li>
        <Link>Settings</Link>
      </li>
    </ul>
  </div>
);

export default RightSidebar;
