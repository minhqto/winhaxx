import React, { useState } from "react";
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
	FormText,
	CustomInput
} from "reactstrap";

function BusinessInformation() {
	const [storeName, setStoreName] = useState("");
	const [businessId, setBusinessId] = useState("");
	const [isStoreOwner, setIsStoreOwner] = useState(false);
	const [typeOfGoodsSold, setTypeOfGoodSold] = useState("");
	const [ownerFirstName, setOwnerFirstName] = useState("");
	const [ownerLastName, setOwnerLastName] = useState("");

	return (
		<Container>
			<Form
				style={{
					marginTop: "50px",
					height: "600px",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-evenly"
				}}
			>
				<div>
					<h2>Tell us about your business</h2>
					<p>
						The basic information we will need to help set up your
						store delivery thing
					</p>
				</div>
				<FormGroup>
					<Label style={{ fontSize: "0.9rem" }} for="exampleEmail">
						Your store name
					</Label>
					<Input
						type="text"
						name="storeName"
						id="storeName"
						placeholder="Enter store name"
						onChange={e => setStoreName(e.target.value)}
					/>
				</FormGroup>

				<Row>
					<Col xs="6">
						<FormGroup>
							<Label
								style={{ fontSize: "0.9rem" }}
								for="exampleEmail"
							>
								Business ID
							</Label>
							<Input
								type="text"
								name="businessId"
								id="businessId"
								placeholder="Enter business id"
								onChange={e => setBusinessId(e.target.value)}
							/>
						</FormGroup>
					</Col>
					<Col xs="6">
						<FormGroup>
							<Label
								style={{ fontSize: "0.9rem" }}
								for="exampleCustomSelect"
							>
								Type of goods sold
							</Label>
							<CustomInput
								type="select"
								id="exampleCustomSelect"
								name="customSelect"
								onChange={e =>
									setTypeOfGoodSold(e.target.value)
								}
							>
								<option value="">Select</option>
								<option>Value 1</option>
								<option>Value 2</option>
								<option>Value 3</option>
								<option>Value 4</option>
								<option>Value 5</option>
							</CustomInput>
						</FormGroup>
					</Col>
				</Row>

				<FormGroup
					tag="fieldset"
					onChange={e => setIsStoreOwner(e.target.value)}
				>
					<Label style={{ fontSize: "0.9rem" }} for="exampleEmail">
						Are you the primary store owner
					</Label>
					<div>
						<CustomInput
							type="radio"
							id="yes"
							value={true}
							name="radio"
							label="Yes"
							inline
						/>
						<CustomInput
							type="radio"
							id="no"
							value={false}
							name="radio"
							label="No"
							inline
						/>
					</div>
				</FormGroup>

				<Row form>
					<Col xs={12}>
						<h6>Great, what is your name?</h6>
					</Col>
					<Col xs={6}>
						<FormGroup>
							<Label
								style={{ fontSize: "0.9rem" }}
								for="firstName"
							>
								First Name
							</Label>
							<Input
								type="text"
								name="firstName"
								id="firstName"
								onChange={e =>
									setOwnerFirstName(e.target.value)
								}
							/>
						</FormGroup>
					</Col>
					<Col xs={6}>
						<FormGroup>
							<Label
								style={{ fontSize: "0.9rem" }}
								for="lastName"
							>
								Last Name
							</Label>
							<Input
								type="text"
								name="lastName"
								id="lastName"
								onChange={e => setOwnerLastName(e.target.value)}
							/>
						</FormGroup>
					</Col>
				</Row>

				<FormGroup check row>
					<Col sm={{ size: 10, offset: 10 }}>
						<Button
							style={{
								width: "100px",
								backgroundColor: "#185287"
							}}
						>
							<Link
								style={{
									textDecoration: "none",
									color: "white"
								}}
								to="/dashboard"
							>
								Next
							</Link>
						</Button>
					</Col>
				</FormGroup>
			</Form>
		</Container>
	);
}

export default BusinessInformation;
