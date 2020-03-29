import React from "react";
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardLink,
	CardTitle,
	CardSubtitle,
	Badge,
	Button
} from "reactstrap";

import image from "../../img/showcase.jpg";

function Item({ name, imgUrl, price, quantity }) {
	return (
		<div style={{ width: "250px", marginBottom: "20px" }}>
			<Card>
				<img width="100%" src={imgUrl} alt="Card image cap" />
				<CardBody>
					<CardTitle style={{ fontWeight: "bold" }}>{name}</CardTitle>
					<CardSubtitle>Quantity: {quantity}</CardSubtitle>
					<CardText>1km away</CardText>
					<Badge
						style={{
							backgroundColor: "#FFF6EC",
							color: "black",
							width: "50px"
						}}
					>
						{price}
					</Badge>
					<Button
						style={{
							float: "right",
							backgroundColor: "#185287"
						}}
						size="sm"
					>
						+ ADD TO CART
					</Button>
				</CardBody>
			</Card>
		</div>
	);
}

export default Item;
