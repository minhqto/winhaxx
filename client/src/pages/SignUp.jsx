import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import {
	Container,
	Row,
	Col,
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	FormText
} from "reactstrap";

function SignUp() {
	return (
		<Container style={{ padding: "10%" }}>
			<Form
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-around",

					margin: "0px auto",
					height: "400px",
					width: "70%"
				}}
			>
				<h2>Sign up to start getting your products delivered</h2>
				<FormGroup>
					<Input
						type="email"
						name="email"
						id="email"
						placeholder="Email"
					/>
				</FormGroup>
				<FormGroup>
					<Input
						type="password"
						name="password"
						id="password"
						placeholder="Password"
					/>
				</FormGroup>
				<Button style={{ backgroundColor: "#185287" }}>
					<Link
						style={{ textDecoration: "none", color: "white" }}
						to="/dashboard"
					>
						SET UP MY STORE
					</Link>
				</Button>
			</Form>
		</Container>
	);
}

export default SignUp;
