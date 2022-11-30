import React, { useState, useEffect } from "react";
import MainScreen from "../MainScreen";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./login.css";
import axios from "axios";
import Loading from "../Loading";
import ErrorMessage from "../ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/userActions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let nai = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  // console.log("print userLogin", userLogin.userInfo.name);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      nai("/mynotes");
    }
  }, [nai, userInfo]);

  //submit handler
  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(email,password);
    dispatch(login(email, password));
  };

  return (
    <MainScreen title="LOGIN">
      <div className="loginContainer">
        {error && <ErrorMessage>{error}</ErrorMessage>}
        
        {loading && <Loading />}
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              //   autofill={false}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
          ></Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            New Customer ? <Link to="/register">Register Now !</Link>
          </Col>
        </Row>
      </div>
    </MainScreen>
  );
};

export default Login;
