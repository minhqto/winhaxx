import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	Button
} from "reactstrap";

function CustomNavbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);
	return (
		<Navbar style={{ backgroundColor: "#FFF6EC" }} light expand="md">
			<NavbarBrand href="/">Stash</NavbarBrand>
			<NavbarToggler onClick={toggle} />
			<Collapse isOpen={isOpen} style={{ float: "right" }} navbar>
				<Nav className="ml-auto" navbar>
					<NavItem>
						<NavLink
							style={{
								textDecoration: "none",
								marginRight: "20px"
							}}
						>
							<Link
								style={{
									textDecoration: "none",
									color: "#185287"
								}}
								to="/signin"
							>
								LOG IN
							</Link>
						</NavLink>
					</NavItem>

					<NavItem>
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
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
	);
}

export default CustomNavbar;
