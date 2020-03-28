import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";

<<<<<<< HEAD:client/src/components/layout/Landing.js
const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1>MERN Stack Boilerplate</h1>
          <p>A boilerplate for building web apps with MERN stack</p>
          <div>
            <Button className="buttons" variant="primary" href="#">
              Register
            </Button>
            <Button className="buttons" variant="light" href="#">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
=======
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
						<Button
							className="buttons"
							variant="light"
							href="/dashboard"
						>
							Go to Dashboard
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
>>>>>>> 97ce8f8cd834b12155c60048dd6a31ba916a8c51:client/src/pages/HomePage.jsx
};

export default HomePage;
