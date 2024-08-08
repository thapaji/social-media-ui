import React from "react";
import { Link } from "react-router-dom";
import home from "../../assets/image/home.png";
import message from "../../assets/image/message.png";
import group from "../../assets/image/group.svg";
import friends from "../../assets/image/friend.png";
import profile from "../../assets/image/profile.png";

const menus = [
  { image: home, title: "Home", Path: "/" },
  {
    image: profile,
    title: "Profile",
    path: "/profile",
  },
  {
    image: message,
    title: "Messages",
    path: "/message",
  },
  {
    image: friends,
    title: "Friends",
    path: "/friends",
  },
  {
    image: group,
    title: "Groups",
    path: "/groups",
  },
];

const LeftSidebar = () => (
  <div className=" d-flex flex-column gap-4 left p-2">
    
    {menus.map((menu) => (
      
        menu.title.toLowerCase() === "profile" ? <div className="d-flex menu  gap-2 align-items-center  py-3 px-3">
        <div className="menu-image menu-image-profile">
              <img src={menu.image}  alt="profile-img" />
            </div>

        <div className="menu-title">{menu.title}</div>
      </div>
      :
      <div className="d-flex menu gap-2 align-items-center rounded py-3 px-3">
        <div className="menu-image">
          <img src={menu.image}  alt="home-img" />
        </div>

        <div className="menu-title">{menu.title}</div>
      </div>
      
    ))}
  </div>
);

export default LeftSidebar;
