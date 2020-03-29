import React, { useState, Fragment, useEffect, useContext } from "react";

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
import Item from "../components/item/Item";
import ItemW from "../components/item/Item(Windsor)";

import { AppContext } from "../App";

function Storefront() {
	const context = useContext(AppContext);

	useEffect(() => {
		async function fetchData() {
			const res = await fetch("/api/items");
			res.json()
				.then(res => context.itemsAround.set(res))
				.catch(err => console.log(err));
		}

		fetchData();
	});

	return (
		<Container>
			<Row>
				<Col xs="6">
					<Form
						style={{
							marginTop: "5%",
							marginLeft: "10%",
							height: "5%",
							display: "flex",
							flexDirection: "column"
							// justifyContent: "space-evenly"
						}}
					>
						<FormGroup>
							<Input
								type="text"
								name="search"
								id="search"
								placeholder="Search"
							></Input>
						</FormGroup>
					</Form>
				</Col>
			</Row>

			<div
				style={{
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					justifyContent: "space-around"
				}}
			>
				{context.itemsAround.get.map(item => (
					<Item
						name={item.name}
						imgUrl={item.imgUrl}
						price={item.price}
						quantity={item.quantity}
					/>
				))}
			</div>
		</Container>
	);
}

export default Storefront;
