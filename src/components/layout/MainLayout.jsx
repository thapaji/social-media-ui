import React from "react";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col md={2} className="sidebar">
            <LeftSidebar />
          </Col>
          <Col md={8}>
            <Outlet />
          </Col>
          <Col md={2} className="sidebar">
            <RightSidebar />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MainLayout;
