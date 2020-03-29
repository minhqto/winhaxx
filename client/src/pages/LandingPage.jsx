import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Button, Row, Container, Col } from "reactstrap";

const LandingPage = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="need">Our stash to yours.</h1>
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
              We help connect micro-businesses selling essential goods deliver
              their products to those close around them. Help local businesses
              and get the items you need during difficult times.
            </p>
          </div>
          <Container>
            <Row className="buyerOrSeller">
              <Col sm={{ size: 5 }}>
                <Button color="secondary">
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "white"
                    }}
                    to="/buyer"
                  >
                    I'm a buyer
                  </Link>
                </Button>
              </Col>
              <Col sm={{ size: 5 }}>
                <Button color="primary">
                  {/* does not refresh the state */}
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "white"
                    }}
                    to="/business"
                  >
                    I'm a store owner
                  </Link>
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
