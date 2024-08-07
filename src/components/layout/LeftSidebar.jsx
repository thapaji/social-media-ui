import React from "react";
import { Link } from "react-router-dom";

const LeftSidebar = () => (
  <div className="left">
    <ul>
      <li><Link>Home</Link></li>
      <li><Link>Profile</Link></li>
      <li><Link>Messages</Link></li>
      <li><Link>Friends</Link></li>
      <li><Link>Groups</Link></li>
    </ul>
  </div>
);

export default LeftSidebar;
