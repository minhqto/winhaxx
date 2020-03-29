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

function BuyerInfo() {
  const [isStoreOwner, setIsStoreOwner] = useState(false);
  const [typeOfGoodsSold, setTypeOfGoodSold] = useState("");
  const [buyerFirstName, setBuyerFirstName] = useState("");
  const [buyerLastName, setBuyerLastName] = useState("");
  const [storeAddressNum, setStoreAddressNum] = useState("");
  const [storeAddress, setStoreAddress] = useState("");
  const [storeCity, setStoreCity] = useState("false");
  const [storeProvince, setStoreProvince] = useState("");
  const [storeCountry, setStoreCountry] = useState("");
  const [storePostal, setStorePostal] = useState("");

  return (
    <Container>
      <Form
        style={{
          marginTop: "50px",
          height: "600px",
          display: "flex",
          flexDirection: "column"
          // justifyContent: "space-evenly"
        }}
      >
        <div>
          <h2>Tell us about yourself</h2>
          <p>
            The basic information we will need to help set up your buyer
            profile.
          </p>
        </div>
        <Row>
          <Col xs="4">
            <FormGroup>
              <Label style={{ fontSize: "0.9rem" }} for="fname">
                First name
              </Label>
              <Input
                type="text"
                name="fname"
                id="fname"
                placeholder="First name"
                onChange={e => setBuyerFirstName(e.target.value)}
              />
            </FormGroup>
          </Col>

          <Col xs="4">
            <FormGroup>
              <Label style={{ fontSize: "0.9rem" }} for="lname">
                Last Name
              </Label>
              <Input
                type="text"
                name="lname"
                id="lname"
                placeholder="Last Name"
                onChange={e => setBuyerLastName(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default BuyerInfo;
