import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";

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
};

export default Landing;
