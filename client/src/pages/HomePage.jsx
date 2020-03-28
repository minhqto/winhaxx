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
};

export default HomePage;
