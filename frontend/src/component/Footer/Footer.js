import React, { useState } from "react";
import { Col, Container, Row,Form,FormControl,Nav,Nabar, } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        height :"3vh",
        position: "absolute",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy; Note Zipper</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;