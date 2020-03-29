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

function Storefront() {
  return (
    <Fragment>
      <Row>
        <Col xs="6">
          <Form
            style={{
              marginTop: "5%",
              marginLeft: "10%",
              height: "600px",
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

      <div id="items"></div>
    </Fragment>
  );
}

export default Storefront;
