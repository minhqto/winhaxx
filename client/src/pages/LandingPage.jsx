import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Button } from "reactstrap";

const LandingPage = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="stash">stash</h1>
          <p>Find your neighbourhood friendly essentials!</p>
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

export default LandingPage;
