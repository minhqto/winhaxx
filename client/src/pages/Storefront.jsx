import React, { UseState, Fragment } from "react";

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

function Storefront() {
  return (
    <Fragment>
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
          <ItemW />
        </Col>
        <Col sm="4">
          <ItemW />
        </Col>
        <Col sm="4">
          <ItemW />
        </Col>
      </Row>
    </Fragment>
  );
}

export default Storefront;
