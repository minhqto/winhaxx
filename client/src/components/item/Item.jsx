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

function Item() {
	return (
		<div style={{ width: "300px" }}>
			<Card>
				<img width="100%" src={image} alt="Card image cap" />
				<CardBody>
					<CardTitle style={{ fontWeight: "bold" }}>Soap</CardTitle>
					<CardSubtitle>Toronto Store</CardSubtitle>
					<CardText>1km away</CardText>
					<Badge
						style={{
							backgroundColor: "#FFF6EC",
							color: "black",
							width: "50px"
						}}
					>
						$8.88
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
