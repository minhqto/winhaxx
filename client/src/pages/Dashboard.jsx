import React, { Fragment, useEffect, useState } from "react";
import Item from "../components/item/Item";
import { Row, Col } from "reactstrap";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/users");
      res
        .json()
        .then(res => setUsers(res))
        .catch(err => console.log(err));
    }

    fetchData();
  });

  return (
    <Fragment>
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome to your store's dashboard
      </p>

      <ul>
        {users.map(user => (
          <li>{user.name}</li>
        ))}
      </ul>
      <Row>
        <Col sm="4">
          <Item />
        </Col>
        <Col sm="4">
          <Item />
        </Col>
        <Col sm="4">
          <Item />
        </Col>
      </Row>

      <Row>
        <Col sm="4">
          <Item />
        </Col>
        <Col sm="4">
          <Item />
        </Col>
        <Col sm="4">
          <Item />
        </Col>
      </Row>
    </Fragment>
  );
};

export default Dashboard;
