import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Button, Row, Container, Col } from "reactstrap";

const LandingPage = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="need">Get what you need.</h1>
          {/* <div>
            <Button style={{ backgroundColor: "#185287" }}>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white"
                }}
                to="/signup"
              >
                SIGN UP
              </Link>
            </Button>
            <Button
              style={{
                backgroundColor: "white",
                marginLeft: "20px"
              }}
            >
              <Link
                style={{
                  textDecoration: "none",
                  color: "185287"
                }}
                to="/signin"
              >
                LOG IN
              </Link>
            </Button>
          </div> */}
          <div>
            <img className="boxman" src={require("../img/boxman.jpg")}></img>
          </div>
          <div>
            <p className="desc">
              We help connect small businesses selling essential goods deliver
              their products and words words words words words words words words
              words words words words words words words fast delivery
            </p>
          </div>
          <Container>
            <Row className="buyerOrSeller">
              <Col sm={{ size: 5 }}>
                <Button color="secondary">I'm a buyer</Button>
              </Col>
              <Col sm={{ size: 5 }}>
                <Button color="primary">I'm a store owner</Button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
