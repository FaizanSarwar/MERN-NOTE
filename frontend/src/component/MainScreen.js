import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Screen.css";
const MainScreen = ({ title, children }) => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="">
              {title && (
                <>
                  <h1 className="heading">{title}</h1>
                  <hr/>
                </>
              )}
              {children}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainScreen;
