import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Button } from "reactstrap";

<<<<<<< HEAD:client/src/pages/LandingPage.jsx
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
=======
const HomePage = () => {
	return (
		<section className="landing">
			<div className="dark-overlay">
				<div className="landing-inner">
					<h1>Winhacksss</h1>
					<p>Fight against Covid19</p>
					<div>
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
					</div>
				</div>
			</div>
		</section>
	);
>>>>>>> 37aa3e7b10705df4a1fb35a2a4334f5e911dd789:client/src/pages/HomePage.jsx
};

export default LandingPage;
