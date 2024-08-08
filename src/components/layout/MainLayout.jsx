import React from "react";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import PostStatus from "./PostStatus";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="main">
      <Container fluid className="d-flex pt-3  gap-4 " >
      
        
      <div className="left-sidebar">
       <LeftSidebar/>

      </div>
      <div className="main-content">
        <PostStatus/>

      </div>
      <div className="right-sidebar">

      </div>
     
 
 </Container>

      </div>
      
    </>
  );
};

export default MainLayout;
