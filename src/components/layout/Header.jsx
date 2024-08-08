import React from "react";
import { Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { Logo } from "./Logo";
import { HiUserGroup } from "react-icons/hi2";
import { FaBagShopping } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { IoChatboxEllipsesSharp } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import profile from "../../assets/image/profile.png";
const centerNavMenu = [
  {
    name: "Home",
    Icon: GoHomeFill,
    path: "/",
    active: true,
  },
  {
    name: "Shop",
    Icon: FaBagShopping,
    path: "/",
    active: false,
  },
  {
    name: "Events",
    Icon: BsFillCalendarEventFill,
    path: "/",
    active: false,
  },
  {
    name: "Groups",
    Icon: HiUserGroup,
    path: "/",
    active: false,
  },
];

const rightNavMenu = [
  {
    name: "Messages",
    Icon: IoChatboxEllipsesSharp,
    path: "/",
    active: false,
  },
  {
    name: "Notifications",
    Icon: IoNotifications,
    path: "/",
    active: false,
  },
  {
    name: "Profile",
    Image: profile,
    path: "/",
    active: false,
  },
];

export const Header = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container fluid>
        <div className="left-nav">
          <Navbar.Brand href="#home">
            <Logo />
          </Navbar.Brand>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-center">
            {centerNavMenu.map((menu) => {
              return (
                <Nav.Link href="#home">
                  <div
                    className={
                      menu.active ? "active-icon-box home-p" : "icon-box home-p"
                    }
                  >
                    <menu.Icon
                      fontSize={"30px"}
                      color={menu.active ? "var(--activeIconColor)" : "white"}
                    />
                    <div className="home">{menu.name}</div>
                  </div>
                </Nav.Link>
              );
            })}
          </Nav>

          <Nav className="right-nav">
            {rightNavMenu.map((menu) => {
              return (
                menu.name.toLowerCase()==="profile" ? <Nav.Link href="#notifications">
                <div className="home-p">
                <div className="profile">
                <img
                  src={menu.Image}
                  className="profile-image"
                  alt="profile-img"
                />
              </div>
                  <div className="home">{menu.name}</div>
                </div>
              </Nav.Link>:
              <Nav.Link href="#notifications">
              <div className="home-p">
                <menu.Icon fontSize={"25px"} color="white" />
                <div className="home">{menu.name}</div>
              </div>
            </Nav.Link>
              );
            })}
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};


