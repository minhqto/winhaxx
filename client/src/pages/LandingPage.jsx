import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Button, Row, Container, Col } from "reactstrap";

const LandingPage = () => {
	return (
		<section className="landing">
			<div className="dark-overlay">
				<div className="landing-inner">
					<h1 className="need">Our stash to yours.</h1>

					<div>
						<img
							className="boxman"
							src={require("../img/boxman.jpg")}
						></img>
					</div>
					<div>
						<p className="desc">
							We help connect micro-businesses selling essential
							goods deliver their products to those close around
							them. Help local businesses and get the items you
							need during difficult times.
						</p>
					</div>
					<Container>
						<Row className="buyerOrSeller">
							<Col sm={{ size: 5 }}>
								<Link
									style={{
										textDecoration: "none",
										color: "white"
									}}
									to="/buyer"
								>
									<Button color="secondary">
										I'm a buyer
									</Button>
								</Link>
							</Col>
							<Col sm={{ size: 5 }}>
								{/* does not refresh the state */}
								<Link
									style={{
										textDecoration: "none",
										color: "white"
									}}
									to="/business"
								>
									<Button color="primary">
										I'm a store owner
									</Button>
								</Link>
							</Col>
						</Row>
					</Container>
				</div>
			</div>
		</section>
	);
};

export default LandingPage;
