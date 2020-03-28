import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";

const HomePage = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1>Winhacksss</h1>
          <p>Fight against Covid19</p>
          <div>
            <Button className="buttons" variant="primary" href="#">
              Register
            </Button>
            <Button className="buttons" variant="light" href="/dashboard">
              Go to Dashboard
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
