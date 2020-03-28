import React, { Fragment, useEffect, useState } from "react";

const Dashboard = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const res = await fetch("/api/users");
			res.json()
				.then(res => setUsers(res))
				.catch(err => console.log(err));
		}

		fetchData();
	});

	return (
		<Fragment>
			<h1 className="large text-primary">Dashboard</h1>
			<p className="lead">
				<i className="fas fa-user" /> Welcome to dashboard
			</p>

			<ul>
				{users.map(user => (
					<li>{user.name}</li>
				))}
			</ul>
		</Fragment>
	);
};

export default Dashboard;
