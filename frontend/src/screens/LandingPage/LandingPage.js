import React ,{useEffect} from "react";
import { Container, Row, Button } from "react-bootstrap";
import "./landingPage.css";
import { Link,Navigate } from "react-router-dom"; 

const LandingPage = () => {
  // let history = Navigate(); 

  // useEffect(()=>{
  //   const userInfo =localStorage.getItem("userInfo")
  //   if(userInfo){
  //     history.push("/mynotes")
  //   }

  // },[history]) 
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Note Zipper</h1>
              <p className="subtitle">One Safe place for all your notes.</p>
            </div>
            <div className="buttonContainer">
              <Link to="/login">
                <Button size="lg" className="landingbutton">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button
                  variant="outline-primary"
                  size="lg"
                  className="landingbutton"
                >
                  Sign up
                </Button>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
